const express = require('express');
const app = express();
const port = process.env.PORT || 4000; // Set your desired port number
const cors=require('cors');
const rateLimit = require('express-rate-limit');
const otpTemplate = require('./template/otpTemplate');
const nodemailer = require('nodemailer');

// Create a transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  host:'smtp-relay.brevo.com',
  port:587,
  auth: {
    user: 'heruko.pythonanywhere@gmail.com',  // Your Gmail email address
    pass:process.env.REACT_APP_PASS     // Your Gmail password or app password
  }
});

// Define your routes and middleware here

const ipRateLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 3,
  message: {
    success: false,
    message: 'Too many requests from this IP, please try again after 1 hour.',
  },
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(express.json());
app.use(cors());
app.use('/flight',require('./routes/flight'));
app.use('/hotel',require('./routes/hotel'));

const otpStore = new Map();

app.post('/hbsendotp',ipRateLimiter, async (req, res) => {
  const otp = Math.floor(100000 + Math.random() * 900000);
  const expirationTime = Date.now() + 5 * 60 * 1000; // 5 minutes from now
  otpStore.set(req.body.userEmail, { otp, expirationTime });
  const mailOptions = {
    from: 'HealthBlocks <noreply@healthblocks.vercel.app>',
    to: req.body.userEmail,
    subject: 'Your HealthBlocks OTP',
    html:otpTemplate(otp)
};

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          res.send(error);
      } else {
          res.json({ success: true, message: 'OTP send successfully!' });
      }
  }); 
})

app.post('/hbverifyotp', (req, res) => {
  const { userEmail, otp } = req.body;
  const storedData = otpStore.get(userEmail);

  if (!storedData) {
    return res.status(400).json({ success: false, message: 'OTP not found or expired.' });
  }

  const { otp: storedOtp, expirationTime } = storedData;

  if (Date.now() > expirationTime) {
    otpStore.delete(userEmail);
    return res.status(400).json({ success: false, message: 'OTP has expired.' });
  }

  if (otp === storedOtp) {
    otpStore.delete(userEmail); // Remove OTP after successful verification
    return res.json({ success: true, message: 'OTP verified successfully!' });
  } else {
    return res.status(400).json({ success: false, message: 'Invalid OTP.' });
  }
})


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get('/',(req,res)=>{
    res.send("Working!!");
})



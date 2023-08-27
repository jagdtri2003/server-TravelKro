const express = require('express');
const app = express();
const port = process.env.PORT || 4000; // Set your desired port number

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

app.use(express.json());
app.use('/flight',require('./routes/flight'));


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get('/',(req,res)=>{
    res.send("Working!!");
})

app.post('/sendmail', (req, res) => {

    // Email data
    const mailOptions = {
        from: 'noreply@travelkro.in',
        to: req.body.usermail,
        subject: 'Hello from Nodemailer',
        text: 'Hello, this is a test email sent with Nodemailer!'
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.send(error);
        } else {
            res.send("Email Send!!");
        }
    });
});


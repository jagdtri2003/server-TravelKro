const express = require('express');
const router = express.Router();
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

  router.post('/',(req,res)=>{
    const mailOptions={
      from:"noreply@travelkro.in",
      to:req.body.userEmail,
      subject:"Hotel Confirmation Details",
      html:`
      <html>
      <head>
          <style>
              /* Your email styles here */
              body {
                  font-family: Arial, sans-serif;
                  background-color: #f4f4f4;
                  margin: 0;
                  padding: 0;
              }
              
              .container {
                  max-width: 500px;
                  margin: 0 auto;
                  padding: 20px;
                  background-color: #ffffff;
                  border-radius: 30px;
                  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);
              }
              
              h1 {
                  color: #333;
              }
              
              p {
                  font-size: 15px;
                  color: #666;
              }
              
              .button {
                  display: inline-block;
                  background-color: #007BFF;
                  color: #fff;
                  padding: 10px 20px;
                  text-decoration: none;
                  border-radius: 5px;
              }
          </style>
      </head>
      <body>
          <div class="container">
              <h1>Flight Reservation Confirmation</h1>
              <p>Dear ${req.body.username},<br>Your Hotel Booking have been confirmed and below is the detail for same.</p>
              <!-- Insert dynamic data here -->
              <p><strong>Hotel Name:</strong> ${req.body.hotelName}</p>
              <p><strong>Hotel Location:</strong> ${req.body.hotelLocation}</p>
              <p><strong>Days:</strong> ${req.body.days}</p>
              <p><strong>From:</strong> ${req.body.from}</p>
              <p><strong>To:</strong> ${req.body.to}</p>
              <p><strong>Number of Rooms:</strong> ${req.body.numberOfRoom}</p>
              <p><strong>Total Price:</strong> ₹${req.body.totalPrice}</p>
              <p><strong>Reference ID:</strong> ${req.body.referenceId}</p>
              <p><strong>Payment Status:</strong> Successful</p>
              <p><strong>Receipt Generated At:</strong> ${req.body.bookingTime}</p>
              <p>Thank you for choosing our services. We look forward to serving you on your upcoming flight.</p>
              <p>Safe travels!</p>
              <p>Best regards,<br>Jagdamba from TravelKro</p>
              <a href="https://travelkro.vercel.app/" class="button">Book More</a>
          </div>
      </body>
      </html>
  `
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        res.sendStatus(400);
    } else {
        res.send("Email Send!!");
    }
  });
})

module.exports = router;
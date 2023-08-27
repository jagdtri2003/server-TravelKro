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
      subject:"Flight Confirmation Details",
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
                  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
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
              <p>Dear ${req.body.username},</p>
              <!-- Insert dynamic data here -->
              <p><strong>Flight Name:</strong> ${req.body.flightName}</p>
              <p><strong>Departure:</strong> ${req.body.departureCity}</p>
              <p><strong>Destination:</strong> ${req.body.arrivalCity}</p>
              <p><strong>Departure Time:</strong> ${req.body.departureTime}</p>
              <p><strong>Cabin Class:</strong> ${req.body.cabinClass}</p>
              <p><strong>Passenger Count:</strong> ${req.body.passengerCount}</p>
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
        res.send(error);
    } else {
        res.send("Email Send!!");
    }
  });
})

module.exports = router;
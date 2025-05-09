const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const path = require('path');
const flightTemplate = require('../template/cancelFlight');
const hotelTemplate = require('../template/cancelHotel');


const transporter = nodemailer.createTransport({
    host:'smtp-relay.brevo.com',
    port:587,
    auth: {
      user: 'heruko.pythonanywhere@gmail.com',  // Your Gmail email address
      pass:process.env.REACT_APP_PASS || 'nTmdLEXBKAgjFcJV'   // Your Gmail password or app password
    }
  });

router.post('/', async (req, res) => {
  const booking = req.body;

  if (!booking.email || !booking.customerName || !booking.referenceId) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  if (booking.isFlight){
    var emailTemplate = flightTemplate(booking);
  }else{
    var emailTemplate = hotelTemplate(booking);
  }
  const randomDelay = booking.delay || (Math.floor(Math.random() * 5) + 5) * 60 * 1000;  
    try {
      setTimeout(async() => {
        await transporter.sendMail({
          from: `"TravelKro" <noreply@travelkro.vercel.app>`,
          to: booking.email,
          subject: 'Booking Cancellation Confirmation - TravelKro',
          html: emailTemplate,
        });
  
        console.log(`✅ Email sent to ${booking.email}`);
      }, randomDelay); 
    } catch (error) {
      console.error(`❌ Failed to send email to ${booking.email}:`, error.message);
    }
  res.json({ message: `Email will be sent to ${booking.email} in about ${randomDelay / 60000} minutes.` });
});

module.exports = router;

module.exports = (hotelDetails) => `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Booking Cancellation Confirmation - TravelKro</title>
  <style>
    /* Reset styles */
    body {
      margin: 0;
      padding: 0;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.6;
      color: #333333;
      background-color: #f9f9f9;
    }
    
    /* Container */
    .email-container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
    }
    
    /* Header */
    .email-header {
      background: linear-gradient(135deg, #2563eb, #4f46e5);
      color: #ffffff;
      padding: 24px;
      text-align: center;
    }
    
    .email-header h1 {
      margin: 0;
      font-size: 28px;
      font-weight: 600;
    }
    
    .email-header p {
      margin: 6px 0 0;
      opacity: 0.9;
      font-size: 16px;
    }
    
    /* Logo */
    .logo {
      margin-bottom: 16px;
      font-size: 32px;
      font-weight: 700;
      color: #ffffff;
    }
    
    /* Content */
    .email-content {
      padding: 32px 24px;
    }
    
    .greeting {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 24px;
    }
    
    .message {
      margin-bottom: 24px;
      font-size: 16px;
    }
    
    /* Booking details */
    .booking-details {
      background-color: #f8fafc;
      border-radius: 8px;
      padding: 24px;
      margin-bottom: 24px;
    }
    
    .booking-details h2 {
      margin-top: 0;
      margin-bottom: 16px;
      font-size: 18px;
      color: #1f2937;
      border-bottom: 1px solid #e5e7eb;
      padding-bottom: 8px;
    }
    
    .detail-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 0;
    }
    
    .detail-label {
      font-weight: 500;
      color: #6b7280;
    }
    
    .detail-value {
      font-weight: 00;
    }
    
    /* Financial details */
    .financial-details {
      background-color: #f0f9ff;
      border-radius: 8px;
      padding: 24px;
      margin-bottom: 24px;
    }
    
    .financial-details h2 {
      margin-top: 0;
      margin-bottom: 16px;
      font-size: 18px;
      color: #0369a1;
      border-bottom: 1px solid #bae6fd;
      padding-bottom: 8px;
    }
    
    .fee-row {
      display: flex;
      justify-content: space-between;
      padding: 8px 0;
      border-bottom: 1px dashed #e5e7eb;
    }
    
    .fee-row:last-child {
      border-bottom: none;
      padding-top: 16px;
      margin-top: 8px;
    }
    
    .fee-label {
      font-weight: 500;
    }
    
    .fee-value {
      font-weight: 600;
    }
    
    .refund-row {
      font-weight: 600;
      color: #059669;
      border-top: 1px solid #bae6fd;
      margin-top: 8px;
      padding-top: 16px;
    }
    
    /* CTA */
    .cta-btn {
      display: inline-block;
      background-color: #2563eb;
      color: #ffffff;
      text-decoration: none;
      padding: 12px 24px;
      border-radius: 6px;
      font-weight: 600;
      margin: 8px 0 24px;
    }
    
    /* Notes */
    .notes {
      background-color: #fffbeb;
      border-radius: 8px;
      padding: 16px;
      margin-bottom: 24px;
      font-size: 14px;
      color: #92400e;
      line-height: 1.5;
    }
    
    .notes p {
      margin: 0 0 8px;
    }
    
    .notes p:last-child {
      margin-bottom: 0;
    }
    
    /* Footer */
    .email-footer {
      background-color: #f1f5f9;
      padding: 24px;
      text-align: center;
      color: #64748b;
      font-size: 14px;
    }
    
    .contact-info {
      margin-bottom: 16px;
    }
    
    .contact-info a {
      color: #2563eb;
      text-decoration: none;
    }
    
    .social-links {
      margin-bottom: 16px;
    }
    
    .social-links a {
      color: #2563eb;
      text-decoration: none;
      margin: 0 8px;
    }
    
    .address {
      font-style: normal;
      margin-bottom: 16px;
    }
    
    .copyright {
      border-top: 1px solid #e2e8f0;
      padding-top: 16px;
      font-size: 12px;
    }
    
    /* Responsive styles */
    @media only screen and (max-width: 600px) {
      .email-container {
        width: 100%;
        border-radius: 0;
      }
      
      .email-content {
        padding: 24px 16px;
      }
      
      .detail-row,
      .fee-row {
        flex-direction: column;
      }
      
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="email-header">
      <div class="logo">TravelKro</div>
      <h1>Booking Cancellation Confirmation</h1>
      <p>Your booking has been successfully cancelled</p>
    </div>
    
    <div class="email-content">
      <p class="greeting">Dear ${hotelDetails.customerName},</p>
      
      <p class="message">We're confirming that your booking has been cancelled as requested. We're sorry you won't be joining us this time, but we hope to welcome you on a future journey.</p>
      
      <div class="booking-details">
        <h2>Cancelled Booking Details</h2>
                
        <!-- Hotel booking details -->
        <div class="detail-row">
          <span class="detail-label">Booking Type:</span>
          <span class="detail-value">Hotel</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Booking Reference:</span>
          <span class="detail-value">${hotelDetails.referenceId}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Hotel:</span>
          <span class="detail-value">${hotelDetails.hotelName}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Location:</span>
          <span class="detail-value">${hotelDetails.hotelLocation}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Check-in Date:</span>
          <span class="detail-value">${hotelDetails.checkInDate}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Check-out Date:</span>
          <span class="detail-value">${hotelDetails.checkOutDate}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Duration:</span>
          <span class="detail-value">${hotelDetails.days} days</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Rooms:</span>
          <span class="detail-value">${hotelDetails.numberOfRoom}</span>
        </div>
        
        <div class="detail-row">
          <span class="detail-label">Cancellation Date:</span>
          <span class="detail-value">${hotelDetails.cancellationDate}</span>
        </div>
      </div>
      
      <div class="financial-details">
        <h2>Refund Details</h2>
        <div class="fee-row">
          <span class="fee-label">Original Amount:</span>
          <span class="fee-value">₹${hotelDetails.totalPrice}</span>
        </div>
        <div class="fee-row">
          <span class="fee-label">Cancellation Fee (15%):</span>
          <span class="fee-value">₹${hotelDetails.cancellationFee}</span>
        </div>
        <div class="fee-row refund-row">
          <span class="fee-label">Refund Amount (85%):</span>
          <span class="fee-value">₹${hotelDetails.refundAmount}</span>
        </div>
      </div>
      
      <p class="message">Your refund of <strong>₹${hotelDetails.refundAmount}</strong> will be processed to your original payment method within 5-7 business days.</p>
      
      <div class="notes">
        <p><strong>Important Notes:</strong></p>
        <p>• The refund processing time may vary depending on your bank or payment provider.</p>
        <p>• If you don't receive your refund within 7 business days, please contact our customer support.</p>
        <p>• This email serves as an official confirmation of your cancellation request.</p>
      </div>
      
      <p class="message">Need further assistance? Our customer service team is available 24/7 to help.</p>
      
      <a href="https://travelkro.vercel.app/contact" class="cta-btn">Contact Support</a>
      
      <p class="message">Thank you for choosing TravelKro. We look forward to serving you again in the future.</p>
      
      <p class="message">Safe travels,<br><strong>The TravelKro Team</strong></p>
    </div>
    
    <div class="email-footer">
      <div class="contact-info">
        <p>Questions? Contact our support team at <a href="mailto:jagdtri2003@gmail.com">jagdtri2003@gmail.com</a> or call us at <a href="tel:+918001234567">+91 800 123 4567</a></p>
      </div>
      <div class="copyright">
        <p>© 2025 TravelKro. All rights reserved.</p>
      </div>
    </div>
  </div>
</body>
</html> 
`
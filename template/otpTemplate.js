module.exports = (OTP) => `
  <div style="font-family: 'Segoe UI', sans-serif; max-width: 500px; margin: auto; border: 1px solid #e0e0e0; border-radius: 12px; overflow: hidden;">
    <div style="background-color: #38b2ac; padding: 20px; color: white; text-align: center;">
      <h1 style="margin: 0; font-size: 28px;">HealthBlocks</h1>
      <p style="margin: 5px 0 0; font-size: 16px;">Your Health, Secured on the Blockchain</p>
    </div>
    <div style="padding: 30px; background-color: #f9f9f9;">
      <h2 style="margin-top: 0; color: #2d3748;">Your OTP Code</h2>
      <p style="font-size: 16px; color: #4a5568;">
        Use the following One-Time Password (OTP) to verify your identity. The code is valid for the next <strong>5 minutes</strong>.
      </p>
      <div style="margin: 30px auto; text-align: center;">
        <span style="font-size: 36px; font-weight: bold; letter-spacing: 8px; color: #2d3748;">${OTP}</span>
      </div>
      <p style="font-size: 14px; color: #718096;">
        If you did not request this code, you can safely ignore this email.
      </p>
    </div>
    <div style="background-color: #edf2f7; padding: 20px; text-align: center; font-size: 12px; color: #a0aec0;">
      &copy; 2025 HealthBlocks. All rights reserved.
    </div>
  </div>
`;

function authenticate(req, res, next) {
  const clientKey = req.headers['access-key']; 

  if (!clientKey) {
    return res.status(401).json({ message: 'API key missing' });
  }

  if (clientKey !== process.env.REACT_APP_SECRET_KEY) {
    return res.status(403).json({ message: 'Invalid API key' });
  }

  next(); 
}

module.exports = { authenticate };
const express = require('express');
const router = express.Router();

// register
router.get('/register', (req, res, next) => {
  res.send('REGISTER');
});

// authentication
router.get('/authenticate', (req, res, next) => {
  res.send('AUTHENTICATE');
});

// profile
router.get('/profile', (req, res, next) => {
  res.send('PROFILE');
});

// validation
router.get('/validate', (req, res, next) => {
  res.send('VALIDATE');
});

module.exports = router;

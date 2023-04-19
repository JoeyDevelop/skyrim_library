const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index');
});

router.post('/', (req, res) => {
  const { action } = req.body;
  if (action === '/damage') {
    res.redirect('/damage');
  } else if (action === '/weapon') {
    res.redirect('/weapon');
  } else if (action === '/handedness') {
    res.redirect('/handedness');
  } else {
    res.send('Invalid action');
  }
});

module.exports = router;

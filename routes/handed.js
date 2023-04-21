const express = require('express');

const router = express.Router();

//  GET damage page
router.get('/', (req, res) => {
  res.render('handed');
});

router.post('/', (req, res) => {
  const { action } = req.body;
  if (action === '/') {
    res.redirect('/');
  } else {
    res.send('Invalid action');
  }
});

module.exports = router;

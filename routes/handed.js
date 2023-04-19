const express = require('express');

const router = express.Router();

//  GET damage page
router.get('/handedness', (req, res) => {
  res.render('handed');
});

module.exports = router;

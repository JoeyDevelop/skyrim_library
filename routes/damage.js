const express = require('express');

const router = express.Router();

//  GET damage page
router.get('/damage', (req, res) => {
  res.render('damage');
});

module.exports = router;

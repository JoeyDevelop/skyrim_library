const express = require('express');

const router = express.Router();

//  GET damage page
router.get('/weapon', (req, res) => {
  res.render('weapon');
});

module.exports = router;

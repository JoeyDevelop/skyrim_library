const express = require('express');
const { getUsers } = require('../backend/controller');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index');
});

module.exports = router;

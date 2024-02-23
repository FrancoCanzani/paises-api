const express = require('express');
const router = express.Router();
const getCountriesData = require('../utils/getCountriesData');

const countriesData = getCountriesData();

router.get('/', (req, res) => {
  res.json(countriesData);
});

module.exports = router;

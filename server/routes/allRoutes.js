const express = require('express');
const router = express.Router();
const cacheMiddleware = require('../middleware/cacheMiddleware');
const getCountriesData = require('../utils/getCountriesData');

const countriesData = getCountriesData();

router.get('/', cacheMiddleware, (req, res) => {
  res.json(countriesData);
});

module.exports = router;

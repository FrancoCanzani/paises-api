const express = require('express');
const router = express.Router();
const cacheMiddleware = require('../middleware/cacheMiddleware');
const currencyController = require('../controllers/currencyController');

router.get(
  '/:moneda',
  cacheMiddleware,
  currencyController.getCountryByCurrency
);

module.exports = router;

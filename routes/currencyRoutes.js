const express = require('express');
const router = express.Router();
const currencyController = require('../controllers/currencyController');

router.get('/:moneda', currencyController.getCountryByCurrency);

module.exports = router;

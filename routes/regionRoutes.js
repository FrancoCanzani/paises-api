const express = require('express');
const router = express.Router();
const regionController = require('../controllers/regionController');

router.get('/:region', regionController.getCountryByRegion);

module.exports = router;

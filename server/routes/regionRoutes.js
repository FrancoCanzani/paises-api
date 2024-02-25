const express = require('express');
const router = express.Router();
const cacheMiddleware = require('../middleware/cacheMiddleware');
const regionController = require('../controllers/regionController');

router.get('/:region', cacheMiddleware, regionController.getCountryByRegion);

module.exports = router;

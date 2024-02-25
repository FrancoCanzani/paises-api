const express = require('express');
const router = express.Router();
const cacheMiddleware = require('../middleware/cacheMiddleware');
const capitalController = require('../controllers/capitalController');

router.get('/:capital', cacheMiddleware, capitalController.getCountryByCapital);

module.exports = router;

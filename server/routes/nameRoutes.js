const express = require('express');
const router = express.Router();
const cacheMiddleware = require('../middleware/cacheMiddleware');
const nameController = require('../controllers/nameController');

router.get('/:nombre', cacheMiddleware, nameController.getCountryByName);

module.exports = router;

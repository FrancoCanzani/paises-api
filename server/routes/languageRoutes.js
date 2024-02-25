const express = require('express');
const router = express.Router();
const cacheMiddleware = require('../middleware/cacheMiddleware');
const languageController = require('../controllers/languageController');

router.get(
  '/:idioma',
  cacheMiddleware,
  languageController.getCountryByLanguage
);

module.exports = router;

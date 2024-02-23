const express = require('express');
const router = express.Router();
const languageController = require('../controllers/languageController');

router.get('/:idioma', languageController.getCountryByLanguage);

module.exports = router;

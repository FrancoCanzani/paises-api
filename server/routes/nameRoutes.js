const express = require('express');
const router = express.Router();
const nameController = require('../controllers/nameController');

router.get('/:nombre', nameController.getCountryByName);

module.exports = router;

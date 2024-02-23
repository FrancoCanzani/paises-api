const express = require('express');
const router = express.Router();
const capitalController = require('../controllers/capitalController');

router.get('/:capital', capitalController.getCountryByCapital);

module.exports = router;

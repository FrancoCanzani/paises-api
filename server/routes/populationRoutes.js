const express = require('express');
const router = express.Router();
const populationController = require('../controllers/populationController');

router.get('/:poblacion', populationController.getCountryByPopulation);

module.exports = router;

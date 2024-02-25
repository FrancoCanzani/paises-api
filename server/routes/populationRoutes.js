const express = require('express');
const router = express.Router();
const cacheMiddleware = require('../middleware/cacheMiddleware');
const populationController = require('../controllers/populationController');

router.get(
  '/:poblacion',
  cacheMiddleware,
  populationController.getCountryByPopulation
);

module.exports = router;

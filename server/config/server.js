// imports
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const name = require('../routes/nameRoutes');
const currency = require('../routes/currencyRoutes');
const capital = require('../routes/capitalRoutes');
const allCountries = require('../routes/allRoutes');
const language = require('../routes/languageRoutes');
const population = require('../routes/populationRoutes');
const region = require('../routes/regionRoutes');
const path = require('path');
const { rateLimit } = require('express-rate-limit');

// app
const app = express();

// rate limiter
const millisecondsInDay = 24 * 60 * 60 * 1000; // Number of milliseconds in a day
const daysInMonth = 30; // Average number of days in a month

const limiter = rateLimit({
  windowMs: daysInMonth * millisecondsInDay, // Total milliseconds in a month
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  message: 'Solo se permiten 100 requests al mes.',
});

// middleware
app.use(limiter);
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(helmet());
app.use(cors());

app.use(express.static(path.join(__dirname, '../public')));

app.use('/v1/todos', allCountries);
app.use('/v1/nombre', name);
app.use('/v1/moneda', currency);
app.use('/v1/capital', capital);
app.use('/v1/idioma', language);
app.use('/v1/poblacion', population);
app.use('/v1/region', region);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

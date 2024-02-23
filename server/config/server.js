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

// app
const app = express();

// middleware
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
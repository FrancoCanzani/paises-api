// imports
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const name = require('../routes/nameRoutes');
const currency = require('../routes/currencyRoutes');
const allCountries = require('../routes/allRoutes');

// app
const app = express();

// middleware
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(helmet());
app.use(cors());

// routes
app.get('/', (req, res) => {
  res.json('Welcome page');
});
app.use('/v1/todos', allCountries);
app.use('/v1/nombre', name);
app.use('/v1/moneda', currency);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

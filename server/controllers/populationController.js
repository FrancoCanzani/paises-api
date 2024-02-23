const getCountriesData = require('../utils/getCountriesData');
const applyFilters = require('../utils/applyFilters');

// Pre-process the countries data to convert population values to numbers. Filtering will be faster now
const countriesData = getCountriesData().map((country) => ({
  ...country,
  poblacion: parseFloat(country.poblacion),
}));

const getCountryByPopulation = (req, res) => {
  const poblacion = parseFloat(req.params.poblacion);

  if (isNaN(poblacion)) {
    return res
      .status(400)
      .json({ error: 'El valor de poblacion debe ser un número' });
  }

  let filteredCountries = countriesData.filter(
    (pais) => pais.poblacion >= poblacion
  );

  if (req.query.filtros) {
    const filtros = req.query.filtros.split(',');
    filteredCountries = applyFilters(filteredCountries, filtros);
  }

  return res.status(200).json(filteredCountries);
};

module.exports = { getCountryByPopulation };

const getCountriesData = require('../utils/getCountriesData');
const applyFilters = require('../utils/applyFilters');

const countriesData = getCountriesData();

const getCountryByCurrency = (req, res) => {
  const moneda = req.params.moneda;

  if (!moneda) {
    return res.status(400).json({
      error: 'Proporcione el código de la moneda que desea filtrar',
    });
  }

  let filteredCountries = countriesData.filter((pais) => {
    return (
      pais.monedas && Object.keys(pais.monedas).includes(moneda.toUpperCase())
    );
  });

  if (filteredCountries.length === 0) {
    return res.status(404).json({
      error: 'No se encontraron países con la moneda especificada',
    });
  }

  if (req.query.filtros) {
    const filtros = req.query.filtros.split(',');
    filteredCountries = applyFilters(filteredCountries, filtros);
  }

  res.status(200).json(filteredCountries);
};

module.exports = { getCountryByCurrency };

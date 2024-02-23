const getCountriesData = require('../utils/getCountriesData');
const applyFilters = require('../utils/applyFilters');

const countriesData = getCountriesData();

const getCountryByRegion = (req, res) => {
  const region = req.params.region;

  if (!region) {
    return res
      .status(400)
      .json({ error: 'Proporcione la región del país que desea filtrar' });
  }

  let filteredCountries = countriesData.filter(
    (pais) => pais.region.toLowerCase() === region
  );

  if (req.query.filtros) {
    const filtros = req.query.filtros.split(',');
    filteredCountries = applyFilters(filteredCountries, filtros);
  }

  return res.status(200).json(filteredCountries);
};

module.exports = { getCountryByRegion };

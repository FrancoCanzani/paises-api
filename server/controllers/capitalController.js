const getCountriesData = require('../utils/getCountriesData');
const applyFilters = require('../utils/applyFilters');

const countriesData = getCountriesData();

const getCountryByCapital = (req, res) => {
  try {
    const capital = req.params.capital;

    if (!capital) {
      return res.status(400).json({
        error: 'Proporcione la capital del país que desea filtrar',
      });
    }

    let filteredCountries = countriesData.filter((pais) => {
      if (Array.isArray(pais.capital)) {
        return pais.capital.some(
          (cap) => cap && cap.toLowerCase().includes(capital.toLowerCase())
        );
      } else {
        return (
          pais.capital &&
          pais.capital.toLowerCase().includes(capital.toLowerCase())
        );
      }
    });

    if (filteredCountries.length === 0) {
      return res.status(404).json({
        error: 'No se encontraron países con la capital especificada',
      });
    }

    if (req.query.filtros) {
      const filtros = req.query.filtros.split(',');
      filteredCountries = applyFilters(filteredCountries, filtros);
    }

    res.status(200).json(filteredCountries);
  } catch (error) {
    res.status(500).json({ error: 'Error del servidor' });
  }
};

module.exports = { getCountryByCapital };

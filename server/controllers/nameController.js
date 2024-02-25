const getCountriesData = require('../utils/getCountriesData');
const applyFilters = require('../utils/applyFilters');

const countriesData = getCountriesData();

const getCountryByName = (req, res) => {
  let nombre = req.params.nombre;
  nombre = decodeURIComponent(nombre);

  if (!nombre) {
    return res
      .status(400)
      .json({ error: 'Proporcione el nombre del país que desea filtrar' });
  }

  let filteredCountries = countriesData.filter((pais) => {
    return (
      pais.nombre.comun.toLowerCase().includes(nombre.toLowerCase()) ||
      pais.nombre.oficial.toLowerCase() === nombre.toLowerCase() ||
      pais.nombre.oficial.toLowerCase().includes(nombre.toLowerCase())
    );
  });

  if (req.query.filtros) {
    const filtros = req.query.filtros.split(',');
    filteredCountries = applyFilters(filteredCountries, filtros);
  }

  res.status(200).json(filteredCountries);
};

module.exports = {
  getCountryByName,
};

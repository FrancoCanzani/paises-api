const getCountriesData = require('../utils/getCountriesData');

const countriesData = getCountriesData();

const getCountryByName = (req, res) => {
  try {
    let nombre = req.params.nombre;
    const filtros = req.query.filtros;
    console.log(filtros);
    nombre = decodeURIComponent(nombre);

    if (!nombre) {
      return res
        .status(400)
        .json({ error: 'Proporcione el nombre del país que desea filtrar' });
    }

    const filteredCountries = countriesData.filter((pais) => {
      return (
        pais.nombre.comun.toLowerCase().includes(nombre.toLowerCase()) ||
        pais.nombre.oficial.toLowerCase() === nombre.toLowerCase() ||
        pais.nombre.oficial.toLowerCase().includes(nombre.toLowerCase())
      );
    });

    res.json(filteredCountries);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error del servidor' });
  }
};

module.exports = {
  getCountryByName,
};

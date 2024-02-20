const getCountriesData = require('../utils/getCountriesData');
const applyFilters = require('../utils/applyFilters');

const countriesData = getCountriesData();

const getCountryByLanguage = (req, res) => {
  try {
    const idioma = req.params.idioma;

    if (!idioma) {
      return res
        .status(400)
        .json({ error: 'Proporcione el idioma del país que desea filtrar' });
    }

    let filteredCountries = countriesData.filter((pais) => {
      // check if all the countries have a language
      const idiomas = pais.idiomas;
      if (!idiomas) return false;

      // convert all the languages to lowercase for the filtering
      const idiomasLowerCase = Array.isArray(idiomas)
        ? idiomas.map((lang) => lang.toLowerCase())
        : Object.values(idiomas).map((lang) => lang.toLowerCase());

      if (Array.isArray(idiomasLowerCase)) {
        return idiomasLowerCase.some((idiomaArray) => {
          return idiomaArray.includes(idioma.toLowerCase());
        });
      } else if (typeof idiomasLowerCase === 'object') {
        return Object.values(idiomasLowerCase).includes(idioma.toLowerCase());
      } else {
        return false;
      }
    });

    if (req.query.filtros) {
      const filtros = req.query.filtros.split(',');
      filteredCountries = applyFilters(filteredCountries, filtros);
    }

    res.json(filteredCountries);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { getCountryByLanguage };

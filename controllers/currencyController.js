const getCountriesData = require('../utils/getCountriesData');

const countriesData = getCountriesData();

const getCountryByCurrency = (req, res) => {
  try {
    const moneda = req.params.moneda;

    if (!moneda) {
      return res.status(400).json({
        error: 'Proporcione el código de la moneda que desea filtrar',
      });
    }

    const countries = countriesData.filter((pais) => {
      return (
        pais.monedas && Object.keys(pais.monedas).includes(moneda.toUpperCase())
      );
    });

    res.status(200).json(countries);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error del servidor' });
  }
};

module.exports = { getCountryByCurrency };

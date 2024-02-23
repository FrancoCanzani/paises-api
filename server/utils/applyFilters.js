const applyFilters = (countries, filters) => {
  return countries.map((country) => {
    const filteredCountry = {};
    filters.forEach((filtro) => {
      if (country[filtro]) {
        filteredCountry[filtro] = country[filtro];
      }
    });
    return filteredCountry;
  });
};

module.exports = applyFilters;

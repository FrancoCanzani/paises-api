const path = require('path');
const fs = require('fs');

const filePath = path.join(__dirname, '../data/paises.json');
const jsonData = fs.readFileSync(filePath, 'utf-8');

function getCountriesData() {
  const countriesData = JSON.parse(jsonData);
  return countriesData;
}

module.exports = getCountriesData;

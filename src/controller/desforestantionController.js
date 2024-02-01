import { dsvFormat } from 'd3-dsv';
import { readFile } from 'fs/promises';

const csvParse = dsvFormat(';').parse;

async function convertCsvToData() {
  try {
    const data = await readFile('src/view/assets/terrabrasilis_legal_amazon_2024.csv', 'utf-8');
    const allData = csvParse(data);

    
    const dataByYear = allData.reduce((acc, data) => {
      const year = data.year;
      const area = Number(data.areakm.replace('.', '').replace(',', '.'));
      if (!acc[year]) {
        acc[year] = area;
      } else {
        acc[year] += area;
      }
      return acc;
    }, {});

  
    const dataFiltered = Object.keys(dataByYear).map(year => ({
      year: year,
      areakm: dataByYear[year]
    }));

    console.log('dados filtrados:', dataFiltered);
    return dataFiltered;
  } catch (er) {
    console.log('Não foi possivel ler a consulta', er);
  }
}

export { convertCsvToData }

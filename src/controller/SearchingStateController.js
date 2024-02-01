import { dsvFormat } from 'd3-dsv';
import { readFile } from 'fs/promises';

const csvParse = dsvFormat(';').parse;

async function convertCsvToDataByState(searchedState) {
    try {
        const data = await readFile('src/view/assets/terrabrasilis_legal_amazon_2024.csv', 'utf-8');
        const allData = csvParse(data);

        const dataFiltered = allData.filter(data => data.uf.toLowerCase() === searchedState.toLowerCase());
        console.log(dataFiltered)
       
        const dataByYear = dataFiltered.reduce((acc, data) => {
            const year = data.year;
            const area = Number(data.areakm.replace('.', '').replace(',', '.'));
            if (!acc[year]) {
                acc[year] = area;
            } else {
                acc[year] += area;
            }
            return acc;
        }, {});

        const dataFormated = Object.keys(dataByYear).map(year => ({
            year: year,
            uf: searchedState,
            areakm: dataByYear[year]
        }));

        console.log('dados formatados:', dataFormated );
        return dataFormated ;
    } catch (er) {
        console.log('Não foi possivel ler a consulta', er);
    }
}

export { convertCsvToDataByState }

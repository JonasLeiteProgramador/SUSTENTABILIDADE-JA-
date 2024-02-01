import express from 'express';
const desforestationRoute = express.Router()
import { convertCsvToData} from '../controller/desforestantionController.js'



desforestationRoute.get('/dados', async (req, res) => { 
    const dados = await convertCsvToData(); 
    res.json(dados);
  });

  
export { desforestationRoute }
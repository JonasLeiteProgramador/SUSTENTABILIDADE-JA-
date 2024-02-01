import express from 'express';
const highestDeforestationRoute = express.Router()
import { convertCsvToData } from '../controller/stateWithHighestDeforestationController.js'



highestDeforestationRoute.get('/maior-desmatamento-estado', async (req, res) => { 
    const data = await convertCsvToData(); 
    res.json(data);
  });

  
export { highestDeforestationRoute }
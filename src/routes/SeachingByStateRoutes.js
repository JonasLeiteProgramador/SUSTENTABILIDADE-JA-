import express from 'express';
const seachingByStateRoute  = express.Router();

import { convertCsvToDataByState } from '../controller/SearchingStateController.js'

// Bea ou Dan para acessar esta rota coloque /estados/nome do estado   que são os estados que abrangem o amazonas na url do localhost podendo ser eles : Pará,Mato Grosso,Rondônia,Amazonas,Maranhão,Acre,Rorairama,Tocantins,Amapá

seachingByStateRoute.get('/estados/:state', async (req, res) => { 
    const state = req.params.state;
    const data = await convertCsvToDataByState(state); 
    res.json(data);
});


export  { seachingByStateRoute }
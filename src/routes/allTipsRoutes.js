import express from 'express';

import {   getAllTheTips} from '../controller/tipsController.js';


const allTipsRoutes = express.Router()



allTipsRoutes.get('/dicas', (req, res) => {
    const tips =   getAllTheTips ()
     console.log(tips)
    res.json(tips)


})

export { allTipsRoutes }
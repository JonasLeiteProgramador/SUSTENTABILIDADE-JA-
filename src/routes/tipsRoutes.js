import express from 'express';

import { generateRandomTip} from '../controller/tipsController.js';


const tipsRoutes = express.Router()



tipsRoutes.get('/dicas-Ja', (req, res) => {
    const randomTips = generateRandomTip()
    res.json(randomTips)


})

export { tipsRoutes }
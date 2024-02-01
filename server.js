import express from 'express';
import cors from 'cors';
import { tipsRoutes } from './src/routes/tipsRoutes.js'
import { desforestationRoute } from './src/routes/desforestationRoute.js'
import { allTipsRoutes } from './src/routes/allTipsRoutes.js'
import { highestDeforestationRoute } from './src/routes/HighestDeforestationRoute.js';
import { seachingByStateRoute } from './src/routes/SeachingByStateRoutes.js'
const app = express()
const port = 4040

app.use(cors())
app.use(express.json())
app.use(tipsRoutes)
app.use(allTipsRoutes)
app.use(desforestationRoute)
app.use(highestDeforestationRoute)
app.use(seachingByStateRoute)


app.listen(port, () => {
    console.log(`Servidor on!,na porta ${port}`)
})
import express from 'express'
import cors from 'cors'
import displayRoutes from 'express-routemap'
import mongoDBConnection from './databases/mongoconnection'
import router from './router'
const app = express()

const PORT = process.env.PORT
const BASE_URL = process.env.BASE_URL
const NODE_ENV = process.env.NODE_ENV
const PERSISTENCE = process.env.PERSISTENCE

app.use(express.json())
app.use(cors())

app.listen(PORT, () => {
  mongoDBConnection()
    .then(() => {
      console.log(`=Encendido servidor en puerto ${PORT}= \n====== ${BASE_URL} ${PORT}/ =====`)
      console.log(`==========ENV:${NODE_ENV}===========`)
      console.log(`=======PERSISTENCE:${PERSISTENCE}=============`)
      console.log(`=======PROCESS:${process.pid}=============`)
      displayRoutes(app)
    })
    .catch((error) => {
      console.error('Error al conectar a la base de datos:', error)
    })
})

app.use(router)

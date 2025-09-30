import express from 'express'
import dotenv from 'dotenv'
import routes from './routes/auth.routes.js'
import { ConnectDB } from './db.config.js'
import cookieParser from 'cookie-parser'
import messageRoute from './routes/message.routes.js'
import cors from 'cors'
import { app, server } from './Socketio/server.js'


dotenv.config()

const port = process.env.PORT || 4500
app.use(cors({
  origin:'http://localhost:5173',
  credentials:true
}))
app.use(express.json())
app.use(cookieParser()) 
app.use(express.urlencoded({extended:false}))
app.use('/api/v1',routes) 
app.use('/api/v1',messageRoute)



ConnectDB()

server.listen(port, () => {
  console.log(`server is listening on port ${port}`)
})

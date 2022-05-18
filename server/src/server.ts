import express from 'express'
import cors from 'cors'
import { route } from './router'

const app = express()

app.use(cors())
app.use(express.json())
app.use(route)


app.listen(3333, () => console.log('Server is running'))
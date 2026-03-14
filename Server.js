import express from 'express'
import OpenAI from './Routes/AIAnswers.js'
import 'dotenv/config'

console.log(process.env.API_KEY)

const app = express()

app.use(express.json())

app.use('/ai',OpenAI)

app.listen(3000, () => {
        console.log("Server running")
})


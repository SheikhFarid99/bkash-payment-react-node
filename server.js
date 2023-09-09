const express = require('express')
const mongoose = require('mongoose')
const body_parser = require('body-parser')
const dotEnv = require('dotenv')
const cors = require('cors')

const app = express()


app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))
dotEnv.config()
app.use(body_parser.json())

app.use('/api', require('./routes/routes'))

const db = async()=>{
    try {
        await mongoose.connect(process.env.db_url)
        console.log('db connect')
    } catch (error) {
        
    }
}
db()
const port = process.env.PORT

app.get('/', (req, res) => res.send('server is running'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
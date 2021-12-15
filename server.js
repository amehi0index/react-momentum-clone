
const express = require('express')
const cors = require('cors')
const rateLimit = require('express-rate-limit')
const path = require('path');
require('dotenv').config()

const PORT = process.env.PORT || 5000

const app = express()

//Rate Limiting
const limiter = rateLimit({
    windowMS: 10 * 60 * 1000,   //10min
    max: 10
})

app.use(limiter)
app.set('trust proxy', 1)

//Set static folder
app.use(express.static('client'))

//Routes
app.use('/api/background', require('./routes/background'))
app.use('/api/temperature', require('./routes/temperature'))
app.use('/api/quotes', require('./routes/quotes'))

app.get('/api', (req, res) => {
    res.json({success: true})
})

//Enable cors
app.use(cors())

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))
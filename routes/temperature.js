const express = require('express')
const router = express.Router()
const rateLimit = require('express-rate-limit')
const needle = require('needle')
const apicache = require('apicache')
const url = require('url')

const limiter = rateLimit({
    windowMS: 10 * 60 * 1000,   //10min
    max: 2
})

//Initialize cache
let cache = apicache.middleware

router.get('/', limiter, async (req, res) => { // cache('2 minutes')
 
    try {

        const params = new URLSearchParams({
            ...url.parse(req.url, true).query,
            appid: process.env.API_WEATHER_KEY
        })

        const apiRes = await needle('get', `https://api.openweathermap.org/data/2.5/onecall?${params}`)

        const data = apiRes.body

        //Log the request to the public API
        /*if(process.env.NODE_ENV !== 'production'){
            console.log(`REQUEST: ${API_BASE_URL}?${params}`)
        }*/
      
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({error})
    }
})

module.exports = router
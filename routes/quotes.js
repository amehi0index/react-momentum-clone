const express = require('express')
const router = express.Router()
const needle = require('needle')
const apicache = require('apicache')
const url = require('url')

//Initialize cache
let cache = apicache.middleware

router.get('/', cache('2 minutes'), async (req, res) => {

    try {

        // const params = new URLSearchParams({
        //     ...url.parse(req.url, true).query
        // })

        const apiKey = process.env.API_QUOTE_KEY
        const url = process.env.API_QUOTES_URL

        console.log('url', url)

        const apiRes = await needle('get', url)

        // const apiRes = await needle('get', `https://api.quotable.io//random`, {
        //     headers: {
        //         'X-TheySaidSo-Api-Secret': apiKey
        //     }
        // })

        const data = apiRes.body

        console.log(data)

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
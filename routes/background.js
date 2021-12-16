const express = require('express')
const router = express.Router()
const needle = require('needle')
const apicache = require('apicache')
const url = require('url')

//Initialize cache
let cache = apicache.middleware

router.get('/', cache('2 minutes'), async (req, res) => {
   
    try {
        const params = new URLSearchParams({
            client_id : process.env.API_UNSPLASH_KEY,
            ...url.parse(req.url, true).query
        })

        const apiRes = await needle('get', `${process.env.API_UNSPLASH_URL}?${params}`)  

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
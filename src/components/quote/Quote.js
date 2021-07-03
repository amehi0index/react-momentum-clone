import React, { useState, useEffect } from 'react'
import '../../css/quote.css'

const Quote = () => {
    
    const quoteUrl = "https://quotes.rest/qod?category=inspire"
    const [author, setAuthor] = useState("")
    const [quote, setQuote] = useState("")

    useEffect(() => {
        async function dailyQuote(){
            let response = await fetch(quoteUrl)
            let data = await response.json()
           
            setQuote(data.contents.quotes[0].quote)
            setAuthor(data.contents.quotes[0].author)
        }
        dailyQuote()
    },[])

    return (
        <div className="quote-container">
            <div id="quote">{quote}</div>
            <div id="author">{author}</div>
        </div> 
    )
}

export default Quote

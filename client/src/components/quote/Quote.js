import React, { useState, useEffect } from 'react'
import '../../css/quote.css'

const Quote = () => {
    
    // const quoteUrl = "https://quotes.rest/qod?category=inspire"
    const quoteUrl = `/api/quotes?category=inspire`
    const [author, setAuthor] = useState("")
    const [quote, setQuote] = useState("")
    const [link, setLink] = useState("")

    useEffect(() => {
        async function dailyQuote(){
            let response = await fetch(quoteUrl)
            let data = await response.json()

            console.log(data)
           
            // setQuote(data.contents.quotes[0].quote)
            // setAuthor(data.contents.quotes[0].author)
            // setLink(data.contents.quotes[0].permalink)

        }
        dailyQuote()
    },[])

    return (
        <div className="quote-container">
            <a href={link} target="_blank" rel="noopener noreferrer" id="quote">
                <div >{quote}</div>
            </a>
            <div id="author">{author}</div>
        </div> 
        
    )
}

export default Quote

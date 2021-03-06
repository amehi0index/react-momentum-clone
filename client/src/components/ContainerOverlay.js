import React, { useState } from 'react'
import useUnsplashAPI from '../hooks/useUnsplashAPI'
import Greeting from '../components/greeting/Greeting'
import SearchForm from '../components/search/SearchForm'
import Forecast from '../components/forecast/Forecast'
import Weather from '../components/weather/Weather'
import Todos from '../components/todo/Todos'
import TodoToggle from '../components/todo/TodoToggle'
import ImageLocation from '../components/location/ImageLocation'
import Quote from '../components/quote/Quote'
import tinycolor from 'tinycolor2'
import '../index.css'

const ContainerOverlay = ({ showTodoCard, setShowTodoCard }) => {

    const [ imageData ] = useUnsplashAPI()
    const [ showForecast, setShowForecast ] = useState(false)

    let clr = tinycolor(imageData.color)
    let isColorLight =  clr.isLight() 

    return (
        <div className= {isColorLight ? 'container bg-darken' : 'container'}>
            <div className="top-grid">
                <div className="one">
                    <SearchForm />
                </div>
                <div className="two">
                    <Greeting />
                </div>
                <div className="three">
                    <Weather showForecast={showForecast} setShowForecast={setShowForecast}/>
                    <Forecast showForecast={showForecast}/>
                    <Todos showTodoCard={showTodoCard} />
                </div>
            </div>
            <div className= "four">
                <ImageLocation />
                <Quote />
                <TodoToggle showTodoCard={showTodoCard}  setShowTodoCard={setShowTodoCard} />
            </div>                  
        </div>
    )
}

export default ContainerOverlay

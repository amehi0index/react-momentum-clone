import React, { useState, useEffect } from 'react'
import getTimezone from '../util/GetTimezone'
import { Sema } from 'async-sema'

const useOpenWeatherAPI = () => {

    const FORECAST_API = process.env.REACT_APP_OPENWEATHER_API_KEY

    const s = new Sema(
        2, // Allow 2 concurrent async calls
        {
          capacity:10
        }
      );
  
    const [currentWeather, setCurrentWeather] = useState({
        temp: 0,
        cityName: "",
        dayOfWeek: "",
        description: "",
        id: "",
        dt: 0
    })
  
    const [city, setCity] = useState({
        city: "",
        timezone: ""
    })
  
    const [forecastData, setForecastData] = useState([])
  
    useEffect(() => {
        let long, lat
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition
            (position => {
                long = position.coords.longitude
                lat = position.coords.latitude

                let weatherUrl =  `/api/temperature?lat=${lat}&lon=${long}&units=imperial`
  
                /*const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&appid=${FORECAST_API}`*/

                let forecastUrl =  `/api/predictions?lat=${lat}&lon=${long}&units=imperial`

                /*const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&units=imperial&appid=${FORECAST_API}`*/
         
                async function getWeather(){
                    await s.acquire()

                    try{

                    let response = await fetch(weatherUrl)
              
                    let data = await response.json()
                    console.log(data)
  
                    const { dt } = await data
                    let date = new Date(dt * 1000);
                    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  
                    setCurrentWeather({
                        temp: await data.main.temp,
                        dayOfWeek: days[date.getDay()],
                        cityName: await data.name,
                        description: await data.weather[0].description,
                        id: await data.weather[0].id,
                        dt: await data.dt
                    })

                    }finally {
                        s.release();
                    }
                }
       
                //getWeather()

                async function getForecast(){
                    let response = await fetch(forecastUrl)
                    let data = await response.json()
                  
                    setCity({
                        name: await data.city.name,
                        timezone: await data.city.timezone,
                    })
  
                    setForecastData(await data.list.filter((fc) => getTimezone(city.timezone, fc.dt_txt)))
                }
          
                //getForecast()
            })
         }
    }, [currentWeather, forecastData, city, FORECAST_API])
      
    return [currentWeather, forecastData, city]
}
  
export default useOpenWeatherAPI
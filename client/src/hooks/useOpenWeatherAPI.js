import { useState, useEffect } from 'react'

const useOpenWeatherAPI = () => {

    const [currentWeather, setCurrentWeather] = useState({
        temp: 0,
        cityName: "",
        dayOfWeek: "",
        description: "",
        id: "",
        dt: 0
    })
  
    const [forecastData, setForecastData] = useState([])
  
    useEffect(() => {
        let long, lat
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition
            (position => {
                long = position.coords.longitude
                lat = position.coords.latitude

                let weatherUrl =  `/api/temperature?lat=${lat}&lon=${long}&units=imperial&`

                async function getWeather(){
                    
                    let response = await fetch(weatherUrl)
              
                    const data = await response.json()
              
                    const { current } = await data
            
                    let date = new Date(current.dt * 1000);
                    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  
                    let cityName = await formatCityName(data.timezone)

                    function formatCityName(city){
                        let c =  city.substring(data.timezone.indexOf('/')+1)
                        if(c.includes("_")){
                            c = c.replace("_", " ") 
                            return c
                        }
                        return c
                    }
                   
                    setCurrentWeather({
                        temp: await current.temp,
                        dayOfWeek: days[date.getDay()],
                        cityName: cityName,
                        description: await current.weather[0].description,
                        id: await current.weather[0].id,
                        dt: await current.dt
                    })

                    const { daily } = await data
                    const dailyForecast = [...daily]
                    dailyForecast.splice(5, 3)
                    setForecastData(dailyForecast)
                    
                }
       
               //getWeather()
            })
         }
    }, [currentWeather, forecastData])
      
    return [currentWeather, forecastData]

}
  
export default useOpenWeatherAPI
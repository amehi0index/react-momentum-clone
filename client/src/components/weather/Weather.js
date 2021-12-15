
import useOpenWeatherAPI from '../../hooks/useOpenWeatherAPI'
import '../../css/weather.css'
import '../../css/weather-icons.css'

const Weather = ({ showForecast, setShowForecast }) => {

    const [currentWeather] = useOpenWeatherAPI()

    /*const [temperature, setTemperature] = useState(currentWeather.temp)
    const [isCelcius, setIsCelcius] = useState(false)

        let celcius = (temperature - 32) / 1.8 
        if(isCelcius)setTemperature(celcius)
        <h2 className="temperature-degree" onClick={()=>setIsCelcius(!isCelcius)}>{Math.round(temperature)}&#176;</h2>
        
        */
    

    return (
        <div className="temperature-container">
            <div className="temperature">
                <div className="temperature-section">
                    <i className={`wi wi-owm-${currentWeather.id}`}></i>
                    <h2 className="temperature-degree">{Math.round(currentWeather.temp)}</h2>
                    <span></span>
                </div>
                <h1 className="temperature-city" onClick={()=>setShowForecast(!showForecast)}>{currentWeather.cityName}</h1>
            </div>
        </div>
    )
}

export default Weather
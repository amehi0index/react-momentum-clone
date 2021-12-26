
import useOpenWeatherAPI from '../../hooks/useOpenWeatherAPI'
import '../../css/weather.css'
import '../../css/weather-icons.css'

const Weather = ({ showForecast, setShowForecast }) => {

    const [currentWeather] = useOpenWeatherAPI()

    return (
        <div className="temperature-container">
            <div className="temperature">
                <div className="temperature-section">
                    <i className={`wi wi-owm-${currentWeather.id}`}></i>
                    <h2 className="temperature-degree">{Math.round(currentWeather.temp)}<span className="symbol">&#176;</span></h2>
                    <span></span>
                </div>
                <h1 className="temperature-city" onClick={()=>setShowForecast(!showForecast)}>{currentWeather.cityName}</h1>
            </div>
        </div>
    )
}

export default Weather
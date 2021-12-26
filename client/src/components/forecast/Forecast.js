
import useOpenWeatherAPI from '../../hooks/useOpenWeatherAPI'
import ForecastItem from './ForecastItem'
import '../../css/forecast.css'
import '../../css/weather-icons.css'

const Forecast = ({ showForecast }) => {

    const [currentWeather, forecastData] = useOpenWeatherAPI()

    return (
        <div className={!showForecast ? 'forecast-card-container' : 'forecast-card-container show'  }>
            <div className="forecast-current">
                <div className="forecast-current-info">
                    <div className="forecast-current-title">
                        <h1 className="forecast-current-city">{currentWeather.cityName}</h1>
                        <p className="forecast-current-day">{currentWeather.dayOfWeek}</p>
                    </div>
                    <div className="forecast-current-temp">
                        <i id="forecast-current-icon" className={`wi wi-owm-${currentWeather.id}`}></i>
                        <div className="forecast-current-toggle">
                            <h2 className="forecast-current-degree">{Math.round(currentWeather.temp)}&#176;</h2>
                            <span className="forecast-current-span"></span>
                        </div>
                    </div>
                    <p className="forecast-current-description">{currentWeather.description}</p>
                </div>
            </div>
            <div className="forecast-five">
               {forecastData.map(fc => (
                   <ForecastItem key={fc.dt} forecast={fc} day={fc.dt} /> 
                ))}
            </div>
            <div className="forecast-links">
                <a href="https://openweathermap.org/" target="_blank" rel="noopener noreferrer">
                    More Weather <i className="fas fa-arrow-circle-right"></i>
                </a>
            </div>
        </div>
    )
}

export default Forecast

import React from 'react'
import '../../css/weather-icons.css'

const ForecastItem = ({ forecast, day }) => {

    let date = new Date(day * 1000)
    let days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat']
    let dayName = days[date.getDay()]

    return (
        <div className="forecast-item">
            <span className="forecast-day">{dayName}</span>
            <i className={`wi wi-owm-${forecast.weather[0].id}`}></i>
            <div className="forecast-hilo">
                <span className="forecast-hi">
                    <span className="forecast-hi-degree">{Math.round(forecast.main.temp_max)}&#176;</span>
                    <span className="forecast-hi-symbol"></span>
                </span>
                <span className="forecast-lo">
                    <span className="forecast-lo-degree">{Math.round(forecast.main.temp_min)}&#176;</span>
                    <span className="forecast-lo-symbol"></span>
                </span>
            </div>
        </div>
    )
}

export default ForecastItem

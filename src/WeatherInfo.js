import React from 'react';

const WeatherInfo = (props) => {
    const weather = props.weatherData

    return (
        
        <div>
            <h2>{weather.name}</h2>
            <h1>{weather.main.temp}</h1>
            <h3>{weather.weather.description}</h3>
            <h4>{weather.main.temp_min}</h4>
            <h4>{weather.main.temp_max}</h4> 
        </div> 
    )
}

export default WeatherInfo


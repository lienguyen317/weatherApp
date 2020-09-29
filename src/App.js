import React, {useState} from 'react';
import './App.css';
import Form from './Form';
import WeatherInfo from './WeatherInfo';

function App() {

  const [weatherData, setWeatherData] = useState({})

  const handleSubmit = zip =>{
    console.log('search weather using zip')
    // not able to use the url to render an obj in the dev tool 
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${zip}&units=imperial&appid=77c638c4087dc16d2d6ba94671248266`)
    .then((response)=>response.json())
    .then((data)=>{
      console.log(data)
      setWeatherData(data)
    })
  }

  return (
    <div className="App">
      <Form handleSubmit={handleSubmit}/>
      <WeatherInfo weatherData={weatherData}/>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });
  let [city, setCity] = useState(props.defaultCity);

  function showWeather(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  function submitForm(event) {
    event.preventDefault();
    search();
  }

  function searchForCity(event) { 
    setCity(event.target.value);
  }

  function search() {
    // let apiKey = "502dc8f7ae36e57af1974e18d16a86f8";
    let apiKey = `2f4a61b0876133218968273ba29696cf`;
    let units = `metric`;

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(showWeather);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={submitForm}>
          <input
            type="search"
            placeholder="Enter a city..."
            autoComplete="off"
            autoFocus="on"
            className="search-bar"
            onChange={searchForCity}
          />
          <input type="submit" value="Search" className="search-button" />
        </form>
        <WeatherInfo data={weatherData} coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}

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
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      iconUrl:
        "http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/sun-behind-small-cloud.png",
      temperature: response.data.main.temp,

      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  function submitForm(event) {
    event.preventDefault();
    console.log(props.defaultCity);
    search();
  }

  function searchForCity(event) {
    setCity(event.target.value);
  }

  function search() {
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
          <input type="submit" value="Search" classNamem="search-button" />
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}

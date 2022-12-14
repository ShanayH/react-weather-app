import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });

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

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <input
            type="search"
            placeholder="Enter a city..."
            autoComplete="off"
            autoFocus="on"
            className="search-bar"
          />
          <input type="submit" value="Search" classNamem="search-button" />
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    let apiKey = `2f4a61b0876133218968273ba29696cf`;
    let units = `metric`;

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(showWeather);
    return "Loading...";
  }
}

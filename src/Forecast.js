import React, { useState, useEffect } from "react";
import "./Forecast.css";
// import ForecastDate from "./ForecastDate";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coords]);

  function handleResponse(response) {
    setForecast(response);
    setLoaded(true);
  }

  if (loaded) {
    console.log(props.coords);
    console.log(forecast.data.list[0].main.temp_max);

    return (
      <div className="forecast">
        <div className="row">
          <div className="col">
            <ForecastDay info={forecast} />
          </div>
          <div className="col">
            <ForecastDay info={forecast} />
          </div>
          <div className="col">
            <ForecastDay info={forecast} />
          </div>
          <div className="col">
            <ForecastDay info={forecast} />
          </div>
          <div className="col">
            <ForecastDay info={forecast} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "2f4a61b0876133218968273ba29696cf";
    let lat = props.coords.lat;
    let lon = props.coords.lon;
    let units = `metric`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}

// when you open the page it runs the entire code 6x - the number of letters in Dublin
// when you type in the city name into the search, it runs the code 1x per letter *returns the results of the default city*
// then when you hit search, it runs the code again *returns the result of the searched city*.
// it also runs it 1x per letter of the new city you have typed.

// https://api.openweathermap.org/data/2.5/forecast?lat=54.5&lon=5.9&appid=2f4a61b0876133218968273ba29696cf&units=metric

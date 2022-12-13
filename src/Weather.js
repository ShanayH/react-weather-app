import React from "react";
import "./Weather.css";

export default function Weather() {
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
      <div className="row">
        <div className="col-6">
          <h1 className="city-result"> Dublin, Ireland </h1>
        </div>
        <div className="col-6 date-time">
          <ul>
            <li>Wednesday 07:00</li>
            <li>Mostly Cloudy</li>
          </ul>
        </div>
      </div>

      <div className="row">
        <div className="col-6">
          <ul>
            <li>
              <img
                src="http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/sun-behind-small-cloud.png"
                alt="mostly cloudy"
                width="70"
              />
              <span className="temp-result">6 </span>

              <span className="units">
                <a href="#" className="active">
                  °C {""}
                </a>
                <a href="#">°F</a>
              </span>
            </li>
          </ul>
        </div>
        <div class="col-6 weather-info">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity 30%</li>
            <li>Wind: 13 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

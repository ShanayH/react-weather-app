import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="forecast">
      <div className="row">
        <div className="col-2">
          <div className="forecast-day">Thu</div>
          <div>icon</div>
          <div className="forecast-temps">
            <span className="forecast-temp-min">5°</span>
            <span className="forecast-temp-max">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}

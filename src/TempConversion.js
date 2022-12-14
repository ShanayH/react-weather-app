import React, { useState } from "react";

export default function TempConversion(props) {
  let [unit, setUnit] = useState("celsius");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <span>
        <span className="temp-result">{Math.round(props.celsius)}</span>

        <span className="units">
          °C |{" "}
          <a href="/" onClick={convertToFahrenheit}>
            {" "}
            °F
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span>
        <span className="temp-result">{Math.round(fahrenheit())}</span>

        <span className="units">
          <a href="/" onClick={convertToCelsius}>
            °C
          </a>
          | °F
        </span>
      </span>
    );
  }
}

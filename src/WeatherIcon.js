import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';

export default function WeatherIcon(props) {
  // console.log(props.icon);
  const codeMapping = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "PARTLY_CLOUDY_DAY",
    "03n": "PARTLY_CLOUDY_NIGHT",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "09d": "RAIN",
    "09n": "RAIN",
    "10d": "RAIN",
    "10n": "RAIN", 
    "11d": "RAIN", 
    "11n": "RAIN", 
    "13d": "SNOW", 
    "13n": "SNOW", 
    "50d": "FOG", 
    "50n": "FOG"
  };
  return (
    <ReactAnimatedWeather
      icon={codeMapping[props.icon]}
      color={'#000000'}
      size={30}
      animate={true}
    />
  );
}

//question is: is there a way to pull the information from a url and stick the ${} into it like I did on the iconUrl on the weather.js page? It worked there, and it seems like it should work here too instead of doing all of this, but I couldn't get it to. 

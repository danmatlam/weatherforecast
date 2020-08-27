import React from 'react'
import { WiCloudy, WiRain } from "react-icons/wi";

const WeatherIcon = ({ icon }) => {

  const weatherIcon = {
    Thunderstorm: "wi-thunderstorm",
    Drizzle: "wi-sleet",
    Rain: "wi-storm-showers",
    Snow: "wi-snow",
    Atmosphere: "wi-fog",
    Clear: "wi-day-sunny",
    Clouds: "wi-day-fog"
  };

  return (

      <i className={`wi ${weatherIcon[icon]}`} style={{ fontSize: 30 }}></i>

  )
}

export default WeatherIcon

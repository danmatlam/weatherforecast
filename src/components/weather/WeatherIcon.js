import React from 'react'

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

    <div style={{
      width:'4.5em', 
      height:'4.5em', 
      borderRadius:'50%',
      margin:'.6em'
      }}>

      <i className={`wi ${weatherIcon[icon]}`} style={{ fontSize: '3em' }}></i>

    </div>



  )
}

export default WeatherIcon

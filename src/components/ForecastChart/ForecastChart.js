import React from 'react'
import Chart from './Chart';
import { useDispatch, useSelector } from "react-redux";

const ForecastChart = ({ day }) => {

  const data = []

  const entries = day.forecast.map(item =>
    ({
      x: item.hour,
      y: Math.floor(item.main.temp),
    }))
  data.push({
    id: day.date,
    data: entries
  })


  return (
  
      <div style={{ height: '40vh' }}>
        <Chart data={data} />

      </div>
  

  )
}

export default ForecastChart

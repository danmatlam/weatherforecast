import React from 'react'
import Chart from './Chart';
import { useDispatch, useSelector } from "react-redux";

const Forecast5DayChart = ({ days }) => {
  debugger

  const data = []

  const entries = days.map(item =>
    ({
      x: item.date,
      y: item.temp_max,
    }));


  data.push({
    id: '',
    data: entries
  })




  return (
    <>
      <div style={{ height: '40vh' }}>
        <Chart data={data} />

      </div>
    </>

  )
}

export default Forecast5DayChart

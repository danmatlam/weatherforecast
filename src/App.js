import React from 'react'
import ReduxWrap from './data/ReduxWrap'
import WeatherList from './components/weather/WeatherList'

const App = () => {
  return (
   <ReduxWrap>
  <WeatherList/>
   </ReduxWrap>
  )
}

export default App

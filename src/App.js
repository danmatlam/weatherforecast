import React from 'react'
import ReduxWrap from './data/ReduxWrap'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

import WeatherList from './components/weather/WeatherList'
import WeatherProfile from './components/weather/WeatherProfile';

const App = () => {
  return (
    <ReduxWrap>
      <Router>

        <div style={{padding:'3em', backgroundColor:'#fcfcfc'}}>
        <WeatherList />

        </div>
        <Switch>
          <Route path="/:id" children={<Child />} />
        </Switch>
      </Router>
    </ReduxWrap>
  )
};

const Child = () => {

  let { id } = useParams();

  return  <div style={{padding:'3em', backgroundColor:'#fcfcfc'}}>

  <WeatherProfile day={id}/>
</div>

}



export default App

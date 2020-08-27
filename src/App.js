import React from 'react';
import ReduxWrap from './redux/ReduxWrap';

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
        <Switch>
          <Route exact path="/">
            <WeatherList />
          </Route>
          <Route path="/:id" children={<Child />} />
        </Switch>
      </Router>


    </ReduxWrap>
  )
};

const Child = () => {

  let { id } = useParams();

  return <div style={{ padding: '3em', backgroundColor: '#fcfcfc' }}>

    <WeatherProfile day={id} />
  </div>

}



export default App

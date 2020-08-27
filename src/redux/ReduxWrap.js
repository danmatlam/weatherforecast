import React from 'react';

///IMPORT  LIBRERIA REDUX Y REDUX SAGA
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { Provider as ReduxProvider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { takeLatest } from "redux-saga/effects";




import {
    GET_WEATHER_FORECAST
} from './constants';


import weatheForecast from './reducers/weatheForecast';
import getWeatherForecastSaga from './actions/weatherForercast';


const reducers = combineReducers({
    weatheForecast
})

function* watcherSaga() {
    yield takeLatest(GET_WEATHER_FORECAST, getWeatherForecastSaga);
}







// CREAR MIDDLEWARE
const sagaMiddleWare = createSagaMiddleware();

// INICAR STORE
// const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
// const store = createStore(reducers, compose(applyMiddleware(sagaMiddleWare), reduxDevTools));

const store = createStore(reducers, compose(applyMiddleware(sagaMiddleWare)));
// LANZAR MIDDLEWARE
sagaMiddleWare.run(watcherSaga);


// CREAR UN WRAP
const ReduxWrap = (props) => {
    return (
        <ReduxProvider store={store}>
            {props.children}
        </ReduxProvider>
    )
}

export default ReduxWrap

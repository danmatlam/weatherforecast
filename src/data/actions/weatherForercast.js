import { call, put } from 'redux-saga/effects'
import axios from 'axios';

import {
    GET_WEATHER_FORECAST_SUCCESS,
    GET_WEATHER_FORECAST_ERROR
} from '../constants';


const OWP_KEY = "67621edb94d7a57a0f4bbdc93df84cc4";

const GYE = "3657509";
const CITY_ID = GYE;



const getWeatherForecast = payload => {
    return axios.get(`https://api.openweathermap.org/data/2.5/forecast?id=${CITY_ID}&appid=${OWP_KEY}&units=metric`);
}


export default function* getWeatherForecastSaga(action) {
    try {
        const res = yield call(getWeatherForecast, action.payload);
        if(res.data.cod==="200"){
            yield put({ type: GET_WEATHER_FORECAST_SUCCESS, payload: res.data });
        }else{
            yield put({type: GET_WEATHER_FORECAST_ERROR, error: 'Ciudad no encontrada'});
        }
       
        
    }

    catch (error) {
        yield put({
            type: GET_WEATHER_FORECAST_ERROR,
            error:"Error"
        })
    }
}
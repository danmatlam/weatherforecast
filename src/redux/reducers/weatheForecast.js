import { GET_WEATHER_FORECAST, GET_WEATHER_FORECAST_ERROR, GET_WEATHER_FORECAST_SUCCESS } from '../constants';
import _ from 'lodash';
import moment from 'moment';
import 'moment/locale/es.js'  // without this line it didn't work



import { weatheForecast } from './mock.json';

moment.locale('es');

const { city, list, groupbyDate, groupbyWeather } = weatheForecast;
const init = {

    error: false,
    loading: false,
    city:city,
    weatherList: list,
    groupbyDate: groupbyDate,
    groupbyWeather: groupbyWeather
}


export default (state = init, action) => {
    switch (action.type) {
        case GET_WEATHER_FORECAST: return {
            ...state,
            loading: true,
            error: false
        };
        case GET_WEATHER_FORECAST_ERROR: return {
            ...state,
            loading: false,
            error: true
        };
        case GET_WEATHER_FORECAST_SUCCESS:

            const {payload} = action;
            const format = new forecastFormat();

            return {
                ...state,
                city: payload.city,
                weatherList: payload.list,
                groupbyDate: format.groupbyDate(action.payload.list),
                groupbyWeather: format.groupbyWeather(action.payload.list),
                loading: false
            };

        default: return state;

    }



}



class forecastFormat {

    withDates(forecast) {
        return forecast ? forecast.map(item => ({
            ...item,
            date: moment(item.dt_txt).format("YYYY/MM/DD"),
            day: moment(item.dt_txt).format("dddd"),
            hour: moment(item.dt_txt).format("HH:mm"),
        })) : null;
    }
    dailyWeather(group) {
        const weather = group.map((item, i) => {
            return item.weather[0]
        });
        const groupbyNature = _.groupBy(this.withDates(weather), 'main');
        let media = [];
        for (const key in groupbyNature) {
            if (groupbyNature[key].length > media.length) {
                media = groupbyNature[key];
            }
        }
        return media[0];
    }



    getMin(currentGroup) {
        let min = 0;
        currentGroup.forEach((element, index) => {
            if (index === 0) {
                min = element.main.temp_min;
            } else if (element.main.temp_min < min) {
                min = element.main.temp_min
            }
        });
        return Math.floor(min);

    }
    getMax(currentGroup) {
        let max = 0;
        currentGroup.forEach((element, index) => {
            if (index === 0) {
                max = element.main.temp_max;
            } else if (element.main.temp_max > max) {
                max = element.main.temp_max
            }
        });
        return Math.floor(max);
    }

    groupbyDate(forecast) {


        const groupbyDate = _.groupBy(this.withDates(forecast), 'date');

        let groupbyDateDetails = [];
        for (const key in groupbyDate) {
            const day = groupbyDate[key];

            const min = this.getMin(day);
            const max = this.getMax(day);


            groupbyDateDetails.push({
                date: key,
                dayofWeek:  moment(key).format('dddd'),     
                temp_min: min,
                temp_max: max,
                weather: this.dailyWeather(day),
                forecast: day,
            })
        }
        return groupbyDateDetails;
    }


    groupbyWeather(forecast) {


        const payload = forecast.map(item => ({ ...item, weather: item.weather[0].main }))

        return _.groupBy(this.withDates(payload), 'weather');


    }

}

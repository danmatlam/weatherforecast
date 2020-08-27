import React from 'react'
import { useSelector } from "react-redux";
import WeatherHourly from './WeatherHourly';
import styled from 'styled-components';
import moment from 'moment';
import ForecastChart from '../ForecastChart/ForecastChart';


const WeatherProfile = ({ day }) => {

    const weatherForecast = useSelector(state => state.weatheForecast);
    const { groupbyDate } = weatherForecast;

    const filter = groupbyDate && groupbyDate.length && groupbyDate.filter(item => item.dayofWeek === day);

    const selected = filter && filter.length && filter[0];

    return (
        <>
            <h1> Pronóstico extendido {moment(selected.date).format("dddd DD MMM")}</h1>
            <View>
                {
                    selected.forecast.map(item => <WeatherHourly data={item} />)
                }

            </View>
            {selected && <ForecastChart day={selected}></ForecastChart>}

        </>
    )
}


const View = styled.div`
    display:flex;
    flex-direction:row;
    overflow:scroll;
`;

export default WeatherProfile

import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import JSONTreeComponent from 'react-json-tree';
import WeatherHourly from './WeatherHourly';
import styled from 'styled-components';
import moment from 'moment';

const WeatherProfile = ({ day }) => {

    const weatherForecast = useSelector(state => state.weatheForecast);

    const { groupbyDate } = weatherForecast;

    debugger

    const filter = groupbyDate && groupbyDate.length && groupbyDate.filter(item => item.dayofWeek === day);

    const selected = filter && filter.length && filter[0]

    return (

        <>


            <h1> Pronóstico extendido {moment(selected.date).format("dddd DD MMM")}</h1>


            <View>

                {
                    selected.forecast.map(item => <WeatherHourly data={item} />)
                }

            </View>

</>
    )
}


const View = styled.div`
    display:flex;
    flex-direction:row;
    overflow:scroll;
`;

export default WeatherProfile

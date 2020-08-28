import React from 'react'
import { useSelector } from "react-redux";
import WeatherHourly from './WeatherHourly';
import styled from 'styled-components';
import moment from 'moment';
import ForecastChart from '../ForecastChart/ForecastChart';
import { PageHeader } from 'antd';
import { useHistory } from "react-router-dom";
import { Title } from '../common/Title';


const WeatherProfile = ({ day }) => {

    const weatherForecast = useSelector(state => state.weatheForecast);
    const { groupbyDate } = weatherForecast;
    const filter = groupbyDate && groupbyDate.length && groupbyDate.filter(item => item.dayofWeek === day);
    const selected = filter && filter.length && filter[0];

    const history = useHistory();



    return (
        <>

<Title title=""></Title>
            <PageHeader
                className="Pronóstico extendido"
                onBack={() => history.goBack()}
                title={moment(selected.date).format("dddd DD MMM")}
            />,


<Title title={`  Pronóstico extendido ${moment(selected.date).format("dddd DD MMM")}`}></Title>


            <WeatherHourly forecast={selected.forecast} />


            {selected && <ForecastChart day={selected}></ForecastChart>}

        </>
    )
}



export default WeatherProfile


import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { GET_WEATHER_FORECAST } from '../../redux/constants'

import { List, Card } from 'antd';
import WeatherIcon from './WeatherIcon';

import styled from 'styled-components';
import moment from 'moment';
import { Link } from 'react-router-dom';
import Forecast5DayChart from '../ForecastChart/Forecast5DayChart';



const WeatherList = () => {


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: GET_WEATHER_FORECAST, payload: {} });
    }, []);

    const weatherForecast = useSelector(state => state.weatheForecast);
    const { groupbyDate, city } = weatherForecast;


    return (
        <>


            <View>



                {
                    groupbyDate && groupbyDate.map(item =>
                        <ListItem>
                            <Link to={`/${item.dayofWeek}`}>

                                <List.Item>
                                    <List.Item.Meta
                                        avatar={<WeatherIcon icon={item.weather.main} />}
                                        title={<Title>{item.dayofWeek}</Title>}
                                        description={<Subtitle>{moment(item.date).format("ddd DD MMM")}</Subtitle>}
                                    />
                                </List.Item>

                                <Temperature>
                                    <Max>
                                        {item.temp_max} °C
                            </Max>
                                    <Min>
                                        {item.temp_min} °C
                            </Min>
                                </Temperature>

                                <Box>
                                    <City>
                                        {city.name}, {city.country}
                                    </City>

                                </Box>
                            </Link>

                        </ListItem>


                    )
                }

            </View>

            {groupbyDate && <Forecast5DayChart days={groupbyDate} />}


        </>



    )
}


const View = styled.div`
    display:flex;
    flex-direction:row;
    overflow:scroll;
    background-color:#000000;
    padding:.9em;

`;
const ListItem = styled.div`
    margin:.9em;

    padding:.9em;

    display:flex;
    flex-direction:column;
    min-width:18em;
    cursor:pointer;
    border-radius:15pt;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.05);
    transition-duration: 172ms;
    will-change: transform, box-shadow;
    transition: .4s ease-in-out;  
    :hover{
        transform: translate(0, -3.3px); 
        /* box-shadow: 8px 28px 50px rgba(39,44,49,.07), 1px 6px 12px rgba(39,44,49,.04); */
        transition: all .4s ease; 
    };

    background-color:white;



`;

const Title = styled.h1`
   font-size:1.2em;
   text-transform: capitalize;
    font-weight:700;
`;

const Subtitle = styled.h1`
   font-size:.9em;
   text-transform: capitalize;
`;




const City = styled.span`
    font-size:1.2em;
`



const Temperature = styled.div`
    text-align:center;
    margin:0;
`

const Max = styled.h2`
    font-size:3em;
    margin:.3em;
`

const Min = styled.h2`
    font-size:1.2em;
    margin:.3em;


`

const Box = styled.div`
  text-align:center;
  margin:1.2em;

`





export default WeatherList;

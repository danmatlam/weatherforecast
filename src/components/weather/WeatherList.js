
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { GET_WEATHER_FORECAST } from '../../data/constants'

import { Row, Col, Divider, Card, Layout } from 'antd';
import WeatherIcon from './WeatherIcon';
import { List, Avatar } from 'antd';

const { Header, Footer, Sider, Content } = Layout;




const WeatherList = () => {


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: GET_WEATHER_FORECAST, payload: {} });
    }, []);

    const weatherForecast = useSelector(state => state.weatheForecast);
    const { groupbyDate } = weatherForecast;





    return (


            <div style={{ 
                display:'flex',
                flexDirection:'row',
                overflow:'scroll',
                backgroundColor:'#000000',
                padding:'1.2em'
            }}>

                {
                    groupbyDate && groupbyDate.map(item =>

                            <Card style={{minWidth:'400px'}}>

                                <List.Item>
                                    <List.Item.Meta
                                        avatar={<WeatherIcon icon={item.weather.main} />}
                                        title={item.dayofWeek}
                                        description={item.date}
                                    />
                                </List.Item>

                                <h1>
                                    {item.temp_max}
                                </h1>
                                <h1>
                                    {item.temp_min}
                                </h1>


                            </Card>






                    )
                }
            </div>



    )
}

export default WeatherList

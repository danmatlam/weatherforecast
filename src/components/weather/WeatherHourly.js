import React from 'react'
import styled from 'styled-components';
import { List, Card } from 'antd';
import WeatherIcon from './WeatherIcon';

import moment from 'moment';
import JSONTreeComponent from 'react-json-tree';

const WeatherHourly = ({ data }) => {
    return (


        <ListItem>


            <List.Item>
                <List.Item.Meta
                    avatar={<WeatherIcon icon={data.weather[0].main} />}
                    title={
                        <Max>
                            {Math.floor(data.main.temp)} °C
                        </Max>
                    }

                />
            </List.Item>
            <Box>
                {data.hour}
            </Box>

        </ListItem>
    );
}


const View = styled.div`
    display:flex;
    flex-direction:row;
    overflow:scroll;
`;

const ListItem = styled.div`
    display:flex;
    flex-direction:column;
    margin:1.2em;
    min-width:21rem;
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




export default WeatherHourly;

import React from 'react'
import styled from 'styled-components';
import { List } from 'antd';
import WeatherIcon from './WeatherIcon';



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



const Max = styled.h2`
    font-size:3em;
    margin:.3em;
`

const Box = styled.div`
  text-align:center;
  margin:1.2em;
`




export default WeatherHourly;

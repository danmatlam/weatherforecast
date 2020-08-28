import React from 'react';
import styled from 'styled-components'

const Title = ({title}) => {
    return (
        <View>
            <H1>{title}</H1>
        </View>
    )
}


const View = styled.div`

    margin:1.5em 1.2em;
`;
const H1 = styled.h1`
    font-size:3em;
`

export {Title}
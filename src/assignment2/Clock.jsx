import React from 'react';
import styled,{css} from 'styled-components'
export default function Clock(props){
    return(
        <Box>
            <Title>{props.location}</Title>
            <SubTitle>{props.date}</SubTitle>
            <Wrapper>
                <Detail>{props.hour}</Detail>
                <Detail1>:</Detail1>
                <Detail>{props.minute}</Detail>
                <Detail1>:</Detail1>
                <Detail>{props.second}</Detail>
            </Wrapper>

        </Box>
    )
}
const Box = styled.div`
    margin:20px;
    display:inline-block;
`
const Title = styled.div`
    font-size:1.2rem;
    width:200px;
    text-align:center;
`
const SubTitle = styled.div`
    font-size:1.2rem;
    width:200px;
    text-align:center;
    background-color:green;
    color:#fff
`
const Wrapper = styled.div`
    height:100px;
    display:flex;
    justify-content:center;
    align-items:center;
    width:200px;
    background-color:yellow;
    color:#fff
`
const Detail = styled.span`
    font-size:1.2rem;
    width:20%;
    text-align:center;
    background-color:red;
`
const Detail1 = styled.span`
    font-size:1.2rem;
    width:10%;
    text-align:center;
`
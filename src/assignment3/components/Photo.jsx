import React from 'react';
import styled,{css} from 'styled-components'
export default function Photo(props){
    return(
        <IMG src={props.url} alt={props.key} />
    )
}
const IMG = styled.img`
    margin:10px;
    width:250px;
`
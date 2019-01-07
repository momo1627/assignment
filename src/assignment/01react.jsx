import React from 'react';
export default function Card(props){
    return(
        <div>
            <h1>{props.title}</h1>
            <img src={props.img} alt=""/>
            <h3>{props.subtitle}</h3>
            <p>{props.description}</p>
        </div>
    )
}
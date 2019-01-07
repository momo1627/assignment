import React from 'react';
import ReactDOM from 'react-dom';
// import * as serviceWorker from './serviceWorker';
// import './index.css';
// import App from './App';

//assignment 1
import './assignment/01react.css'
import img from './assignment/corgi.jpg'
import Assign1 from './assignment/01react';
const title = 'dog'
const subtitle ='corgi'
const description = 'cute'
const element = <Assign1 title={title} img={img} subtitle={subtitle} description={description} /> 
ReactDOM.render(element, document.getElementById('root'));




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

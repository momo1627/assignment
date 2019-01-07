import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Assign1 from './assignment/01react';
import * as serviceWorker from './serviceWorker';
const img = 'assignment/corgi.jpg'
const title = 'dog'
const subtitle ='corgi'
const descrpition = 'cute'
const element = <Assign1 title={title} img={img} subtitle={subtitle} descrpition={descrpition} /> 
ReactDOM.render(element, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

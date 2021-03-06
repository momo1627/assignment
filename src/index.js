import React from 'react';
import ReactDOM from 'react-dom';
// import * as serviceWorker from './serviceWorker';
// import './index.css';
// import App from './App';

//assignment 1
// import './assignment/01react.css'
// import img from './assignment/corgi.jpg'
// import Assign1 from './assignment/01react';
// const title = 'dog'
// const subtitle ='corgi'
// const description = 'cute'
// const element = <Assign1 title={title} img={img} subtitle={subtitle} description={description} /> 

//assignment 2
// import App from './assignment2/App'
// ReactDOM.render(<App />, document.getElementById('root'));


//practice 3
// import App from './practice3/app'
// ReactDOM.render(<App />, document.getElementById('root'));

//assignment 3 
// import App from './assignment3/pages/App'
// ReactDOM.render(<App />, document.getElementById('root'));

//assignment 4
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import addUser from './assignment4/reducers/user'
import App from './assignment4/components/App'
const store = createStore(addUser,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
ReactDOM.render(
    <Provider store={store}>
       <App />
    </Provider>
, 
document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();

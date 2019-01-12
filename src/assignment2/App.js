import React from 'react';
import ClocksField from './ClocksField';
import moment from 'moment'
export default class App extends React.Component{
    constructor(){
        super();
        this.state={
            history:[],
            newItem:[],
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(e){
        const result = e.target.value;
        this.setState({
            newItem:result,
        })
    }
    handleSubmit(e){
        e.preventDefault();
        const history = this.state.history;
        const newItem = this.state.newItem;
        if (newItem == ''){
            return false
        }
        history.push(newItem);
        this.setState({
            newItem:'',
            history:history
        })
    }
    render(){
        return(
            <div>
               <input type='text' value={this.state.newItem} onChange={this.handleChange} />
               <input type='button' onClick={this.handleSubmit} value='submit' />
               <ClocksField locations={this.state.history} />
            </div>
        )
    }
}
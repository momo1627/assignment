import React from 'react';
export default class Clock extends React.Component{
    constructor(){
        super()
        this.state = {
            date:{time:new Date()},
        }
    }
    render(){
        return (
            <div>
                <h2>it is {this.state.time.toLocalTimeString()}</h2>
            </div>
        )
    }
}
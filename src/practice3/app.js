import React from 'react';
export default class Timer extends React.Component{
    constructor(){
        super();
        this.state = {
            duration:0,
        }
    this.time = null;

    }
    tick=()=>{ 
        let time = this.state.duration;
        
        this.timer = setInterval(()=>{
            time++;
        this.setState({
            duration:time
        })
    },1000)
}
    
    Start = ()=>{
        this.Reset();
        this.tick();

    }
    Stop = ()=>{
        clearInterval(this.timer)
    }
    Continue = ()=>{
        this.tick()
    }
    Reset = ()=>{
        clearInterval(this.timer)
        this.setState({duration:0})
    }
    render(){
        return(
            <React.Fragment>
                <div>{this.state.duration}</div>
                <button onClick={this.Start}>Start</button>
                <button onClick={this.Continue}>Continue</button>
                <button onClick={this.Stop}>Stop</button>
                <button onClick={this.Reset}>Reset</button>
            </React.Fragment>
        )
    }
}
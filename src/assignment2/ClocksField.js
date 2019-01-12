import React from 'react';
import moment from 'moment-timezone';
// import moment from 'moment'
import Clock from './Clock'

export default class ClocksField extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            current:{
                date:moment().format("ddd MMM DD YYYY"),
                hour:moment().format("HH"),
                minute:moment().format("mm"),
                second:moment().format("ss") 
            }
            
        }
    }
    componentDidMount(){
        const tick = setInterval(()=>{
            this.setState({current:{
                date:moment().format("ddd MMM DD YYYY"),
                hour:moment().format("HH"),
                minute:moment().format("mm"),
                second:moment().format("ss") 
            }})
        },1000)
    }
    transferClock(input){
            input = input[0].toUpperCase() + input.substring(1)
            var location;
            moment.tz.names().map((item)=>{
                if(item.includes(input)){
                    location = item;
                } 
            })
            if (!location){
                return false
            }
            const result = {
            date:moment().tz(location).format("ddd MMM DD YYYY"),
            hour:moment().tz(location).format("HH"),
            minute:moment().tz(location).format("mm"),
            second:moment().tz(location).format("ss") 
        }   
        
        return result;
    }
    renderClock(){
        const locations = this.props.locations
        const element = locations.map((location)=>{
            const result = this.transferClock(location)
            return(
            result ? <Clock key={location} {...result} location={location} /> : <span>{location} is Wrong zone name</span>
            )
        
    })
        return  element

}
    
        
    render(){
        return(
            <div>
                <Clock {...this.state.current} location='sydney' />
                {this.renderClock()}
            </div>
        ) 
    }
    
}


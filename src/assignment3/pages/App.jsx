import React from 'react';
import getPhotos from '../middlewares/Request';
import Photo from '../components/Photo'
class Gallary extends React.Component{
    constructor(){
        super();
        this.state={
            searchItem:'',
            searchNumber:'',
        }
    }
    handleChange =(e)=>{
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]:value
        })
    };
    handleSubmit =(e)=>{
        e.preventDefault();
        const item = this.state.searchItem;
        const number = this.state.searchNumber;
        const sources = getPhotos(item,number);
        this.setState({
            sources:sources,
        })
    };
    renderElement =()=>{
        const sources = this.state.sources;
        const element = sources.map(source=>{return(<Photo url={source.url} key={source.url} />)})
        return element;
    }
    render(){

        return(
            <div>
                <input type="text" onChange={this.handleChange} name='searchItem' value={this.state.searchItem }/><br/>
                <input type="text" onChange={this.handleChange} name='searchNumber' value={this.state.searchNumber }/><br/>
                <input type="button" onClick={this.handleSubmit} value='Search'/>
                <div>
                    <h3>{this.state.searchItem} Gallary</h3>
                </div>
            </div>
        )
    }

}
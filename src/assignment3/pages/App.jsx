import React from 'react';
import getPhotos from '../middlewares/Request';
import Photo from '../components/Photo'
import styled,{css} from 'styled-components'
export default class Gallary extends React.Component{
    constructor(){
        super();
        this.state={
            searchItem:'',
            searchNumber:'',
            sources:[],
            size:'s'
        }
    }
    handleChange =(e)=>{
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]:value
        })
    };
    handleSubmit = async (e)=>{
        const item = this.state.searchItem;
        const number = this.state.searchNumber;
        const size = this.state.size;
        const sources = await getPhotos(item,number,size);
        this.setState({
            sources:sources,
        })
    };
    componentDidMount(){
        
    }
    renderElement=()=>{
        const sources = this.state.sources;

        const element = sources.map(source=>{return(<Photo url={source} key={source} />)})
        return element
    }
    render(){
        
        return(
            <div>
                <label htmlFor="">Photo Content:</label>
                <input type="text" onChange={this.handleChange} name='searchItem' value={this.state.searchItem }/><br/>
                <label htmlFor="">number of photos:</label>
                <input type="text" onChange={this.handleChange} name='searchNumber' value={this.state.searchNumber }/>
                <input type="button" onClick={this.handleSubmit} value='Search'/><br/>
                <label htmlFor="">Size of Photos:
                </label>
                <select name="size" id="" onChange={this.handleChange}>
                    <option value="s">small</option>
                    <option value="t">thumbnall</option>
                    <option value="q">large square</option>
                    <option value="z">medium</option>
                </select>
                <div>
                    <h3>{this.state.searchItem} Gallary</h3>
                    <Container>
                    {this.renderElement()}
                    </Container>
                </div>
            </div>
        )
    }

}
const Container = styled.div`
`
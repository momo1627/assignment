import React from 'react';
// export default class Clock extends React.Component{
//     constructor(){
//         super()
//         this.state = {
//             date:{time:new Date()},
//         }
//     }
    
//     componentDidMount(){
//         const tick = setInterval(()=>{
//             this.setState({date:{
//                 time:new Date(),
//             }})
//         },1000)
//     }
//     render(){
//         return (
//             <div>
//                 <h2>it is {this.state.date.time.toLocaleTimeString()}</h2>
//             </div>
//         )
//     }
// }

import styled, {css} from 'styled-components';
const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}
`;

const Container = styled.div`
  text-align: center;
`

export default class Clock extends React.Component{
    render(){
        return (
        <Container>
          <Button>Normal Button</Button>
          <Button primary>Primary Button</Button>
        </Container>
      )
        }
}

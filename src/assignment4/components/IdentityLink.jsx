import React from 'react'
import {Button} from './Button'

const IdentityLink = ({active,onClick,children}) =>{
    if(active){
        return <span>{children}</span>
    }
    return (
        <Button href="" onClick={e=>{e.preventDefault();onClick()}}>
        {children}
        </Button>
    )
}
export default IdentityLink
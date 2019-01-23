import React from 'react'
import Proptypes from 'prop-types'
import {Button} from './Button'

const LogStatusLink = ({active,onClick,children})=>{
    if(active){
        return <span>{children}</span>       
    }
    return(
        <Button href="#" onClick={e=>{e.preventDefault();onClick()}}>
            {children}
        </Button>
    )
}
LogStatusLink.Proptypes = {
    active:Proptypes.bool.isRequired,
    children:Proptypes.node.isRequired,
    onClick:Proptypes.func.isRequired
}
export default LogStatusLink
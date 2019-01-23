import React from 'react'
import Proptypes from 'prop-types'
const LogStatusLink = ({active,onClick,children})=>{
    if(active){
        return <span>{children}</span>       
    }
    return(
        <a href="#" onClick={e=>{e.preventDefault();onClick()}}>
            {children}
        </a>
    )
}
LogStatusLink.Proptypes = {
    active:Proptypes.bool.isRequired,
    children:Proptypes.node.isRequired,
    onClick:Proptypes.func.isRequired
}
export default LogStatusLink
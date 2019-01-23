import React from 'react'
const IdentityLink = ({active,onClick,children}) =>{
    if(active){
        return <span>{children}</span>
    }
    return (
        <a href="" onClick={e=>{e.preventDefault();onClick()}}>
        {children}
        </a>
    )
}
export default IdentityLink
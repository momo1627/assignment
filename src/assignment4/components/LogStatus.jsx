import React from 'react'
import PropTypes from 'prop-types'
const LogStatus = ({logStatus,toggleLog})=>{
    return(
        <span> is {logStatus? 'login' : 'logout'}
            <button onClick={toggleLog}>{!logStatus? 'login' : 'logout'}</button>
        </span>
        
    )
}
LogStatus.PropTypes = {
    logStatus:PropTypes.bool.isRequired,
    toggleLog:PropTypes.func.isRequired
}
export default LogStatus
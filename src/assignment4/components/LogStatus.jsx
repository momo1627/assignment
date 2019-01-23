import React from 'react'
import PropTypes from 'prop-types'
import {Button} from './Button'
const LogStatus = ({logStatus,toggleLog})=>{
    return(
        <span> is {logStatus? 'login' : 'logout'}
            <Button onClick={toggleLog}>{!logStatus? 'login' : 'logout'}</Button>
        </span>
        
    )
}
LogStatus.PropTypes = {
    logStatus:PropTypes.bool.isRequired,
    toggleLog:PropTypes.func.isRequired
}
export default LogStatus
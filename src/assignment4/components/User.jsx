import React from 'react'
import PropTypes from 'prop-types'
import Identity from './Identity'
import Username from './Username'
import LogStatus from './LogStatus'
import {Button} from './Button'
const User = ({showIdentity,username,identity,logStatus,onToggleLog,onToggleIdentity}) =>{
    return (
        <li>
            {
                showIdentity ? <Identity identity={identity} /> : <Username username={username}/>
            }
            <LogStatus logStatus={logStatus} toggleLog={onToggleLog}/>
            <Button onClick={onToggleIdentity}>
            {showIdentity?'Show Username':'Show Identity'}</Button>
        </li>
    )
}
User.PropTypes = {
    username:PropTypes.string.isRequired,
    identity:PropTypes.string.isRequired,
    showIdentity:PropTypes.bool.isRequired,
    logStatus:PropTypes.bool.isRequired,
    ontoggleLog:PropTypes.func.isRequired,
    onShowIdentity:PropTypes.func.isRequired,
}

export default User
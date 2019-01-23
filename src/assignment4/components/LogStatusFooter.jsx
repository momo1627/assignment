import React from 'react'
import {LogStatusFilter} from '../actions/username'
import LogFilterLink from '../containers/LogFilterLink'
const LogStatusFooter = ()=>{
    return (
        <div>
        <p>
            Show:
            All Users:<LogFilterLink filter={LogStatusFilter.All}>ALL</LogFilterLink>
            Login Users:<LogFilterLink filter={LogStatusFilter.Login}>Login</LogFilterLink>
            Logout Users:<LogFilterLink filter={LogStatusFilter.Logout}>Logout</LogFilterLink>
        </p>
        </div>
        
    )
}
export default LogStatusFooter;
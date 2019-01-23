import React from 'react'
import {LogStatusFilter} from '../actions/username'
import LogFilterLink from '../containers/LogFilterLink'
const LogStatusFooter = ()=>{
    return (
        <div>
        <p>
            Show:
            All Users:<LogFilterLink filter={LogStatusFilter.All}>ALL</LogFilterLink><br/>
            Login Users:<LogFilterLink filter={LogStatusFilter.Login}>Login</LogFilterLink><br/>
            Logout Users:<LogFilterLink filter={LogStatusFilter.Logout}>Logout</LogFilterLink><br/>
        </p>
        </div>
        
    )
}
export default LogStatusFooter;
import React from 'react'
import {IdentityFilter} from '../actions/username'
import IdentityFilterLink from '../containers/IdentityFilterLink'
const IdentityFooter = ()=>{
    return (
        <div>
        <p>
            Show:
            All Users:<IdentityFilterLink filter={IdentityFilter.All}>ALL</IdentityFilterLink><br/>
            Admin Users:<IdentityFilterLink filter={IdentityFilter.Admin}>Admin</IdentityFilterLink><br/>
            Visitor Users:<IdentityFilterLink filter={IdentityFilter.Visitor}>Visitor</IdentityFilterLink><br/>
        </p><br/>
        </div>
        
    )
}
export default IdentityFooter;
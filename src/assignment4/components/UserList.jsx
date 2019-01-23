import React from 'react'
import Proptypes from 'prop-types'
import User from './User'
const UserList = ({users,onToggleLog,onToggleIdentity})=>{
    return (
        <ul>
            {users.map((user)=>{
                return(
                    <User key={user.id} {...user} onToggleIdentity={()=>onToggleIdentity(user.id)} onToggleLog={()=>onToggleLog(user.id)}/>
                )
            })}
        </ul>
    )
}
UserList.proptypes={
    users:Proptypes.arrayOf(
        Proptypes.shape({
            id:Proptypes.number.isRequired,
            username:Proptypes.string.isRequired,
            identity:Proptypes.string.isRequired,
            showIdentity:Proptypes.bool.isRequired,
            LogStatus:Proptypes.bool.isRequired
        }).isRequired
    ).isRequired,
    onToggleIdentity:Proptypes.func.isRequired,
    onToggleLog:Proptypes.func.isRequired
}
export default UserList
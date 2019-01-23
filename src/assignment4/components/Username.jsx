import React from 'react'
import PropTypes from 'prop-types'
const Username = ({username})=>{
    return (
        <span>{username}</span>
    )
}
Username.PropTypes = {
    username:PropTypes.string.isRequired
}
export default Username
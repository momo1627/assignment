import React from 'react'
import PropTypes from 'prop-types'
const Identity = ({identity})=>{
    return (
        <span>{identity}</span>
    )
}
Identity.PropTypes = {
    identity:PropTypes.string.isRequired
}
export default Identity
import {connect} from 'react-redux'
import {setIdentityFilter} from '../actions/username'
import IdentityLink from '../components/IdentityLink'
const mapStateToProps = (state,ownProps) =>{
    return{
        active : ownProps.filter === state.identityFilter,
    }
}
const mapDispatchToProps = (dispatch,ownProps)=>{
    return {
        onClick:()=>{
            dispatch(setIdentityFilter(ownProps.filter))
        }
    }
}
const IdentityFilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(IdentityLink)
export default IdentityFilterLink
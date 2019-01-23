import {connect} from 'react-redux'
import {setLogStatusFilter} from '../actions/username'
import LogStatusLink from '../components/LogStatusLink'
const mapStateToProps = (state,ownProps)=>{
    return {
        active:ownProps.filter === state.logStatusFilter,
    }
}
const mapDispatchToProps = (dispatch,ownProps)=>{
    return {
        onClick:()=>{
            dispatch(setLogStatusFilter(ownProps.filter))
        }
    }
}
const LogStatusFilter = connect(
    mapStateToProps,
    mapDispatchToProps
)(LogStatusLink);
export default LogStatusFilter
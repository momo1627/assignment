import {connect} from 'react-redux'
import UserList from '../components/UserList'
import { toggleLog, toggleIdentity} from '../actions/username'
const getLogStatusUser = (users,filter)=>{
    switch(filter){
        case 'SHOW_ALL':
            return users;
        case 'SHOW_LOGIN':
            return users.filter(t=>t.logStatus);
        case 'SHOW_LOGOUT':
            return users.filter(t=>!t.logStatus);
    }
}
const getIdentityFilter= (users,filter1,filter2)=>{
    switch(filter1){
        case 'SHOW_ALL':
            return getLogStatusUser(users,filter2);
        case 'SHOW_ADMIN':
            return getLogStatusUser(users.filter(t=>t.identity==='Admin'),filter2);
        case 'SHOW_VISITOR':
            return getLogStatusUser(users.filter(t=>t.identity==='Visitor'),filter2);
    }
}
const mapStateToProps = state =>{
    return {
        users:getIdentityFilter(state.users,state.identityFilter,state.logStatusFilter)
    }
}
const mapDispatchToProps = dispatch=>{
    return {
        onToggleLog:id=>{
            dispatch(toggleLog(id))
        },
        onToggleIdentity:id=>{
            dispatch(toggleIdentity(id))
        }
    }
}
const IdentityUserList = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserList)
export default IdentityUserList;
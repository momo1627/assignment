import {combineReducers} from 'redux'
import {LogStatusFilter,IdentityFilter} from '../actions/username'

const users = (state = [], action)=>{
    switch(action.type){
        case 'ADD_USER':
        
            return [
                    ...state,
                    {
                        id:action.id,
                        username:action.username,
                        identity:action.identity,
                        showIdentity:false,
                        logStatus:true,
                    }
                ]
        case 'TOGGLE_LOG':
            return state.map(state => state.id === action.id ? {...state,logStatus:!state.logStatus} : state)
            
        case 'TOGGLE_IDENTITY':
            return state.map(state=>state.id === action.id ? {...state,showIdentity:!state.showIdentity} : state)
            
        default:
            return state
    }
}
const logStatusFilter = (state = LogStatusFilter.All,action)=>{
    switch(action.type){
        case 'SET_LOGSTATUS_FILTER':
            return action.filter
        default:
            return state
    }
}
const identityFilter = (state = IdentityFilter.All,action)=>{
    switch(action.type){
        case 'SET_IDENTITY_FILTER':
            return action.filter
        default:
            return state
    }
}
export default combineReducers({
    users,
    logStatusFilter,
    identityFilter
}
)
let NextUserId = 0
export const addUser = (username,identity)=>({
    type:'ADD_USER',
    id:NextUserId++,
    username:username,
    identity:identity
})
export const toggleIdentity = (id)=>({
    type:'TOGGLE_IDENTITY',
    id
})
export const toggleLog = (id)=>({
    type:'TOGGLE_LOG',
    id
})
export const setIdentity = (identity)=>({
    type:'SET_IDENTITY',
    identity
})
export const LogStatusFilter = {
    All:'SHOW_ALL',
    Login:'SHOW_LOGIN',
    Logout:'SHOW_LOGOUT'
}
export const setLogStatusFilter = filter=>({
    type:'SET_LOGSTATUS_FILTER',
    filter
})
export const setIdentityFilter = filter=>({
    type:'SET_IDENTITY_FILTER',
    filter
})
export const IdentityFilter = {
    All:'SHOW_ALL',
    Admin:'SHOW_ADMIN',
    Visitor:'SHOW_VISITOR'
}



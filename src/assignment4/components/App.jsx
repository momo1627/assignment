import React from 'react'
import AddUser from '../containers/AddUser'
import VisibleUserList from '../containers/VisibleUserList';
import LogStatusFooter from './LogStatusFooter'
import IdetntityFooter from './IdentityFooter'
const App = ()=>{
    return (
        <div>
            <AddUser />
            <VisibleUserList />
            <LogStatusFooter />
            <IdetntityFooter />
        </div>
    )
}
export default App
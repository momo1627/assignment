import React from 'react'
import AddUser from '../containers/AddUser'
import VisibleUserList from '../containers/VisibleUserList';
import LogStatusFooter from './LogStatusFooter'
import IdetntityFooter from './IdentityFooter'
import styled from 'styled-components'
const App = ()=>{
    return (
        <div>
            <AddUser />
            <DivContainer>
                <div>
                <LogStatusFooter />
                <IdetntityFooter />
                </div>
                <VisibleUserList />                
            </DivContainer>
        </div>

    )
}
const DivContainer = styled.div`
    display:flex;
    justify-content:start
`
export default App
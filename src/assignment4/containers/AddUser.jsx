import React from 'react'
import {Button} from '../components/Button'
import { connect } from 'react-redux'
import {addUser} from '../actions/username'
let AddUser = ({dispatch})=>{
    let input;
    let select;
    return (
        <div>
            <form action="" onSubmit={(e)=>{
                e.preventDefault();
                if(!input.value.trim()){return null}
                dispatch(addUser(input.value,select.value))
                input.value='';
            }}>
            <input type="text" ref={node=>{input=node}} />
            <br/>
            <select name="" id="" ref={node=>{select=node}}>
                <option value="Admin">Admin</option>
                <option value="Visitor">Visitor</option>
            </select>
            <Button type='submit'>Add User</Button>
            </form>
            
        </div>
    )
}
AddUser = connect()(AddUser)
export default AddUser
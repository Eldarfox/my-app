import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchUsersAction} from "../../redux/actions";
import UserCard from "../../components/UserCard";

const UsersPage = () => {
    const users = useSelector(state => state.titleReducer.users)
    const dispatch = useDispatch()
    console.log(users)
    return (
        <div style={{backgroundColor: "gray", height: "100vh"}}>
            <button onClick={()=> dispatch(fetchUsersAction())} style={{padding: "15px",marginTop:"20px", borderRadius:"10px"}}>get users</button>
            <div style={{display: "flex" , flexWrap: "wrap"}}>
                {users.map(user => <UserCard userInfo={user}/> )}
            </div>
        </div>
    );
};

export default UsersPage;
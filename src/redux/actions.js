import {types} from "./types";
export function asyncFunctionAction() {
    return function () {
        setTimeout(() =>{
            alert('Hello')
        }, 2000)
    }
}

function getUsersAction(users) {
    return{
        type: types.USERS ,
        payload: users
}
}

export function fetchUsersAction() {
    return async function (dispatch){
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        dispatch(getUsersAction(data))
    }
}

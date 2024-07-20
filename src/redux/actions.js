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
export function fetchPost() {
    return async function(){
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
}
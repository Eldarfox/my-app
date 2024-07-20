import React from 'react';
import { Link } from 'react-router-dom';
const UserCard = ({userInfo}) => {
    const text = async () =>{
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: userInfo.name,
                body: userInfo.username,
                userId: userInfo.id
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log('отправлено:', data);
            })
            .catch((error) => {
                console.error('ошибка:', error);
            });
    }
    return (
        <Link to={`/user/${userInfo.id}`} style={{ margin:"0 auto",textDecoration: 'none', color: 'inherit' }}>
            <div onClick={text}
                style={{
                    width: "200px",
                    height: "150px",
                    backgroundColor: "white",
                    padding: "24px",
                    margin: "10px",
                    boxShadow: "10px 5px 5px black",
                    cursor: "pointer"
                }}>
                <img alt="" style={{ height: "50px" }}
                    src="https://w7.pngwing.com/pngs/205/731/png-transparent-default-avatar-thumbnail.png"
                />
                <h1 style={{ fontSize: "24px" }}>{userInfo.name}</h1>
                <p>{userInfo.username}</p>
                <p>{userInfo.email}</p>
            </div>
        </Link>
    );
};

export default UserCard;
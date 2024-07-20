import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import classes from "./UserDatail.module.css";
import { Link } from "react-router-dom";

const UserDetail = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json())
            .then(data => setUser(data))
            .catch(error => console.error('Error:', error));
    }, [id]);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className={classes.UserAll}>
            <Link to={`/`} style={{textDecoration:"none" ,display:"flex" ,width:"60px",height: "30px"}}><button>home</button></Link>
        <div className={classes.UserDat}>
            <h1>{user.name}</h1>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
            <p>Company: {user.company.name}</p>
            <p>Address: {user.address.street}, {user.address.city}</p>
        </div>
        </div>
    );
};

export default UserDetail;

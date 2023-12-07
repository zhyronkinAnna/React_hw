import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const UserInfo = () => {
    const {id} = useParams();
    const [user, setUset] = useState({});

    const getUser = async() =>{
        const response = await axios("https://jsonplaceholder.typicode.com/users" + id);
        setUset(response.data);
    }

    useEffect(() => {
        getUser();
    }, []);

    return (
        <div>
            <h1>{user.name}</h1>
            <div>{user.email}</div>
        </div>
    );
}

export default UserInfo;

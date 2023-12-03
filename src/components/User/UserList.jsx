import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const response = await axios("https://jsonplaceholder.typicode.com/users");
        console.log(response);
        setUsers(response.data);
    }

    useEffect(()=> {
        getUsers();
    }, []);

    return (
        <div>
            {users.map((user) => <p>{user.name}</p>)}
        </div>
    );
}

export default UserList;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink, useParams } from 'react-router-dom';

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
            {users.map((user) => <p>
                <NavLink to={`/userLister/${user.id}`}> <p>{user.name}</p></NavLink>
            </p>)}
        </div>
    );
}

export default UserList;

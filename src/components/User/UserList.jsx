import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink, Outlet, useParams } from 'react-router-dom';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [textSearch, setTextSearch] = useState('');

    const getUsers = async () => {
        const response = await axios("https://jsonplaceholder.typicode.com/users");
        console.log(response);
        setUsers(response.data);
    }

    useEffect(()=> {
        getUsers();
    }, []);

    const searchHandler = (e) =>{
        setTextSearch(e.target.value);
        
    }

    return (
        <div>
            <input type="text" value={textSearch} onChange={searchHandler}/>

            {users.map((user) => 
            <p>
                <NavLink to={`/userList/${user.id}`}>{user.name}</NavLink>
            </p>)}

            <Outlet/>
        </div>
    );
}

export default UserList;

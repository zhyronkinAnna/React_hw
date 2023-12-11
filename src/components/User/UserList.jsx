import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink, Outlet, useSearchParams } from 'react-router-dom';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useSearchParams();
    const [textSearch, setTextSearch] = useState(search.get('s') ?? '');

    const getUsers = async () => {
        const response = await axios("https://jsonplaceholder.typicode.com/users");
        console.log(response);
        setUsers(response.data);
    }

    useEffect(()=> {
        getUsers();
    }, []);

    const searchHandler = (e) =>{
        console.log(e.target.value);
        setTextSearch(e.target.value);
        setSearch({ s: e.target.value });
    }

    const filterUsers = (user) => { 
        if (textSearch){
          // return user.name.toLowerCase().includes(textSearch.toLowerCase());
            return new RegExp(textSearch, "i").test(user.name);
        }
        return true;
    }

    return (
        <div>
            <input type="text" value={textSearch} onChange={searchHandler} />

            {users.filter(filterUsers).map((user) => (
                <p>
                <NavLink to={`/userList/${user.id}`}>{user.name}</NavLink>
                </p>
            ))}

            <Outlet />
            {/* выводит дочерний компонент */}
    </div>
    );
}

export default UserList;

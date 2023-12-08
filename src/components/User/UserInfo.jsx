import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const UserInfo = () => {
    const {id} = useParams();
    const [user, setUset] = useState({});
    const [error, setError] = useState(null);

    const getUser = async() =>{
        try{
            const response = await axios("https://jsonplaceholder.typicode.com/users/" + id);
            setUset(response.data);
        }catch(err){
           setError("User not found");
        }
    }

    useEffect(() => {
        getUser();
    }, [id]);

    return (
        <div>
            {error ? error : (<>
                <h1>{user.name}</h1>
                <div>{user.email}</div>
            </>)}
        </div>
    );
}

export default UserInfo;

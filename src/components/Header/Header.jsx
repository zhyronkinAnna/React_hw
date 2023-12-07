import React from 'react';
import { Link, NavLink} from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        // link or navLInk
        <nav className='header'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/counter">Counter</NavLink>
            <NavLink to="/movieList">Movie</NavLink>
            <NavLink  to="/userList">Users</NavLink>
            <NavLink to="/posts">Posts</NavLink>
        </nav>
    );
}

export default Header;

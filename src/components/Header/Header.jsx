import React from 'react';
import { Link, NavLink} from 'react-router-dom';

const Header = () => {
    return (
        // link or navLInk
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/counter">Counter</NavLink>
            <NavLink to="/movieList">Movie</NavLink>
            <NavLink  to="/userList">Users</NavLink>
        </nav>
    );
}

export default Header;

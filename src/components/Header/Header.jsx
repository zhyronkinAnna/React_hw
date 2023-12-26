import React from 'react';
import { Link, NavLink} from 'react-router-dom';
import './Header.css';
import ThemeContext from '../../context/ThemeContext';
import SavedMoviesContext from '../../context/SavedMoviesContext';
import { useContext } from 'react';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import LightModeIcon from '@mui/icons-material/LightMode';
import FavoriteIcon from '@mui/icons-material/Favorite';
import classNames from 'classnames';

const Header = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);
    const {count, resetCount} = useContext(SavedMoviesContext);
    console.log(theme);
    return (
        // link or navLInk
      <div className={classNames({dark: theme === "dark"})}>
          <nav className='header'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about-us">About us</NavLink>
            <NavLink to="/callme">Call me</NavLink>
            <NavLink to="/counter">Counter</NavLink>
            <NavLink to="/movieList">Movie</NavLink>
            <NavLink to="/userList">Users</NavLink>
            <NavLink to="/stepper">Stepper</NavLink>
            <NavLink to="/posts">Posts</NavLink>
            <NavLink to="/favorites">{count}<FavoriteIcon/></NavLink>
        </nav>

        {theme === 'light' ? <ModeNightIcon onClick={toggleTheme}/> : <LightModeIcon onClick={toggleTheme}/>}
       
      </div>
    );
}

export default Header;

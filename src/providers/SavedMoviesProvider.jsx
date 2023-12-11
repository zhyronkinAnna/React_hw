import React, { useEffect, useState } from 'react';
import SavedMoviesContext from '../context/SavedMoviesContext';

const SavedMoviesProvider = ({children}) => {
    const [count, setCount] = useState(0);
 
    const resetCount = () => {
        setCount(JSON.parse(localStorage.getItem("favouriteMovies")).length);
    }
   
    return (
        <SavedMoviesContext.Provider value={{count, resetCount}}>
            {children}
        </SavedMoviesContext.Provider>
    );
}

export default SavedMoviesProvider;
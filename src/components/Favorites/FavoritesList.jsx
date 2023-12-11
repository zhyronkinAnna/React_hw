import React, {useEffect, useState, useContext} from 'react';
import Movie from '../CommonElement/Movie';
import '../Movies/MovieList.css';
import SavedMoviesContext from '../../context/SavedMoviesContext';

const FavoritesList = () => {
    const [favMovies, setFavMovies] = useState();
    const {count, resetCount} = useContext(SavedMoviesContext);
    
    useEffect(()=>{
      const movies = JSON.parse(localStorage.getItem("favouriteMovies") || []);
      setFavMovies(movies); 
    }, []);

    const movieList = (
        <div className='movie-list'>
            {favMovies && favMovies.map((movie)=> <Movie item={movie}/>)}
        </div>
    );

    return (
        <div className='main-wrapper'>
            {count !== 0 ? movieList : <h1>No favorites yet</h1>}
        </div>
    );
}

export default FavoritesList;

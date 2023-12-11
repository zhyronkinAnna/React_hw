import React, { useEffect, useState, useContext} from 'react';
import { useImmer } from 'use-immer';

import SavedMoviesContext from '../../context/SavedMoviesContext';

import MovieListItem from './MovieListItem';
import MovieSearch from './MovieSearch';
import MovieFilter from './MovieFilter';

import './MovieList.css'
import initialFilms from './films';

const MovieList = () => {
    const [filmsArray, filterFilmArray] = useImmer(initialFilms);
    const [isMovieReload, setIsMovieReload] = useState(false);
    const favMovies = JSON.parse(localStorage.getItem("favouriteMovies")) || [];
    const [favorites, setFavorites] = useState(favMovies);

    const {count, resetCount} = useContext(SavedMoviesContext);

    const filterFilms = (sorter) => {
        filterFilmArray(draft => { 
            draft.sort(sorter);
        });
    }

    useEffect(() => {
       if(isMovieReload){
         setIsMovieReload(false);
         filterFilmArray(initialFilms);
        }
    }, [isMovieReload, filmsArray, initialFilms]);

    useEffect(() => {
       localStorage.setItem("favouriteMovies", JSON.stringify(favorites));
       console.log(JSON.stringify(favorites));
       resetCount();
    }, [favorites]);

    const searchFilms = (filter) => {
        filterFilmArray(initialFilms.filter(filter));
    }

    const addToFavorites = (film) =>{
        const newFavorites = [...favorites, film];
        setFavorites(newFavorites);
    }

    const removeFromFavorites = (id) => {
        const newFavorites = favorites.filter(item => item.id !== id);
        setFavorites(newFavorites);
    }

    const getFavStatus = (id) => {
        return favorites.some(item => item.id === id);
    }

    return (
        <div className='main-wrapper'>
            <h1>Movie</h1>
            <MovieSearch searchFilms={searchFilms} setIsReload={setIsMovieReload}/>
            <MovieFilter movieFilter={filterFilms} setIsReload={setIsMovieReload}/>
            <div className='movie-list'>
                {filmsArray.map((item) => <MovieListItem item={item} favStatus={getFavStatus(item.id)} 
                addToFavorites={addToFavorites} removeFromFavorites={removeFromFavorites} key={item.id}/>)} 
            </div>
        </div>
    );
}

export default MovieList;

import React, { useEffect } from 'react';
import { useImmer } from 'use-immer';
import { useState } from 'react';

import MovieItem from './MovieItem';
import MovieSearch from './MovieSearch';
import MovieFilter from './MovieFilter';

import './MovieList.css'
import initialFilms from './films';

const MovieList = () => {
  
    const [filmsArray, filterFilmArray] = useImmer(initialFilms);
    const [isMovieReload, setIsMovieReload] = useState(false);

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
    }, [isMovieReload, filterFilmArray, initialFilms]);
    
    return (
        <div className='main-wrapper'>
            <h1>Movie</h1>
            <MovieSearch/>
            <MovieFilter movieFilter={filterFilms} setIsReload={setIsMovieReload}/>
            <div className='movie-list'>
                {filmsArray.map((item) => <MovieItem item={item} key={item.id}/>)} 
            </div>
        </div>
    );
}

export default MovieList;

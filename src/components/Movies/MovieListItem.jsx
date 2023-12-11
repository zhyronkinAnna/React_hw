import React, { useEffect } from 'react';
import { useState } from 'react';
import './MovieList.css';
import Movie from '../CommonElement/Movie';


const MovieListItem = ({item, favStatus, addToFavorites, removeFromFavorites}) => {
    const [favorite, setFavourite] = useState(favStatus);
   
    const toggleFav = () =>{
        setFavourite(favorite ? false : true);
    }

    useEffect(() => {
       favorite ? addToFavorites(item) : removeFromFavorites(item.id); 
    }, [favorite]);

    return (
        <Movie item={item} favStatus={favorite} toggleFav={toggleFav}/>
    );
}

export default MovieListItem;

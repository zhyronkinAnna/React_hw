import Movie from '../CommonElement/Movie';
import React from 'react';

const FavoritesItem = ({item}) => {
    return (
      <Movie item={item} favStatus={null} toggleFav={null}/>
    );
}

export default FavoritesItem;

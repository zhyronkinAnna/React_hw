import React from 'react';
import { useState } from 'react';
import './MovieList.css';

const MovieItem = ({item}) => {

    const [visible, setVisible] = useState(false);
    const [btnContent, setBtnContent] = useState("Description");
   
    const descripClickHandler = () =>{
        setVisible(!visible);
        visible ? setBtnContent("Description") :  setBtnContent('Close');
    }

    const description = (
        <div className='movie-description'>{item.description}</div>
    );

    const poster = (<img src={item.image} alt={item.name}/>);

    return (
        <div className='movie-tile'>
            { visible === true ? description : poster}
            <p>Title: {item.name}</p>
            <p>Year: {item.year}</p>
            <button onClick={descripClickHandler} className='movie-description-button'>{btnContent}</button>
        </div>
    );
}

export default MovieItem;

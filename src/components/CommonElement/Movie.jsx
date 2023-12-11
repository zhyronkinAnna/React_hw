import React, {useState} from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Movie = ({item, favStatus, toggleFav}) => {

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

    const favIcon = (favStatus === true ? <FavoriteIcon onClick={toggleFav}/> : <FavoriteBorderIcon onClick={toggleFav}/>);

    return (
        <div className='movie-tile'>
            { visible === true ? description : poster}
            {toggleFav &&  favIcon }
            <p>Title: {item.name}</p>
            <p>Year: {item.year}</p>
            <button onClick={descripClickHandler} className='movie-description-button'>{btnContent}</button>
        </div>
    );
}

export default Movie;

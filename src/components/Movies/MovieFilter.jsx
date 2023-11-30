import React from 'react';

const MovieFilter = ({movieFilter, setIsReload}) => {
    
    const filterOptions = {
        "Title" : (a, b) => a.name.localeCompare(b.name),
        "Year - newest" : (a, b) => b.year -  a.year,
        "Year - older" : (a, b) => a.year - b.year
    }

    const selectHandler =(e) =>{  
       const selectedOption = e.target.value;
       movieFilter(filterOptions[selectedOption]);
    }

    return (
        <div className='movie-filter'>
            <label htmlFor="movie-filter">Sort by: </label>
            <select id="movie-filter" onChange={selectHandler}>
                <option>Title</option>
                <option>Year - newest</option>
                <option>Year - older</option>
            </select>
            <button onClick={() => setIsReload(true)}>⟳</button>
        </div>
    );
}

export default MovieFilter;

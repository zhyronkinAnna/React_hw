import React from 'react';

const MovieSearch = () => {
    return (
        <div className='movie-search'>
            <form>
                <input placeholder='Search by title'/>
                <button>Search</button>
            </form>
        </div>
    );
}

export default MovieSearch;

import {React, useState, useEffect} from 'react';
import { useSearchParams } from 'react-router-dom';

const MovieSearch = ({searchFilms, setIsReload}) => {
    const [search, setSearch] = useSearchParams();
    const [searchText, setSearchText] = useState(search.get('s')?? '');
    
    const [searchOption, setSearchOption] = useState('Title');
    const [placeholder, setPlaceholder] = useState("Search by" + searchOption);
   
    let searchInput = {}; //todo: 
    const SEARCH_OPTIONS = {
        "Title" : film => new RegExp(searchInput, "i").test(film.name),
        "Year" : film => new RegExp(searchInput, "i").test(film.year)
    };
    
    const SelectChangedHandler = (e) => {
       setSearchOption(e.target.value);
       setPlaceholder("Search by " + e.target.value);
    }
    
    const handleSearchInputChange  = (e) => {
        searchInput = e.target.value;
        setSearch({s: searchInput});
        setSearchText(searchInput);
        
        if (searchInput.length === 0) {
            setIsReload(true);
            return;
        }

        filmSearchHandler();
    }

    const filmSearchHandler = () => {
       searchFilms(SEARCH_OPTIONS[searchOption]);
    }

    return (
        <div className='movie-search'>
            <form>
                <input placeholder={placeholder} value={searchText} onChange={handleSearchInputChange }/>
                <select id="movie-search-select" onChange={SelectChangedHandler}>
                    <option>Title</option>
                    <option>Year</option>
                </select>
            </form>
        </div>
    );
}

export default MovieSearch;

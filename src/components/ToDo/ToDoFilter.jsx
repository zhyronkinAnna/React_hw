import React from 'react';
import Button from './Button';

const ToDoFilter = ({FILTER_MAP, setFilter, filter}) => {
    const buttonNemes = Object.keys(FILTER_MAP);

    return (
        <div className='filter'>
            {buttonNemes.map((name) => <Button name={name} key={name} setFilter={setFilter} filter={filter}/>)}
        </div>
    );
}

export default ToDoFilter;

import React from 'react';
import PostItem from './PostItem';

const PaginationItems = ({currentItems}) => {
    return (
        <>
          {currentItems && currentItems.map((item =>(
            <PostItem title={item.title} body={item.body} key={item.id}/>
          )))}
        </>
    );
}

export default PaginationItems;

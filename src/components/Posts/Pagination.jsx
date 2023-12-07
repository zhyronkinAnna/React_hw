import React from 'react';
import { useState} from 'react';
import ReactPaginate from 'react-paginate';
import PaginationItems from './PaginationItems';
import './Pagination.css'


const Pagination = ({items, itemsPerPage}) => {
    const [itemOffset, setItemOffset] = useState(0);

    const pageCount = Math.ceil(items.length/itemsPerPage);
   
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = items.slice(itemOffset, endOffset); 

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        setItemOffset(newOffset);
    };

    return (
        <div>
            <PaginationItems currentItems={currentItems}/>
             <ReactPaginate
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={2}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
                containerClassName='pagination'
                activeClassName='active'/>
        </div>
    );
}

export default Pagination;

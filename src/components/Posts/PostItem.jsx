import React from 'react';
import './PostItem.css';

const PostItem = ({title, body}) => {
    return (
        <div className='post-container'>
            <p>{title}</p>
            <div>{body}</div>
        </div>
    );
}

export default PostItem;

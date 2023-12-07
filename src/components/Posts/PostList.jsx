import axios from 'axios';
import React, { useEffect } from 'react';
import PostItem from './PostItem';
import { useState} from 'react';
import Pagination from './Pagination';

const PostList = () => {
    const ITEMS_PER_PAGE = 3;
    const [post, setPost] = useState([]);

    const getPosts = async () => {
        try{
            const response = await axios("https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10");
            setPost(response.data);
        }catch(err){
           console.log('Error fetching post', err.message);
        }
    }

    useEffect(() => {
      getPosts();
    }, []);

    return (
        <div>
            {/* {post.map((item) => <PostItem title={item.title} body={item.body} key={item.id}/>)} */}
            <Pagination items={post} itemsPerPage={ ITEMS_PER_PAGE }/>
        </div>
    );
}

export default PostList;

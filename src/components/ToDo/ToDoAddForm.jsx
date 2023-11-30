import { nanoid } from 'nanoid';
import React, { useState } from 'react';

const ToDoAddForms = ({addTask}) => {
    const [title, setTitle] = useState('');
    const [error, setError] = useState(null);

    const submitHandler = (e) =>{
       e.preventDefault();

       if(title.length === 0){
         setError('Title is required');
         return;
       }

       alert(1);
       addTask({
         id: nanoid(),
         title: title,
         done: false
       });
       setTitle('');
       setError(null);
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                <button>add</button>
{/* 
              //{error ? <div>{error}</div> : ''} */}
               {error && <div>{error}</div>}

            </form>
        </div>
    );
}

export default ToDoAddForms;

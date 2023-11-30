import classNames from 'classnames';
import { useState } from 'react';


const ToDoItem = ({task, toggleTaskDone, deleteTask, editTask}) => {
   const [isEditing, setIsEditing] = useState(false);
   const [newTitle, setnewTitle] = useState(task.title);

   const submitHandler = (e) =>{
       e.preventDefault();
       editTask(task.id, newTitle);
       setIsEditing(false);
   };

   const editingTemplate = (
   <form className='task' onSubmit={submitHandler}>
    <input type="checkbox" 
        defaultChecked={task.done} 
        onChange={()=>toggleTaskDone(task.id)}
    />
    <div>
        <input type='text' value={newTitle} onChange={(e) => setnewTitle(e.target.value)}/>
        <button>save</button>
        <button onClick={() => setIsEditing(false)}>cancel</button>
    </div>
    <button onClick={()=>deleteTask(task.id)}>X</button>
   </form>
   );

   const viewTemplate = (
   <div className='task'>
        <input type="checkbox" defaultChecked={task.done} onChange={()=>toggleTaskDone(task.id)}/>
        {/* <span className={ task.done && 'done'} */}
        <span className={classNames({done: task.done})}
              onClick={()=> setIsEditing(true)}>{task.title}</span>
        <button onClick={()=>deleteTask(task.id)}>X</button>
   </div>);

    return (
       isEditing ? editingTemplate : viewTemplate
    );
}

export default ToDoItem;


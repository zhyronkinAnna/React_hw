//import React from 'react';
import './ToDoList.css';

import React, {useState } from "react";

import ToDoAddForm from './ToDoAddForm';
import ToDoFilter from './ToDoFilter';
import ToDoItem from './ToDoItem';

let items = [
    {
      id: 1,
      title: "Eat",
      done: true,
    },
    {
      id: 2,
      title: "Work",
      done: true,
    },
    {
      id: 3,
      title: "Sport",
      done: false,
    },
  ];

const ToDoList = () => {
  let [toDoItems, settoDoItems] = useState(items);

  const addTask = (todoItem) => {
    const newItems = [...toDoItems, todoItem];
    settoDoItems(newItems);
  }

  const toggleTaskDone = (id) =>{
    const newItems = toDoItems.map(item => {
      if(item.id == id){
        return {...item, done: !item.done}  
      }
      return item;
    });
    settoDoItems(newItems);
  }

  const deleteTask = (id) =>{
    const newTasks = toDoItems.filter(item => item.id != id);
    settoDoItems(newTasks);
  }

  const editTask = (id, title) =>{
    const newTask = toDoItems.map(item =>{
      if(item.id === id){
        return {...item, title: title}
      }
      return item;
    });
    settoDoItems(newTask);
  }
    return (
        <div className='todo-list'>
            <h1>ToDo List</h1>
            <ToDoAddForm addTask={addTask}/>
            <div>
                <ToDoFilter/>
                <div className='list'>
                  {toDoItems.map((item) => <ToDoItem title={item.title} task={item} key={item.id} 
                  toggleTaskDone={toggleTaskDone} deleteTask={deleteTask} editTask={editTask} />)}
                </div>
            </div>
        </div>
    );
}

export default ToDoList;

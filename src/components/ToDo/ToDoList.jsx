//import React from 'react';
import './ToDoList.css';

import React, {useState } from "react";
import { useEffect } from 'react';

import ToDoAddForm from './ToDoAddForm';
import ToDoFilter from './ToDoFilter';
import ToDoItem from './ToDoItem';

// let items = [
//     {
//       id: 1,
//       title: "Eat",
//       done: true,
//     },
//     {
//       id: 2,
//       title: "Work",
//       done: true,
//     },
//     {
//       id: 3,
//       title: "Sport",
//       done: false,
//     },
//   ];

const ToDoList = () => {
  const items = JSON.parse(localStorage.getItem("items")) || [];
  const [toDoItems, settoDoItems] = useState(items);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(toDoItems));
  }, [toDoItems]);

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

  const FILTER_MAP = {
    All : ()=> true,
    Done: (task) => task.done,
    ToDo: (task) => !task.done
  };

    return (
        <div className='todo-list'>
            <h1>ToDo List</h1>
            <ToDoAddForm addTask={addTask}/>
            <div>
                <ToDoFilter FILTER_MAP={FILTER_MAP} setFilter={setFilter} filter={filter}/>
                <div className='list'>
                  {toDoItems.filter(FILTER_MAP[filter]).map((item) =>
                  <ToDoItem title={item.title} task={item} key={item.id} 
                  toggleTaskDone={toggleTaskDone} deleteTask={deleteTask} editTask={editTask} />)}
                </div>
            </div>
        </div>
    );
}

export default ToDoList;

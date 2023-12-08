import './App.css';
import ToDoList from './components/ToDo/ToDoList';
import MovieList from './components/Movies/MovieList';
import Counter from './components/Counter/Counter';
import Header from './components/Header/Header'; 

import { useState } from 'react';

import E1 from './experiments/e1';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import UserList from './components/User/UserList';
import UserInfo from './components/User/UserInfo';
import PostList from './components/Posts/PostList';
import ThemeContext from './context/ThemeContext';
import ThemeProvider from './providers/ThemeProvider';

function App() {
 

  return (
    <ThemeProvider>
       <Header/>
       <Routes>
         <Route path="/" element={<ToDoList/>}/>
         <Route path="/counter" element={<Counter/>} />
         <Route path="/movieList" element={<MovieList/>} />

         <Route path="/userList" element={<UserList/>}>
             <Route path=":id" element={<UserInfo/>} />
          </Route>
         <Route path="/posts" element={<PostList/>} />
        
       </Routes>

      {/* <ToDoList/>
      <Counter/>
      {/* <E1/> */}
      {/* <MovieList/> */}
    </ThemeProvider>
  );
}

export default App;

import './App.css';
import ToDoList from './components/ToDo/ToDoList';
import MovieList from './components/Movies/MovieList';
import Counter from './components/Counter/Counter';
import Header from './components/Header/Header'; 

import E1 from './experiments/e1';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import UserList from './components/User/UserList';
import UserInfo from './components/User/UserInfo';
import PostList from './components/Posts/PostList';

function App() {
  return (
    <>
       <Header/>
       <Routes>
         <Route path="/" element={<ToDoList/>}/>
         <Route path="/counter" element={<Counter/>} />
         <Route path="/movieList" element={<MovieList/>} />
         <Route path="/userList" element={<UserList/>} />
         <Route path="/posts" element={<PostList/>} />
         <Route path="/user/:id" element={<UserInfo/>} />
       </Routes>

      {/* <ToDoList/>
      <Counter/>
      {/* <E1/> */}
      {/* <MovieList/> */}
    </>
  );
}

export default App;

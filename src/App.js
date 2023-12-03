import './App.css';
import ToDoList from './components/ToDo/ToDoList';
import MovieList from './components/Movies/MovieList';
import Counter from './components/Counter/Counter';
import Header from './components/Header/Header'; 
// todo: replace header

import E1 from './experiments/e1';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import UserList from './components/User/UserList';

function App() {
  return (
    <>
       <Header/>
       <Routes>
         <Route path="/" element={<ToDoList/>}/>
         <Route path="/counter" element={<Counter/>} />
         <Route path="/movieList" element={<MovieList/>} />
         <Route path="/userList" element={<UserList/>} />
       </Routes>

      {/* <ToDoList/>
      <Counter/>
      {/* <E1/> */}
      {/* <MovieList/> */}
    </>
  );
}

export default App;

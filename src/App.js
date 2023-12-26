import './App.css';
import ToDoList from './components/ToDo/ToDoList';
import MovieList from './components/Movies/MovieList';
import Counter from './components/Counter/Counter';
import Header from './components/Header/Header'; 
import Mail from './components/Contacts/Mail';

import E1 from './experiments/e1';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import UserList from './components/User/UserList';
import UserInfo from './components/User/UserInfo';
import PostList from './components/Posts/PostList';
import ThemeProvider from './providers/ThemeProvider';
import FavoritesList from './components/Favorites/FavoritesList';
import SavedMoviesProvider from './providers/SavedMoviesProvider';
import CallMe from './components/CallMe/CallMe';
import Stepper from './components/Stepper/Steps';

function App() {
 
  return (
    <ThemeProvider>
      <SavedMoviesProvider>
       <Header/>
       <Routes>
         <Route path="/" element={<ToDoList/>}/>
         <Route path="/about-us" element={<Mail/>}/>
         <Route path="/counter" element={<Counter/>} />
         <Route path="/movieList" element={<MovieList/>} />
         <Route path="/callme" element={<CallMe/>} />
         <Route path="/userList" element={<UserList/>}>
             <Route path=":id" element={<UserInfo/>} />
          </Route>
          <Route path="/stepper" element={<Stepper/>}/>
         <Route path="/posts" element={<PostList/>} />
         <Route path="/favorites" element={<FavoritesList/>}/>
       </Routes>

      {/* <ToDoList/>
      <Counter/>
      {/* <E1/> */}
      {/* <MovieList/> */}
      </SavedMoviesProvider>
    </ThemeProvider>
  );
}

export default App;

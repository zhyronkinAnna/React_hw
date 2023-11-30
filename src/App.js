import './App.css';
import ToDoList from './components/ToDo/ToDoList';
import MovieList from './components/Movies/MovieList';
import Counter from './components/Counter/Counter';

import E1 from './expiriments/e1';

function App() {
  return (
    <>
      <ToDoList/>
      <Counter/>
      {/* <E1/> */}
      <MovieList/>
    </>
  );
}

export default App;

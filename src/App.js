import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import MovieList from './MovieList';
import Nav from './Nav';
import {MovieProvider} from './MovieContext';
import AddMovie from './AddMovie';


function App() {
  return (
  <MovieProvider>
     <div className="App">
     <Nav/><br></br>
     <AddMovie/> <hr></hr>
     <MovieList/>
    </div>

  </MovieProvider>
   
  );
}

export default App;

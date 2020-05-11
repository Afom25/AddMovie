import React, {useContext} from 'react';
import {MovieContext} from './MovieContext';

const Nav = () => {

    const [movies,setMovies]= useContext(MovieContext);
   
    return (
        <div>
<nav class="navbar navbar-expand-lg navbar-light bg-info">
  <a class="navbar-brand" href="#">Home</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
     
     
      <li class="nav-item">
        <a class="nav-link" href="#"><h5> List of movies:{movies.length}</h5></a>
      </li>
      
    </ul>
  </div>
</nav>

   </div>
    );
}
     
        

export default Nav;
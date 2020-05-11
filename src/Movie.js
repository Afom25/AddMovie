import React from 'react';

const Movie = ({name,price}) => {

  
    return (
        <div className='container text-center'>
           <h4>{name}</h4>
           <p><button type="button" class="btn btn-primary btn-sm">Price</button> : {price}</p> <hr></hr>
   </div>
    );
}
     
        

export default Movie;
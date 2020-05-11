import React , {useState,useContext} from 'react';

import {MovieContext} from './MovieContext';

const AddMovie = () => {

    const [name,setName] = useState('');
    const[price,setPrice]= useState('');
    const [movies, setMovies] = useContext(MovieContext);

    const updateName = (e)=> {
        setName(e.target.value);
    }
    const updatePrice = (e)=> {
        setPrice(e.target.value);
    }
    const addMovie = e => {
        e.preventDefault();
        setMovies(prevmovies =>[...prevmovies , {name:name , price:price}])
       
    }
    return (
        <div className='container text-center'>
            <form onSubmit ={addMovie}>
            <input type='text' name='name'value={name} onChange={updateName}/><br></br>
            <input type= 'text' name='price' value={price} onChange={updatePrice}/><br></br>
            <button >Submit</button>
        </form>
        </div>
        

    )
}

export default AddMovie;
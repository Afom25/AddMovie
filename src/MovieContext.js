import React , {useState, createContext} from 'react';

export const MovieContext = createContext();


export const MovieProvider = (props) => {
    const [movies,setMovies] = useState([
        {
            name : 'ወዲ ሹቅ 5',
            price: ' 40',
            id:23124
        },
        {
            name: 'ካምብያ',
            price:'30',
            id:23344
            
        },
        {
            name: 'ጆርጆ',
            price:'25',
            id:23345
        },
       
    ]);



return (
    <MovieContext.Provider value={[movies,setMovies]}>
        {props.children}
    </MovieContext.Provider>
);

}

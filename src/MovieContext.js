import React , {useState, createContext} from 'react';

export const MovieContext = createContext();


export const MovieProvider = (props) => {
    const [movies,setMovies] = useState([
        {
            name : 'ወዲ ሹቅ 5',
            price: ' 10',
            id:23124
        },
        {
            name: 'ካምብያ',
            price:'20',
            id:23345
            
        },
        {
            name: 'ጆርጆ',
            price:'20',
            id:23345
        },
        {
            name: 'ሻሎም',
            price:'20',
            id:23345

        }
    ]);



return (
    <MovieContext.Provider value={[movies,setMovies]}>
        {props.children}
    </MovieContext.Provider>
);

}

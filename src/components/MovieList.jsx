import { useState, useEffect } from 'react';
import Movie from './Movie';



const API_URL = "https://www.omdbapi.com/?apikey=489ccad7";

const MovieList = () => {
    const [movies, setMovies ] = useState([]);
    const [searchTerm, SetSearchTerm] = useState('');
    
        const serchMovies = async (title) => {
            const response = await fetch(`${API_URL}&s=${title}`);
            const data = await response.json();
            setMovies(data.Search);
        }
    
        useEffect(() => {
            serchMovies('Batman');
        }, []);
    
    return (
        <div className="container">
            <div className="row justify-content-center pt-2">
                <div className="col-11 col-sm-8 col-md-6 ">
                    <div class="input-group mb-3 pt-3 ">
                        <input type="text" class="form-control" placeholder="Type Movie Name" aria-label="Movie Name" aria-describedby="button-addon2"
                           value={searchTerm}
                           onChange={(e) => { SetSearchTerm(e.target.value) }}
                           
                        />
                        <button class="btn btn-primary" type="button" id="button-addon2"
                              alt='search'
                              onClick={() => serchMovies(searchTerm)}>
                         <i class="bi bi-search"></i> Search
                        </button>
                    </div>
                </div>
            </div>

            { movies?.length > 0
            ? (
             <div className='row justify-content-center'>
            {movies.map((movie)=>(
                <Movie movie={movie}/>
            ))}    
            
            </div>
            ) : (
            <div className='empty'><h2>There are no matches. Try the original title of the movie.</h2></div>
            )}


       
        
        </div>
    )
}

export default MovieList
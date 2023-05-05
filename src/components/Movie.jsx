import React from "react";
import { Link } from 'react-router-dom';

const Movie = ({ movie }) => {
    return (

        <div class="card col-8 col-sm-6 col-lg-4 col-xl-3 m-3 bg-black">
            <img class="img-fluid pt-3" src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt="{movie.Title}" />
            <div class="card-body">
                <h5 class="card-title">{movie.Title}</h5>
                <p class="card-text">{movie.Genre}</p>
                <p class="card-text">{movie.Year} </p>
                <Link class="btn btn-success" to="movieinfo" state={{ id: movie.imdbID }}  >
                    View details
                </Link>
            </div>
        </div>
    )
}
export default Movie;
import React, { useState, useEffect } from 'react';
import { Menu, Footer } from './../components';
import { Link, useLocation, Navigate } from "react-router-dom";


const API_URL = "https://www.omdbapi.com/?apikey=489ccad7";
const MovieInfo = () => {


  let { state } = useLocation();
  const id = state?.id;

  const [movie, setMovie] = useState(null);

  useEffect(() => {

    const fetchMovie = async () => {
      try {
        const response = await fetch(`${API_URL}&i=${id}`);
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovie();
  }, [id]);


  if (!state) {
    return <Navigate to="/" replace={true} />

  }

  if (!movie) {
    return <div className="spinner">
      <div class="sk-cube-grid">
        <div class="sk-cube sk-cube1"></div>
        <div class="sk-cube sk-cube2"></div>
        <div class="sk-cube sk-cube3"></div>
        <div class="sk-cube sk-cube4"></div>
        <div class="sk-cube sk-cube5"></div>
        <div class="sk-cube sk-cube6"></div>
        <div class="sk-cube sk-cube7"></div>
        <div class="sk-cube sk-cube8"></div>
        <div class="sk-cube sk-cube9"></div>
      </div></div>;

  }

  return (
    <>
      <Menu />
      <div className="container my-5 py-3">
        <div className="row">
          <div className="col-12 col-sm-6 text-center"><img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x500'} alt={movie.Title} className="img-fluid" /></div>
          <div className="col-12 col-sm-6">
            <div className="p-4">
              <ul className="list-group list-group-flush">
                <li className="list-group-item pt-3"> <h1 className="fs-3">{movie.Title}</h1></li>
                <li className="list-group-item pt-4"><p> {movie.Plot}</p></li>
                <li className="list-group-item">Director <a className="text-primary fw-bold text-black" target="_blank" rel="noreferrer" href={`https://www.google.com/search?q=${movie.Director}`}> {movie.Director} <i class="bi bi-arrow-right-circle"></i> </a></li>
                <li className="list-group-item">Actors {movie.Actors}</li>
                <li className="list-group-item">Year {movie.Year}</li>
                <li className="list-group-item">Genre {movie.Genre}</li>
                <li className="list-group-item">Runtime {movie.Runtime}</li>
                <li className="list-group-item">Language {movie.Language} </li>
                <li className="list-group-item">Awards {movie.Awards}</li>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item li-color"><i class="bi bi-star-fill"></i> Ranking  </li>
                  {movie.Ratings.map((ranking, index) => (
                    <li className="list-group-item" key={index}>  {ranking.Source} {ranking.Value}  </li>
                  ))}
                </ul>
                <li className="list-group-item li-color"><i class="bi bi-piggy-bank-fill"></i> BoxOffice    </li>
                {movie.BoxOffice !== 'N/A' ? (
                  <li className="list-group-item mb-3">
                    <span className="p-2  my-1"> {movie.BoxOffice}  </span></li>
                ) : (
                  <li className="list-group-item mb-3"> I don't know!</li>
                )}
              </ul>
              <Link class="btn btn-success mt-5" to="/" value="Go Back" > Go Home </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MovieInfo
import React from "react";
import { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import Cradskeleton from "./Cradskeleton";

function CarouselBanner() {
  const [popularMovies, setPopularmovies] = useState([]);
  const [isloading, setIsloading] = useState(true);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=0fd57aab3a8b3851995768fb5a7cfc6c&language=en-IN"
    )
      .then((res) => res.json())
      .then((data) => {
        setPopularmovies(data.results);
        setIsloading(false);
      });
  }, []);

  return (
    <div>
      <Carousel className="container-fluid">
        {isloading && <Cradskeleton height="60vh" cards={1} />}
        {popularMovies.map((movie) => (
          <Carousel.Item>
            <Link to={`/movie/${movie.id}`}>
              <img
                className="d-block w-100"
                style={{ height: "60vh", objectFit: "fill" }}
                src={`https://image.tmdb.org/t/p/original/${
                  movie && movie.backdrop_path
                }`}
                alt="movie poster"
              />
              <Carousel.Caption
                style={{
                  backgroundImage: "linear-gradient(rgb(0,0,0,0),rgb(0,0,0,1))",
                  opacity: "1",
                }}
              >
                <h3 style={{ fontWeight: "900" }}>
                  {movie ? movie.original_title : ""}
                </h3>
                <p>{movie ? movie.release_date : ""}</p>
                <span>
                  {movie ? movie.vote_average : ""}
                  <i className="fas fa-star"></i>
                </span>
                <p>{movie ? movie.overview.slice(0, 100) + "..." : ""}</p>
              </Carousel.Caption>
            </Link>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselBanner;

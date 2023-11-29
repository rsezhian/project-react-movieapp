import React from "react";
import { Link } from "react-router-dom";

function Card({ movie }) {
  return (
    <div>
      <Link to={`/movie/${movie.id}`}>
        <div className="card m-1">
          <img
            src={`http://image.tmdb.org/t/p/original/${
              movie && movie.poster_path
            }`}
            className="card-img-top"
            alt="movies poster"
            style={{ width: "200px", height: "200px" }}
          />
        </div>
      </Link>
    </div>
  );
}

export default Card;

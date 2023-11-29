import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import IndividualCard from "./IndividualCard";
import Cradskeleton from "./Cradskeleton";

function MovieList() {
  const [movieList, setMovieList] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const { movieid } = useParams();

  useEffect(() => {
    getData();
  }, [movieid]);

  const getData = async () => {
    await fetch(
      `https://api.themoviedb.org/3/movie/${movieid}?api_key=0fd57aab3a8b3851995768fb5a7cfc6c&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovieList(data);
        setIsloading(false);
      });
  };

  //
  return (
    <div>
      {isloading && <Cradskeleton width={300} height={700} />}
      <IndividualCard
        image={movieList.backdrop_path}
        title={movieList.title}
        desc={movieList.overview}
        released={movieList.released_date}
        link={movieList.homepage}
        genres_array={movieList.genres}
      />
    </div>
  );
}

export default MovieList;

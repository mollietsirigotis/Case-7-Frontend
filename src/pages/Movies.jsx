import { useEffect, useState } from "react";
import MovieGrid from "../components/MovieGrid";

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://cinema-api.henrybergstrom.com/api/v1/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <>
      <MovieGrid movies={movies} />
    </>
  );
}

export default Movies;

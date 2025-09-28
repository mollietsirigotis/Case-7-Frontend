import { useEffect, useState } from "react";
import MovieGrid from "../components/MovieGrid";

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://cinema-api.henrybergstrom.com/api/v1/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  if (movies.length === 0) {
    return <div className="text-white">Loading...</div>;
  }
  return (
    <div className="flex-1 text-white flex flex-col items-center justify-center">
      <h1 className="text-white font-bold text-3xl mb-6">NOW SHOWING</h1>
      <MovieGrid movies={movies} />
    </div>
  );
}

export default Movies;

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function MovieShows() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  // Fetch specific movie info based on the ID from the URL
  useEffect(() => {
    fetch(`https://cinema-api.henrybergstrom.com/api/v1/movies/${id}`)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [id]);

  return (
    <div className="min-h-screen text-white flex flex-col items-center">
      {/* Movie info */}
      {movie && (
        <div className="w-full flex flex-row justify-center items-center gap-6 mb-8 bg-black rounded-2xl p-10">
          <img
            src={movie.posterUrl}
            alt={movie.title}
            className="h-100 object-cover"
          />
          <div className="text-left max-w-md">
            <h2 className="text-2xl font-bold">{movie.title.toUpperCase()}</h2>
            <p className="text-gray-400 text-sm mt-2">{movie.description}</p>
            <p className="text-xs text-gray-400 mt-1">
              Directed by: {movie.director}
            </p>
            <p className="text-xs text-gray-400">
              Duration: {movie.duration} min
            </p>
            <p className="text-xs text-gray-400">
              Released: {new Date(movie.releaseDate).getFullYear()}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieShows;
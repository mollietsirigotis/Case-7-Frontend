import { useNavigate } from "react-router-dom";

function MovieGrid({ movies }) {
  const navigate = useNavigate();
  return (
    <div className="bg-transparent p-2 mt-8 text-center">
      {/* Movie grid */}
      <div className="movie-grid grid grid-cols-3 gap-4">
        {movies.map((movie) => (
          // Movie card
          <div
            key={movie._id}
            className="movie-card rounded-2xl p-4 flex text-start flex-row justify-center gap-4 text-white bg-black"
          >
            {/* Movie card image */}
            <div className="flex-1">
              <img
                src={movie.posterUrl}
                alt={movie.title}
                className="object-contain"
              />
            </div>
            {/* Movie card text */}
            <div className="flex flex-1 flex-col justify-between">
              <div className="">
                <h2 className="text-l font-bold mb-4">
                  {movie.title.toUpperCase()}
                </h2>
                <p className="movie-info text-xs text-gray-400">
                  {movie.genre} ·{" "}
                  {new Date(movie.releaseDate).toLocaleDateString("sv-SE", {
                    year: "numeric",
                  })}
                </p>
                <p className="movie-description text-xs mt-1">
                  {movie.description}
                </p>
                <p className="movie-info text-xs text-gray-400">
                  Director: {movie.director} · {movie.duration} min
                </p>
              </div>
              <div className="flex mb-4">
                {/* To the specific booking page for the movie you clicked on */}
                <button
                  onClick={() => {
                    navigate(`/movies/${movie._id}/shows`);
                    window.scrollTo(0, 0);
                  }}
                  className="buy-tickets-button bg-red-500 text-black font-bold p-2 rounded"
                >
                  VIEW SHOWS
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieGrid;

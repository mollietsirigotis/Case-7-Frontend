function MovieGrid({ movies }) {
  return (
    <div className="bg-transparent p-2 text-center mt-10">
      <h2 className="text-2xl font-bold mb-4">NOW SHOWING</h2>

      {/* Movie grid */}

      <div className="movie-grid grid grid-cols-3 gap-4">
        {movies.map((movie, index) => (
          <div
            key={index}
            className="movie-card rounded-2xl p-4 flex flex-row gap-2 text-white bg-black"
          >
            {/* Movie card image */}
            <div className="flex-1">
              <img
                src={movie.posterUrl}
                alt={movie.title}
                className="h-80 object-cover"
              />
            </div>
            {/* Movie card text */}
            <div className="flex flex-1 p-2 flex-col justify-between">
              <div className="">
                <h2 className="text-l font-bold">{movie.title}</h2>
                <p className="movie-info text-xs text-gray-400">
                  {movie.genre} · {movie.releaseDate}
                </p>
                <p className="movie-description text-xs pt-2">{movie.description}</p>
                <p className="movie-info text-xs text-gray-400">
                  Director: {movie.director} · {movie.duration} min
                </p>
              </div>
              <div>
                {/* To the specific booking page for the movie you clicked on */}
                <button className="mb-6 bg-red-500 text-black font-bold p-2 rounded">
                  BUY TICKETS
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* To the Calendar */}
      <button className="mt-10 bg-white text-black font-bold py-2 px-4 rounded">
        VIEW SHOWS
      </button>
    </div>
  );
}

export default MovieGrid;

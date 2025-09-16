import icon from "../assets/star-icon.png";

function Main({ movies }) {
  return (

    <main className="flex-1 pt-10 text-white flex flex-col items-center justify-center">
      <div className="bg-transparent p-4 max-w-3xl text-center">
        <h1 className="text-3xl font-bold mb-4">WELCOME TO ASTERI CINEMA</h1>
        <p className="text-lg">
          Experience the magic of the movies under the stars at Asteri Cinema.
          We offer a unique outdoor cinema experience with a stunning view of
          the night sky. Enjoy the latest blockbusters, timeless classics, and
          indie gems in a cozy and inviting atmosphere.
        </p>
        {/* Our movies button */}
        <button className="mt-6 mb-6 bg-white text-black font-bold py-2 px-4 rounded">
          OUR MOVIES
        </button>
      </div>

      <img src={icon} alt="Asteri Cinema Icon" className="w-16" />

      <div className="bg-transparent p-4 text-center mt-10">
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
                  <p className="text-xs text-gray-400">
                    {movie.genre} · {movie.releaseDate}
                  </p>
                  <p className="text-xs pt-2">{movie.description}</p>
                  <p className="text-xs text-gray-400">
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
    </main>
  );
}

export default Main;

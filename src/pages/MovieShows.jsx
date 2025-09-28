import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function MovieShows() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [shows, setShows] = useState([]);
  const navigate = useNavigate();

  // Fetch movie details
  useEffect(() => {
    fetch(`https://cinema-api.henrybergstrom.com/api/v1/movies/${id}`)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [id]);

  useEffect(() => {
    fetch(`https://cinema-api.henrybergstrom.com/api/v1/shows?movie=${id}`)
      .then((res) => res.json())
      .then((data) => {
        // Show only shows for this movie
        const filtered = data.filter((show) => show.movie._id === id);
        setShows(filtered);
      });
  }, [id]);

  if (!movie) {
    return <div className="text-white">Loading...</div>;
  }
  if (!shows) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <div className="min-h-screen text-white flex flex-col items-center">
      {/* Film info */}

      <div className="movie-shows-info w-full flex flex-row justify-center items-center gap-6 mb-8 bg-black rounded-2xl p-12">
        <img
          src={movie.posterUrl}
          alt={movie.title}
          className="w-64 object-contain"
        />
        <div className="text-left max-w-md">
          <h2 className="text-2xl font-bold">{movie.title.toUpperCase()}</h2>
          <p className="text-xs text-gray-400 mt-1">
            Directed by: {movie.director} · {new Date(movie.releaseDate).getFullYear()}
          </p>
          <p className="text-gray-400 text-sm mt-2">{movie.description}</p>
          
          <p className="text-xs text-gray-400">
            {movie.duration} min
          </p>
        </div>
      </div>
      {/* Available Shows for movie */}
      {shows.length === 0 ? (
        <p>No shows available for this movie.</p>
      ) : (
        <div className="flex flex-col gap-4 rounded-3xl p-6 w-full items-center justify-center flex-wrap">
          <h1 className="text-3xl font-bold mb-6">AVAILABLE SHOWS</h1>
          <div className="flex flex-row gap-4 rounded-3xl p-6 w-full items-center justify-center flex-wrap">
            {shows.map((show) => (
              <div
                key={show._id}
                className="bg-black gap-1 rounded-3xl p-8 flex flex-col w-full max-w-sm"
              >
                <p>
                  Date:{" "}
                  {new Date(show.startTime).toLocaleString("sv-SE", {
                    month: "2-digit",
                    day: "2-digit",
                  })}{" "}
                </p>
                <p>
                  Starts at:{" "}
                  {new Date(show.startTime).toLocaleTimeString("sv-SE", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>

                <p>Salon: {show.roomNumber}</p>
                <p>Price: {show.pricePerSeat} SEK</p>
                <p className="text-gray-400">
                  Available seats: {show.availableSeats.length}
                </p>
                <button
                  onClick={() => {
                    navigate(`/booking/${show._id}`);
                    window.scrollTo(0, 0);
                  }}
                  className="buy-tickets-button mt-4 font-bold bg-red-500 text-black px-4 py-2 rounded"
                >
                  BUY TICKETS
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieShows;
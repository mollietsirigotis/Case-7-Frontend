import icon from "../assets/star-icon.png";
import { useEffect, useState } from "react";
import MovieGrid from "../components/MovieGrid";
import { useNavigate } from "react-router-dom";

function Home() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://cinema-api.henrybergstrom.com/api/v1/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

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
        <button
          onClick={() => navigate("/movies")}
          className="our-movies-button mt-6 mb-6 bg-white text-black font-bold py-2 px-4 rounded"
        >
          OUR MOVIES
        </button>
      </div>
      <img src={icon} alt="Asteri Cinema Icon" className="w-16" />
      <h2 className="font-bold text-2xl mt-12">NOW SHOWING</h2>

      <MovieGrid movies={movies} />
    </main>
  );
}

export default Home;
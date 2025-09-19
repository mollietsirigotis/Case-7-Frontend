import icon from "../assets/star-icon.png";
import { useEffect, useState } from "react";
import MovieGrid from "../components/MovieGrid";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://cinema-api.henrybergstrom.com/api/v1/movies")
      .then(res => res.json())
      .then(data => setMovies(data));
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
        <button className="mt-6 mb-6 bg-white text-black font-bold py-2 px-4 rounded">
          OUR MOVIES
        </button>
      </div>
      <img src={icon} alt="Asteri Cinema Icon" className="w-16" />

      <MovieGrid movies={movies} />

    </main>
  );
}

export default Home;
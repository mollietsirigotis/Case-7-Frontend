import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://cinema-api.henrybergstrom.com/api/v1/movies")
      .then(res => res.json())
      .then(data => setMovies(data))
  }, []);

  return (
    <>
      <div className="flex min-h-screen flex-col bg-[url('./assets/star-sky2.jpg')] bg-cover bg-center">
        <Header />
        <Main movies={movies} />
        <Footer />
      </div>
    </>
  );
}

export default App;
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Movies from "./pages/Movies";
import Calendar from "./pages/Calendar";
import MovieShows from "./pages/MovieShows";

function App() {
 
  return (
    <Router>
      <div className="flex min-h-screen flex-col bg-[url('./assets/star-sky2.jpg')] bg-cover bg-center bg-fixed">
        <Header />

        <Routes>
          {/* Startpage */}

          <Route path="/" element={<Home />} />

          {/* About page */}

          <Route path="/about" element={<About />} />

          {/* Page Not Found */}
          <Route path="*" element={<div className="flex-1 flex items-center justify-center text-white text-3xl">
            PAGE NOT FOUND
          </div>} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/movies/:id/shows" element={<MovieShows />} />


        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
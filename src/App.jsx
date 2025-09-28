import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Movies from "./pages/Movies";
// import Calendar from "./pages/Calendar";
import MovieShows from "./pages/MovieShows";
import BookingForm from "./pages/BookingForm";

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
          <Route
            path="*"
            element={
              <div className="flex-1 flex flex-col items-center justify-center text-white text-3xl">
                <h1>PAGE NOT FOUND</h1>
                <br />
                <p className="text-lg">
                  Navigate back to:{" "}
                  <a className="text-red-500 hover:underline" href="/">
                    Start Page
                  </a>
                </p>
              </div>
            }
          />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id/shows" element={<MovieShows />} />
          <Route path="/booking/:showId" element={<BookingForm />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
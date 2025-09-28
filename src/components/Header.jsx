import logo from "../assets/asteri-cinema-logo2.png";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="bg-transparent text-white p-4 flex flex-row items-center gap-4 justify-between">
      <img src={logo} alt="Asteri Cinema Logo" className="w-86" />

      <nav className="flex flex-row gap-8 text-lg font-bold">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active-link" : "link")}
        >
          HOME
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) => (isActive ? "active-link" : "link")}
        >
          MOVIES
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active-link" : "link")}
        >
          ABOUT
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;

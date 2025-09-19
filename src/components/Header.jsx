import logo from '../assets/asteri-cinema-logo2.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-transparent text-white p-4 flex flex-row items-center gap-4 justify-between">
      <img src={logo} alt="Asteri Cinema Logo" className="w-86"/>
      
      <nav className="flex flex-row gap-8 text-lg font-bold">
      <Link to="/">HOME</Link>
      <Link to="/about">ABOUT</Link>
      
      </nav>
    </header>
  );
}

export default Header;
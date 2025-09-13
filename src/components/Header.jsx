import logo from '../assets/asteri-cinema-logo2.png';

function Header() {
  return (
    <header className="bg-transparent text-white p-4 flex flex-row items-center gap-4 justify-between">
      <img src={logo} alt="Asteri Cinema Logo" className="w-74"/>
      {/* <h1>Asteri Cinema</h1> */}
      <nav>
        <ul className="flex flex-row gap-8">
          <li><a href="/" className="hover:underline">HOME</a></li>
          <li><a href="" className="hover:underline">MOVIES</a></li>
          <li><a href="" className="hover:underline">BUY TICKETS</a></li>
          <li><a href="" className="hover:underline">ABOUT</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
import { Link } from 'react-router-dom';
import logo from '../assets/shared/logo.svg';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <img src={logo} alt="logo" className="nav-logo" />
        <div className="nav-line"></div>
        <ul className="nav-links">
          <li className="text-preset-8">
            <Link to="/">
              <span className="u-bold">00</span> Home
            </Link>
          </li>
          <li className="text-preset-8">
            <Link to="/destination">
              <span className="u-bold">01</span> Destination
            </Link>
          </li>
          <li className="text-preset-8">
            <Link to="/crew">
              <span className="u-bold">03</span> Crew
            </Link>
          </li>
          <li className="text-preset-8">
            <Link to="/technology">
              <span className="u-bold">04</span> Technology
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

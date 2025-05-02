import { Link } from 'react-router-dom';
import logo from '../assets/shared/logo.svg';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <img src={logo} alt="logo" className="nav-logo" />
        <div className="nav-line"></div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/destination">Destination</Link>
          </li>
          <li>
            <Link to="/crew">Crew</Link>
          </li>
          <li>
            <Link to="/technology">Technology</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

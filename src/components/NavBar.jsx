import { Link } from 'react-router-dom';
import logo from '../assets/shared/logo.svg';

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="nav-logo" />
      <div className="nav-line"></div>
      <ul className="nav-links">
        <li>
          <Link to="/"></Link>
        </li>
        <li>
          <Link to="/destination"></Link>
        </li>
        <li>
          <Link to="/crew"></Link>
        </li>
        <li>
          <Link to="/technology"></Link>
        </li>
      </ul>
    </nav>
  );
}

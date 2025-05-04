import { Link } from 'react-router-dom';

export default function Navbar({ page }: {page: string}) {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <img src="/shared/logo.svg" alt="logo" className="nav-logo" />
        <div className="nav-line"></div>
        <ul className="nav-links">
          <li className="text-preset-8">
            <Link to="/" className={page === 'home' ? 'active' : ''}>
              <span className="u-bold">00</span> Home
            </Link>
          </li>
          <li className="text-preset-8">
            <Link to="/destination" className={page === 'destination' ? 'active' : ''}>
              <span className="u-bold">01</span> Destination
            </Link>
          </li>
          <li className="text-preset-8">
            <Link to="/crew" className={page === 'crew' ? 'active' : ''}>
              <span className="u-bold">03</span> Crew
            </Link>
          </li>
          <li className="text-preset-8">
            <Link to="/technology" className={page === 'technology' ? 'active' : ''}>
              <span className="u-bold">04</span> Technology
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

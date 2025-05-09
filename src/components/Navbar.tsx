import { Link } from 'react-router-dom';

interface NavbarProps {
  page: string;
}

const NAV_LINKS = [
  { path: '/', label: 'Home', code: '00', key: 'home' },
  { path: '/destination', label: 'Destination', code: '01', key: 'destination' },
  { path: '/crew', label: 'Crew', code: '03', key: 'crew' },
  { path: '/technology', label: 'Technology', code: '04', key: 'technology' },
];

export default function Navbar({ page }: NavbarProps) {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link to="/" aria-label="Home" className="navbar__logo-link">
          <img
            src="/shared/logo.svg"
            alt="Space Tourism Logo"
            className="navbar__logo"
          />
        </Link>

        <div className="navbar__divider" />

        <ul className="navbar__menu">
          {NAV_LINKS.map(({ path, label, code, key }) => (
            <li key={key} className="navbar__menu-item">
              <Link
                to={path}
                className={`navbar__link ${page === key ? 'navbar__link--active' : ''}`}
              >
                <span className="navbar__link-code">{code}</span> {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

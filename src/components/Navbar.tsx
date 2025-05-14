import { useState } from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  page: string;
}

const NAV_LINKS = [
  { path: '/', label: 'Home', code: '00', key: 'home' },
  {
    path: '/destination',
    label: 'Destination',
    code: '01',
    key: 'destination'
  },
  { path: '/crew', label: 'Crew', code: '03', key: 'crew' },
  { path: '/technology', label: 'Technology', code: '04', key: 'technology' }
];

export default function Navbar({ page }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar__container">
          <Link to="/" aria-label="Home" className="navbar__logo-link">
            <img
              src="/shared/logo.svg"
              alt="Space Tourism Logo"
              className="navbar__logo"
            />
          </Link>

          <div className="navbar__divider"></div>

          <ul
            className={`navbar__menu text-blue-300 ${isOpen ? 'navbar__menu--open' : ''}`}
          >
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
      <nav className="navbar__mobile">
        <div className="navbar__mobile-container">
          <Link to="/" aria-label="Home" className="navbar__mobile-logo-link">
            <img
              src="/shared/logo.svg"
              alt="Space Tourism Logo"
              className="navbar__mobile-logo"
            />
          </Link>

          <button
            className="navbar__hamburger"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <img
              src={`${isOpen ? '/shared/icon-close.svg' : '/shared/icon-hamburger.svg'}`}
              alt="hamburger icon"
            />
          </button>

          <ul
            className={`navbar__mobile-menu ${isOpen ? 'navbar__menu-mobile--open' : ''}`}
          >
            {NAV_LINKS.map(({ path, label, code, key }) => (
              <li key={key} className="navbar__mobile-menu-item">
                <Link
                  to={path}
                  className={`navbar__mobile-link ${page === key ? 'navbar__mobile-link--active' : ''}`}
                  // onClick={() => setIsOpen(false)}
                >
                  <span className="navbar__mobile-link-code">{code}</span>{' '}
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}

import { NavLink } from 'react-router-dom';
import '../components/header.css';
import styled from 'styled-components';
import logo from '../images/svtdh-logo.png';
import logoWp from '../images/svtdh-logo.png?as=webp';
import { useTranslation } from 'react-i18next';
import Languages from './Languages';

const NavBar = styled.nav`
  background: #121212;
  -webkit-transition: 0.3s;
  transition: 0.3s;
`;

function Header() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <header id="header" className="header">
        <NavBar className="navbar navbar-expand-lg fixed-top">
          <div className="container">
            <NavLink
              to={`/?lng=${i18n.resolvedLanguage}`}
              className="navbar-brand logo"
            >
              <picture>
                <source
                  srcSet={logoWp}
                  type="image/webp"
                  width={102}
                  height={40}
                />
                <source
                  srcSet={logo}
                  type="image/png"
                  width={102}
                  height={40}
                />
                <img
                  src={logoWp}
                  alt={`SVTDH - ${t('protfolio')}`}
                  width={102}
                  height={40}
                  title={`SVTDH - ${t('protfolio')}`}
                />
              </picture>
            </NavLink>
            <button
              className="navbar-toggler ml-auto"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-expanded="false"
              aria-label={`SVTDH - ${t('protfolio')} button`}
            >
              <span>
                <i className="fa fa-bars"></i>
              </span>
            </button>
            <Languages />
            <div
              className="collapse navbar-collapse main-menu"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink
                    to={`/?lng=${i18n.resolvedLanguage}`}
                    className="nav-link"
                    alt="Homepage"
                  >
                    {t('home-link')}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to={`/projects?lng=${i18n.resolvedLanguage}`}
                    className="nav-link"
                    alt="Projects"
                  >
                    {t('projects-link')}
                  </NavLink>
                </li>
                <li className="d-none align-items-center ml-md-2 justify-content-center d-lg-flex">
                  <Languages />
                </li>
              </ul>
            </div>
          </div>
        </NavBar>
      </header>
    </>
  );
}

export default Header;

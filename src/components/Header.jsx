import { NavLink, useSearchParams, useLocation } from 'react-router-dom';
import '../components/header.css';
import styled from 'styled-components';
import logo from '../images/svtdh-logo.png';
import logoWp from '../images/svtdh-logo.png?as=webp';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

const NavBar = styled.nav`
  background: #121212;
  -webkit-transition: 0.3s;
  transition: 0.3s;
`;
const languages = [
  {
    code: 'en',
    nameLng: 'English',
    countryCode: 'gb',
  },
  {
    code: 'ua',
    nameLng: 'Ukraine',
    countryCode: 'ua',
  },
];

function Header() {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams(location.search);

  useEffect(() => {
    if (!location.search)
      setSearchParams(`?lng=${i18n.language}`, { replace: true });
  }, [location.search, i18n.language, setSearchParams]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setSearchParams(`?lng=${lng}`, { replace: true });
  };

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
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-expanded="false"
            >
              <span>
                <i className="fa fa-bars"></i>
              </span>
            </button>
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
                <li className="d-flex align-items-center ml-md-2 justify-content-center">
                  {languages.map(({ code, nameLng, countryCode }) => (
                    <button
                      className="lng"
                      onClick={() => changeLanguage(code)}
                      hidden={i18n.resolvedLanguage === code}
                      key={nameLng}
                      aria-label={`Language ${nameLng}`}
                    >
                      <span
                        className={`flag-icon flag-icon-${countryCode} mx-2`}
                      ></span>
                    </button>
                  ))}
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

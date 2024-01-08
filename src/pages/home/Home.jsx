import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import Typed from 'typed.js';
import './home.css';
import avatar from '../../images/avatar-done.png';

function Home() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Frontend Developer.'],
      typeSpeed: 100,
      loop: false,
      autoplay: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const { t, i18n } = useTranslation();
  return (
    <>
      <Helmet htmlAttributes={{ lang: i18n.resolvedLanguage }}>
        <title>SVTDH - {t('home-link')}</title>
        <meta name="description" content={t('homepage-description')} />
        <link rel="canonical" href={window.location.href} />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="hero-aria" id="home">
        <div className="container d-flex justify-content-center align-items-center h-100">
          <div className="hero-content">
            <h2 className="text-uppercase">{t('begin')}</h2>
            <h3 className="text-uppercase">
              <span className="typed" ref={el}></span>
            </h3>
            <p>{t("Frontend isn't the work.")}</p>
          </div>
        </div>
      </div>
      <section id="about" className="section-padding about-area bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center">
                <h2>{t('About Me')}</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div
                className="about-bg"
                style={{ backgroundImage: 'url(' + avatar + ')' }}
              >
                <div className="social-aria">
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.facebook.com/dmytro.svyatodukh"
                    alt="SVTDH - Facebook"
                    id="facebook"
                    aria-label="Dmitro Syatodukh - Facebook link"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.instagram.com/dmytro.svyatodukh"
                    alt="SVTDH - Instagram"
                    id="instagram"
                    aria-label="Dmitro Syatodukh - Instagram link"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/urbanlol"
                    alt="SVTDH - GitHub"
                    id="github"
                    aria-label="Dmitro Syatodukh - GitHub link"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content">
                <h2 className="mb-2">
                  {t('Hello, I am ')}
                  <span>{t('begin')}</span>
                </h2>
                <p>{t('hello')}</p>

                <h5>{t('My Skills')}</h5>
                <div
                  id="skills"
                  className="skill-area d-flex flex-wrap justify-content-sm-center justify-content-md-start justify-content-center"
                >
                  <div className="skillbar-title">
                    <span>
                      HTML 5 <i className="fab fa-html5"></i>
                    </span>
                  </div>
                  <div className="skillbar-title">
                    <span>
                      CSS3 <i className="fab fa-css3"></i>
                    </span>
                  </div>
                  <div className="skillbar-title">
                    <span>
                      JavaScript <i className="fab fa-js-square"></i>
                    </span>
                  </div>
                  <div className="skillbar-title">
                    <span>TypeScript</span>
                  </div>
                  <div className="skillbar-title">
                    <span>
                      React JS <i className="fab fa-react"></i>
                    </span>
                  </div>
                  <div className="skillbar-title">
                    <span>
                      GitHub <i className="fab fa-github"></i>
                    </span>
                  </div>
                  <div className="skillbar-title">
                    <span>
                      Wordpress <i className="fab fa-wordpress"></i>
                    </span>
                  </div>
                  <div className="skillbar-title">
                    <span>
                      Modx <i className="fab fa-modx"></i>
                    </span>
                  </div>
                  <div className="skillbar-title">
                    <span>Photoshop</span>
                  </div>
                  <div className="skillbar-title">
                    <span>Figma</span>
                  </div>
                  <div className="skillbar-title">
                    <span>Bootstrap</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;

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
      strings: ['Fronend Developer.'],
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
        <title>SVTDH - Homepage</title>
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
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.instagram.com/dmytro.svyatodukh"
                    alt="SVTDH - Instagram"
                    id="instagram"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/urbanlol"
                    alt="SVTDH - GitHub"
                    id="github"
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
                <div id="skills" className="skill-area d-flex flex-wrap justify-content-sm-center justify-content-md-start justify-content-center">
                  <div className="skillbar-title">
                    <span>html 5 <i className="fab fa-html5"></i></span>
                  </div>
                  <div className="skillbar-title">
                    <span>css3 <i className="fab fa-css3"></i></span>
                  </div>
                  <div className="skillbar-title">
                    <span>javascript <i className="fab fa-js-square"></i></span>
                  </div>
                  <div className="skillbar-title">
                    <span>react js <i className="fab fa-react"></i></span>
                  </div>
                  <div className="skillbar-title">
                    <span>github <i className="fab fa-github"></i></span>
                  </div>
                  <div className="skillbar-title">
                    <span>wordpress <i className="fab fa-wordpress"></i></span>
                  </div>
                  <div className="skillbar-title">
                    <span>modx <i className="fab fa-modx"></i></span>
                  </div>
                  <div className="skillbar-title">
                    <span>photoshop</span>
                  </div>
                  <div className="skillbar-title">
                    <span>figma</span>
                  </div>
                  <div className="skillbar-title">
                    <span>bootstrap</span>
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

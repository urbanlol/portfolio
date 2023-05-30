import { useState } from 'react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('..', { relative: 'path' });
    }, 5000);
  }, [navigate]);

  const { t, i18n } = useTranslation();

  let [seconds, setSeconds] = useState(5);

  useEffect(() => {
    let timeId = setInterval(() => {
      seconds--;
      setSeconds(seconds);
      if (seconds === 0) clearInterval(timeId);
    }, 1000);
  }, [seconds]);

  return (
    <div className="section-padding about-area bg-light text-center h-100vh">
      <Helmet htmlAttributes={{ lang: i18n.language }}>
        <title>SVTDH - 404</title>
        <meta name="description" content="" />
        <link rel="canonical" href={window.location.href} />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="container h-100">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-8">
            <h1>{t('oops')}</h1>
            <div className="text-center">
              <p className="h5">
                <br />
                {t('after')} <b>{t('sec', { second: `${seconds}`})}</b> {t('after-end')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;

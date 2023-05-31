import { useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

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

function Languages() {
  const { i18n } = useTranslation();
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

  return (languages.map(({ code, nameLng, countryCode }) => (
    <button
      className='lng'
      onClick={() => changeLanguage(code)}
      hidden={i18n.resolvedLanguage === code}
      key={nameLng}
      aria-label={`Language ${nameLng}`}
    >
      <span className={`flag-icon flag-icon-${countryCode} mx-2`}></span>
    </button>
  )));
}

export default Languages;

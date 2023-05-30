import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import 'flag-icon-css/css/flag-icons.min.css';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    languages: ['ua', 'en'],
    fallbackLng: 'ua',
    debug: false,
    lookupQuerystring: 'lng',
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'htmlTag', 'path'],
      cache: ['cookie', 'localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

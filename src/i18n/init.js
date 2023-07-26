import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationsEN from './locales/en/en.json';
import translationsFR from './locales/fr/fr.json';
import translationsUK from './locales/uk/uk.json';

const resources = {
  en: {
    translation: translationsEN,
  },
  fr: {
    translation: translationsFR,
  },
  'uk-UA': {
    translation: translationsUK,
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    returnNull: false,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

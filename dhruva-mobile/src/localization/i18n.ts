import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './english';
import pt from './portuguese';

const resources = {
  en: {
    translation: en
  },
  pt: {
    translation: pt
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    compatibilityJSON: 'v3',
    resources,
    lng: 'en', // default language to use.
    interpolation: {
      escapeValue: false
    },
    react: {
        useSuspense: false
    }
  });

export default i18n;
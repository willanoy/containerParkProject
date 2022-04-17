import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// en-US
//en
//nl-BE
//nl


i18n.use(initReactI18next).init({
  fallbackLng: 'nl',
  lng: 'nl',
  resources: {
    en: {
      translations: require('./locales/en/translations.json')
    },
    nl: {
      translations: require('./locales/nl/translations.json')
    }
  },
  ns: ['translations'],
  defaultNS: 'translations'
});

i18n.languages = ['en', 'es'];



export default i18n;
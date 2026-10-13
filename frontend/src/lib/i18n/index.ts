import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import commonUk from './locales/uk/common.json';
import authUk from './locales/uk/auth.json';
import landingUk from './locales/uk/landing.json';

import commonEn from './locales/en/common.json';
import authEn from './locales/en/auth.json';
import landingEn from './locales/en/landing.json';

export const defaultNS = 'common';
export const resources = {
  uk: {
    common: commonUk,
    auth: authUk,
    landing: landingUk,
  },
  en: {
    common: commonEn,
    auth: authEn,
    landing: landingEn,
  },
} as const;

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'uk',
    defaultNS,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
    },
  });

export default i18n;
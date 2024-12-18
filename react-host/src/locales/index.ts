import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { locales } from "react-remote-1/index";

i18next
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        ...locales.en,
        host: {
          welcome: "Welcome React and react-i18next and Host",
        },
      },
      fr: {
        ...locales.fr,
        host: {
          welcome: "Bienvenue à React et react-i18next and Host",
        },
      },
    },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

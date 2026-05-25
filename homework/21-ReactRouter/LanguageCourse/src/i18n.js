import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en/translation.json";
import hy from "./locales/hy/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        home: "Home",
        courses: "Courses",
        teacher: "Teacher",
        details: "View Details",
        notfound: "Page Not Found"
      }
    },

    hy: {
      translation: {
        home: "Գլխավոր",
        courses: "Դասընթացներ",
        teacher: "Դասախոս",
        details: "Մանրամասն",
        notfound: "Էջը չի գտնվել"
      }
    }
  },

  lng: "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false
  }
});

export default i18n;
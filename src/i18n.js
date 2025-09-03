import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector"; // Importa el detector de idioma

import en from "./locales/en.json";
import es from "./locales/es.json";

i18n
  .use(LanguageDetector) // Usa el detector de idioma
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
    },
    fallbackLng: "en", // Si el idioma detectado no está soportado, usa inglés
    interpolation: { escapeValue: false },
    detection: {
      order: ["navigator", "localStorage", "sessionStorage"], // Detecta el idioma del navegador o de los datos guardados
      caches: ["localStorage", "sessionStorage"], // Guarda el idioma seleccionado para futuras visitas
    },
  });

export default i18n;

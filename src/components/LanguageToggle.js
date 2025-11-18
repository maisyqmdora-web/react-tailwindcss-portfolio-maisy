// import { useTranslation } from "react-i18next";
import i18n from "../i18n";

function LanguageToggle() {
  const isEnglish = i18n.language === "en";

  const toggleLanguage = () => {
    i18n.changeLanguage(isEnglish ? "zh" : "en");
  };

  return (
    <button
      onClick={toggleLanguage}
      className="
        text-lg
        p-3
        leading-none
        text-ternary-dark 
        hover:text-gray-400 
        dark:text-ternary-light 
        dark:hover:text-primary-light 
      "
    >
      {isEnglish ? "EN" : "中"}
    </button>
  );
}

export default LanguageToggle;

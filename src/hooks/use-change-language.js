import { useTranslation } from 'react-i18next';

const useChangeLanguage = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language = 'en') => {
    i18n.changeLanguage(language);
  };

  return { changeLanguage };
};

export { useChangeLanguage };

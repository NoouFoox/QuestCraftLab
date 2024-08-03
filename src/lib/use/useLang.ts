import { useTranslation } from "react-i18next";

export default function useLang() {
  const { i18n } = useTranslation();
  const changeLang = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
  };
  return { changeLang }
}
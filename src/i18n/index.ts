import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en_US from '../../lang/en-US.json';
import zh_CN from '../../lang/zh-CN.json';
import zh_HK from '../../lang/zh-HK.json';
export type Translation = typeof en_US;
const lation = (translation:Translation) => ({
  translation
})
i18next
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: localStorage.getItem("lang")||'en-US',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      'en-US': lation(en_US),
      'zh-CN': lation(zh_CN),
      'zh-HK': lation(zh_HK)
    }
  })
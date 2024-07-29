import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en_US from '../../lang/en-US.json';
import zh_CN from '../../lang/zh-CN.json';
import zh_HK from '../../lang/zh-HK.json';
i18next
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en-US',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      'en-US': {
        translation: en_US
      },
      'zh-CN': {
        translation: zh_CN
      },
      'zh-HK': {
        translation: zh_HK
      }
    }
  })
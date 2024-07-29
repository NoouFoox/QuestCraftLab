
import 'react-i18next';
import en_US from '../../lang/en-US.json';
const resources = {
  translation: en_US
}
declare module 'i18next' {
  interface CustomTypeOptions {
    resources: typeof resources
  }
} 
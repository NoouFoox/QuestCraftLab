import { useTranslation } from "react-i18next";
import lngs from "./i18n/lngs";
function App() {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <select
        onChange={(evt) => {
          i18n.changeLanguage(evt.target.value);
        }}
      >
        {Object.keys(lngs).map((lng) => (
          <option
            key={lng}
            value={lng}
            label={lngs[lng].nativeName}
            style={{
              fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
            }}
          />
        ))}
      </select>
      <h1>{t('welcome')}</h1>
    </div>
  );
}
export default App;

import lngs from "@/i18n/lngs";
import { useTranslation } from "react-i18next";

export default function LanguagePackageDropdownBox() {
  const { i18n } = useTranslation();
  return (
    <>
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
    </>
  );
}

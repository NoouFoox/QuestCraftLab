import useDark from "@/utils/use/useDark";
import { Button } from "@ui/button";
import { t } from "i18next";

export default function ThemeButton() {
  const { theme, changeTheme } = useDark();
  const handleChangeTheme = () => {
    changeTheme(theme === "light" ? "dark" : "light");
  };
  return <Button onClick={handleChangeTheme}>{t(`theme.${theme}`)}</Button>;
}

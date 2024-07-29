import ThemeButton from "@/component/system/ThemeButton";
import Button from "@/component/ui/Button";
import { t } from "i18next";

export default function Home() {
  return (
    <div>
      <h1>{t('welcome')}</h1>
      <Button>Click me</Button>
      <ThemeButton />
    </div>
  );
}
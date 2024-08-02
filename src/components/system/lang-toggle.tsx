import lngs from "@/i18n/lngs";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { useTranslation } from "react-i18next";
import { Button } from "../ui/button";
import { t } from "i18next";

export default function LangToggle() {
  const { i18n } = useTranslation();
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <span>{t('lang')}</span>
            <span className="sr-only">Toggle lang</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {Object.keys(lngs).map((lng) => (
            <DropdownMenuItem
              onClick={() => i18n.changeLanguage(lng)}
              key={lng}
            >
              {lng}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

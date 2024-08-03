import lngs from "@/i18n/lngs";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { useTranslation } from "react-i18next";
import { Button } from "../ui/button";
import useLang from "@/lib/use/useLang";
export default function LangToggle() {
  const { changeLang } = useLang();
  const { t } = useTranslation();
  
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
              onClick={() =>changeLang(lng)}
              key={lng}
            >
              {lngs[lng].nativeName}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

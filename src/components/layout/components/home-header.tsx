import LangToggle from "@/components/system/lang-toggle";
import { ModeToggle } from "@/components/system/mode-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetDescription,
  SheetTitle,
} from "@/components/ui/sheet";
import useRoute from "@/lib/use/useRoute";
import { mainRoutes } from "@/router";
import clsx from "clsx";
import { Pickaxe, Menu } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
type _RouterLangType = "ui.home" | "ui.about" | "ui.plugins";
export default function HomeHeader() {
  const { t } = useTranslation();
  const route = useRoute();
  const linkClass = (routerPath: string) =>
    clsx(
      { "text-foreground/50": route?.path !== routerPath },
      "transition-colors hover:text-foreground/80 "
    );

  console.log(route);
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <a
          href="/"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <Pickaxe className="h-6 w-6" />
        </a>
        {mainRoutes.map((nav) => (
          <Link
            to={nav.path || "/"}
            key={nav.path}
            className={linkClass(nav.path!)}
          >
            {t(`ui.${nav.meta!.name}` as _RouterLangType)}
          </Link>
        ))}
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetDescription>Description goes here</SheetDescription>
          </SheetHeader>
          <SheetTitle>Menu</SheetTitle>
          <nav className="grid gap-6 text-lg font-medium">
            {mainRoutes.map((nav) => (
              <Link
                to={nav.path || "/"}
                key={nav.path}
                className={linkClass(nav.path!)}
              >
                {t(`ui.${nav.meta!.name}` as _RouterLangType)}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex w-full items-center justify-end gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <LangToggle />
        <ModeToggle />
      </div>
    </header>
  );
}

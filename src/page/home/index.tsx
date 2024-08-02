import LangToggle from "@/components/system/lang-toggle";
import { ModeToggle } from "@/components/system/mode-toggle";
import { Button } from "@/components/ui/button";
import {
  SheetTrigger,
  Sheet,
  SheetContent,
  SheetTitle,
  SheetHeader,
  SheetDescription,
} from "@/components/ui/sheet";
import { t } from "i18next";
import yaml from "js-yaml";
import { Menu, Pickaxe } from "lucide-react";
const JSONdata = {
  name: {
    title: "任务",
    npcs: [1, 2, 3],
    ops: {
      add: 1,
      p: {
        d: {
          c: 1,
        },
      },
    },
  },
};
const YMLdata = yaml.dump(JSONdata);
export default function Home() {
  console.log(YMLdata);
  console.log(yaml.load(YMLdata));
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <a
            href="/"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
          >
            <Pickaxe className="h-6 w-6" />
          </a>
          {["home", "plugins", "about"].map((nav) => (
            <a
              href="#"
              key={nav}
              className="text-foreground transition-colors hover:text-foreground"
            >
              {t(`ui.${nav}` as "ui.home" | "ui.about" | "ui.plugins")}
            </a>
          ))}
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
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
              {["home", "plugins", "about"].map((nav) => (
                <a
                  href="#"
                  key={nav}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {t(`ui.${nav}` as "ui.home" | "ui.about" | "ui.plugins")}
                </a>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex w-full items-center justify-end gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <LangToggle/>
          <ModeToggle />
        </div>
      </header>
      <main>
        <Button>按钮</Button>
        <code style={{ whiteSpace: "pre-wrap" }}>{YMLdata}</code>
      </main>
      <footer></footer>
    </div>
  );
}

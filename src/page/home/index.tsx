import { ModeToggle } from "@/components/system/mode-toggle";
import { Button } from "@/components/ui/button";
import { t } from "i18next";
import yaml from "js-yaml";
const JSONdata = {
  name: {
    title: "任务",
    npcs: [1, 2, 3],
    ops: {
      add: 1,
      p:{
        d:{
          c:1
        }
      }
    },
  },
};
const YMLdata = yaml.dump(JSONdata);
export default function Home() {
  console.log(YMLdata);
  console.log(yaml.load(YMLdata));

  return (
    <div>
      <Button>按钮</Button>
      <ModeToggle/>
      <h1>{t("welcome")}</h1>
      <code style={{whiteSpace:'pre-wrap'}}>
        {YMLdata}
      </code>
    </div>
  );
}

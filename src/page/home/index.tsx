import { Button } from "@/components/ui/button";
import yaml from "js-yaml";
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
  return (
    <>
      <Button>按钮</Button>
      <br />
      <code style={{ whiteSpace: "pre-wrap" }}>{YMLdata}</code>
    </>
  );
}

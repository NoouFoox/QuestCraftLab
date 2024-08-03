import yaml from "js-yaml";
import HomeCard from "./components/home-card";
import { Plus } from "lucide-react";
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
    <div className="grid gap-4 p-4 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4">
      <HomeCard className="flex justify-center items-center flex-col gap-1 cursor-pointer border-dashed">
        <Plus />
        新增任务
      </HomeCard>
      {new Array(30).fill(null).map((_, index) => (
        <HomeCard key={index}>
          <code>{YMLdata}</code>
        </HomeCard>
      ))}
    </div>
  );
}

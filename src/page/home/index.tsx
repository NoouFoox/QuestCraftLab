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
    <div className="grid gap-4 p-4 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3">
      {new Array(30).fill(null).map((_,index) => (
        <div key={index} className="whitespace-pre-wrap w-full p-2 rounded-md">
          <code>{YMLdata}</code>
        </div>
      ))}
    </div>
  );
}

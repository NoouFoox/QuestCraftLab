// import yaml from "js-yaml";
import { db, Quest } from "@/db/db";
import HomeCard from "./components/home-card";
import { Plus } from "lucide-react";
import { useTranslation } from "react-i18next";
import { ReactNode, useEffect, useState } from "react";
import dayjs from "dayjs";

const getAllQuests = async () => (await db.quests.toArray()).reverse();

export default function Home() {
  const { t } = useTranslation();
  const [quests, setQuests] = useState<Array<Quest>>([]);
  const initData = () => {
    getAllQuests().then(setQuests);
  };
  useEffect(initData, []);
  const handleAdd = () => {
    db.quests.add({
      title: t("quest.default.title"),
      description: t("quest.default.description"),
      status: "new",
      config: "{}",
      created_at: dayjs().toISOString(),
      updated_at: dayjs().toISOString(),
    });
    initData();
  };
  return (
    <CardLayout>
      <AddCard onClick={handleAdd} />
      {quests.map((quest) => (
        <HomeCard key={quest.id}>
          <h2>{quest.title}</h2>
          <p>{quest.description}</p>
          <p>{quest.status}</p>
          <p>{quest.config}</p>
          <p>{quest.created_at}</p>
        </HomeCard>
      ))}
    </CardLayout>
  );
}

const CardLayout = ({ children }: { children: ReactNode }) => (
  <div className="grid gap-4 p-4 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4">
    {children}
  </div>
);

type AddCardProps = {
  onClick: () => void;
};

const AddCard = ({ onClick }: AddCardProps) => {
  const { t } = useTranslation();
  return (
    <HomeCard
      className="flex justify-center items-center flex-col gap-1 cursor-pointer border-dashed"
      onClick={onClick}
    >
      <Plus />
      <span className="select-none">{t("system.add.quest")}</span>
    </HomeCard>
  );
};

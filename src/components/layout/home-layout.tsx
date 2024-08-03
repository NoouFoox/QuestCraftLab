import HomeHeader from "./components/home-header";
import { Outlet } from "react-router-dom";
export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <HomeHeader />
      <main className="flex-1">
      <Outlet />
      </main>
      <footer></footer>
    </div>
  );
}

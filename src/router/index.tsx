import { createBrowserRouter, RouteObject } from "react-router-dom";
import HomeLayout from "@/components/layout/home-layout";
import Home from "@/page/home";
export const mainRoutes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
];

const routes: RouteObject[] = [
  {
    path: "/",
    element: <HomeLayout />,
    children: mainRoutes,
  },
  {
    path: "*",
    element: <div>404</div>,
  },
];

const router = createBrowserRouter(routes);

export default router;

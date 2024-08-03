import { createBrowserRouter, RouteObject } from "react-router-dom";
import HomeLayout from "@/components/layout/home-layout";
import Home from "@/page/home";
type RouterMeta = {
  meta?: {
    name: string;
  };
};
type CustomRouteObject = RouteObject & RouterMeta;
export const mainRoutes: CustomRouteObject[] = [
  {
    path: "/",
    meta: {
      name: "home",
    },
    element: <Home />,
  },
  {
    path: "/plugins",
    meta: {
      name: "plugins",
    },
    element: <div>plugins</div>,
  },
  {
    path: "/about",
    meta: {
      name: "about",
    },
    element: <div>about</div>,
  },
];
const routes: CustomRouteObject[] = [
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

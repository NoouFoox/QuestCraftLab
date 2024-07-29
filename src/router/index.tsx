import { createBrowserRouter, RouteObject } from "react-router-dom";
import Home from "@/page/home";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
];

const router = createBrowserRouter(routes);

export default router;
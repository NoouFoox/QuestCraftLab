import { mainRoutes } from "@/router";
import { matchRoutes, useLocation } from "react-router-dom";

export default function useRoute() {
  const location = useLocation();
  const metchedRoute = matchRoutes(mainRoutes, location)
  const route = metchedRoute?.[0].route || null
  return route
}
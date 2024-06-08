import { lazy } from "react";
import Loadable from "../../components/Loadable";

const AppIcon = Loadable(lazy(() => import("./icons/AppIcon")));
const AppProgress = Loadable(lazy(() => import("./AppProgress")));

const materialRoutes = [
  { path: "/material/icons", element: <AppIcon /> },
  { path: "/material/progress", element: <AppProgress /> },
];

export default materialRoutes;

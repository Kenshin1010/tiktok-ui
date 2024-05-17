import routesConfig from "../config/routes";

// Layouts
import HeaderOnly from "../components/Layouts/HeaderOnly/HeaderOnly";

// Pages
import Home from "../pages/Home/Home";
import Following from "../pages/Following/Following";
import Profile from "../pages/Profile/Profile";
import Upload from "../pages/Upload/Upload";
import Search from "../pages/Search/Search";

// Public routes
const publicRoutes = [
  {
    path: routesConfig.home,
    component: Home,
  },
  {
    path: routesConfig.following,
    component: Following,
  },
  {
    path: routesConfig.profile,
    component: Profile,
  },
  {
    path: routesConfig.upload,
    component: Upload,
    layout: HeaderOnly,
  },
  {
    path: routesConfig.search,
    component: Search,
    layout: null,
  },
];

// const priveRoutes = [];

// export { publicRoutes, priveRoutes };
export { publicRoutes };

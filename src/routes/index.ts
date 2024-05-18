import config from "../config";

// Layouts
import HeaderOnly from "../layouts/HeaderOnly/HeaderOnly";

// Pages
import Home from "../pages/Home/Home";
import Following from "../pages/Following/Following";
import Profile from "../pages/Profile/Profile";
import Upload from "../pages/Upload/Upload";
import Search from "../pages/Search/Search";
import Friends from "../pages/Friends/Friends";
import Explore from "../pages/Explore/Explore";
import Live from "../pages/Live/Live";

// Public routes
const publicRoutes = [
  {
    path: config.routes.home,
    component: Home,
  },
  {
    path: config.routes.following,
    component: Following,
  },
  {
    path: config.routes.profile,
    component: Profile,
  },
  {
    path: config.routes.upload,
    component: Upload,
    layout: HeaderOnly,
  },
  {
    path: config.routes.search,
    component: Search,
    layout: null,
  },

  {
    path: config.routes.friends,
    component: Friends,
  },
  {
    path: config.routes.explore,
    component: Explore,
  },
  {
    path: config.routes.live,
    component: Live,
  },
];

// const priveRoutes = [];

// export { publicRoutes, priveRoutes };
export { publicRoutes };

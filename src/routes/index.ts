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
import Favorites from "../pages/Favorites/Favorites";
import FeedbackAndHelp from "../pages/FeedbackAndHelp/FeedbackAndHelp";
import GetCoins from "../pages/GetCoins/GetCoins";
import KeyboardShortcuts from "../pages/KeyboardShortcuts/KeyboardShortcuts";
import LiveCreatorHub from "../pages/LiveCreatorHub/LiveCreatorHub";
import LiveStudio from "../pages/LiveStudio/LiveStudio";
import Settings from "../pages/Settings/Settings";

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
  {
    path: config.routes.favorites,
    component: Favorites,
    layout: HeaderOnly,
  },
  {
    path: config.routes.feedbackandhelp,
    component: FeedbackAndHelp,
    layout: HeaderOnly,
  },
  {
    path: config.routes.getcoins,
    component: GetCoins,
    layout: HeaderOnly,
  },
  {
    path: config.routes.keyboardshortcuts,
    component: KeyboardShortcuts,
    layout: HeaderOnly,
  },
  {
    path: config.routes.livecreatorhub,
    component: LiveCreatorHub,
    layout: HeaderOnly,
  },
  {
    path: config.routes.livestudio,
    component: LiveStudio,
    layout: HeaderOnly,
  },
  {
    path: config.routes.settings,
    component: Settings,
    layout: HeaderOnly,
  },
];

// const priveRoutes = [];

// export { publicRoutes, priveRoutes };
export { publicRoutes };

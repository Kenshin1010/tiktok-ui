import { Link } from "react-router-dom";
import {
  faBookmark,
  faLightbulb,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import {
  faArrowRightToBracket,
  faCircleQuestion,
  faCoins,
  faEarthEurope,
  faEllipsisVertical,
  faGear,
  faKeyboard,
  faPlus,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import tiktokLogo from "../../../../assets/images/tiktok.svg";
import routesConfig from "../../../../config/routes";

import classNames from "classnames/bind";
import styles from "./Header.module.scss";

import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";

import InboxIcon from "../../../../assets/icons-jsx/InboxIcon";
import MessageIcon from "../../../../assets/icons-jsx/MessageIcon";
import Button from "../../../Button/Button";
import Menu from "../../../Popper/Menu/Menu";
import { MenuItemProps } from "../../../Popper/Menu/MenuItem";
import Search from "../Search/Search";
import Image from "../../../Image/Image";

const cx = classNames.bind(styles);

const currentUser = "true";

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faLightbulb} />,
    title: "LIVE creator Hub",
    to: "/live/creators",
  },
  {
    icon: <FontAwesomeIcon icon={faEarthEurope} />,
    title: "English",
    children: {
      title: "Language",
      data: [
        {
          type: "language",
          code: "en",
          title: "English",
        },
        {
          type: "language",
          code: "vi",
          title: "Tiếng Việt",
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: "Feedback and help",
    to: "/feedback",
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: "Keyboard shortcuts",
  },
];
function Header() {
  // Handle logic
  const handleMenuChange = (item: MenuItemProps) => {
    console.log("item:", item);
  };

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: "View profile",
      to: "/@:nickname",
    },
    {
      icon: <FontAwesomeIcon icon={faBookmark} />,
      title: "Favorites",
      to: "/@user",
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: "Get Coins",
      to: "/coin",
    },
    {
      icon: <FontAwesomeIcon icon={faVideo} />,
      title: "LIVE studio",
      to: "/studio",
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: "Settings",
      to: "/setting",
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faArrowRightToBracket} />,
      title: "Log out",
      to: routesConfig.home,
      separate: true,
    },
  ];

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <Link to={routesConfig.home} className={cx("logo-link")}>
          <img width="118" height="42" alt="TikTok Logo" src={tiktokLogo} />
        </Link>

        <Search />

        <div className={cx("actions")}>
          <Button
            outline
            to="upload"
            leftIcon={<FontAwesomeIcon icon={faPlus} />}
          >
            Upload
          </Button>

          {currentUser ? (
            <>
              <Tippy
                interactive
                content={<span>Messages</span>}
                placement="bottom"
              >
                <button className={cx("action-btn")}>
                  <MessageIcon />
                </button>
              </Tippy>
              <Tippy
                interactive
                content={<span>Inbox</span>}
                placement="bottom"
              >
                <button className={cx("action-btn")}>
                  <InboxIcon />
                </button>
              </Tippy>
            </>
          ) : (
            <Button primary to="login">
              Log in
            </Button>
          )}

          <Menu
            items={currentUser ? userMenu : MENU_ITEMS}
            onChange={handleMenuChange}
          >
            {currentUser ? (
              <button className={cx("action-avatar")}>
                <Image
                  className={cx("user-avatar")}
                  src="src/assets/images/minami_aizawa_.webp"
                  alt="相沢みなみ"
                  fallback="src/assets/images/minami_aizawa_.webp"
                />
              </button>
            ) : (
              <button className={cx("more-btn")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;

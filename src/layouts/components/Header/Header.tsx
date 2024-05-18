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
import { Link } from "react-router-dom";
import minamiAizawaImage from "../../../assets/images/minami_aizawa_.webp";
import tiktokLogo from "../../../assets/images/tiktok.svg";
import config from "../../../config";

import classNames from "classnames/bind";
import styles from "./Header.module.scss";

import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";

import InboxIcon from "../tsx-icon/InboxIcon";
import MessageIcon from "../tsx-icon/MessageIcon";
import Button from "../../../components/Button/Button";
import Image from "../../../components/Image/Image";
import Menu from "../../../components/Popper/Menu/Menu";
import { MenuItemProps } from "../../../components/Popper/Menu/MenuItem";
import Search from "../Search/Search";

const cx = classNames.bind(styles);

const currentUser = true;

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
      to: config.routes.home,
      separate: true,
    },
  ];

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <Link to={config.routes.home} className={cx("logo-link")}>
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
              <span>
                <Tippy
                  interactive
                  content={<span>Messages</span>}
                  placement="bottom"
                >
                  <button className={cx("action-btn")}>
                    <MessageIcon />
                  </button>
                </Tippy>
              </span>
              <span>
                <Tippy
                  interactive
                  content={<span>Inbox</span>}
                  placement="bottom"
                >
                  <button className={cx("action-btn")}>
                    <InboxIcon />
                  </button>
                </Tippy>
              </span>
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
                  src={minamiAizawaImage}
                  alt="相沢みなみ"
                  fallback={minamiAizawaImage}
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

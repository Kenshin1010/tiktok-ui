import { useEffect, useState } from "react";

import {
  faCircleQuestion,
  faCircleXmark,
  faEarthEurope,
  faEllipsisVertical,
  faKeyboard,
  faPlus,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import tiktokLogo from "../../../../assets/images/tiktok.svg";
import SearchIcon from "../jsx-icon/SearchIcon";

import classNames from "classnames/bind";
import styles from "./Header.module.scss";

import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import AccountItem from "../../../AccountItem/AccountItem";
import Button from "../../../Button/Button";
import Menu from "../../../Popper/Menu/Menu";
import { MenuItemProps } from "../../../Popper/Menu/MenuItem";
import Wrapper from "../../../Popper/Wrapper";

const cx = classNames.bind(styles);

const MENU_ITEMS = [
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
  const [searchResult, setSearchResult] = useState<number[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchResult([]);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  // Handle logic
  const handleMenuChange = (item: MenuItemProps) => {
    const isParent = !!item.children;
    if (isParent) {
      switch (item.children.data[0].type) {
        case "language":
          // Handle change language
          console.log(item.children.data[0].code);
          break;
        default:
          break;
      }
    }
  };

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img width="118" height="42" alt="TikTok Logo" src={tiktokLogo} />
        </div>
        <Tippy
          interactive
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cx("search-results")} tabIndex={-1} {...attrs}>
              <Wrapper>
                <h4 className={cx("search-title")}>Accounts</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </Wrapper>
            </div>
          )}
        >
          <div className={cx("search")}>
            <input placeholder="Search" />
            <button className={cx("clear")}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
            <button className={cx("search-btn")}>
              <SearchIcon />
            </button>
          </div>
        </Tippy>
        <div className={cx("action")}>
          <Button
            outline
            to="upload"
            leftIcon={<FontAwesomeIcon icon={faPlus} />}
          >
            Upload
          </Button>
          <Button primary to="login">
            Log in
          </Button>

          <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
            <button className={cx("more-btn")}>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </button>
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;

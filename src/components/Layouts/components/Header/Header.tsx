import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";
import tiktokLogo from "../../../../assets/images/tiktok.svg";
import SearchIcon from "../SearchIcon";

import classNames from "classnames/bind";
import styles from "./Header.module.scss";

import Wrapper from "../../../Popper/Wrapper";
import "tippy.js/dist/tippy.css";
import Tippy from "@tippyjs/react/headless";
import AccountItem from "../../../AccountItem/AccountItem";

const cx = classNames.bind(styles);
function Header() {
  const [searchResult, setSearchResult] = useState<number[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchResult([]);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

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
        <div className={cx("action")}></div>
      </div>
    </header>
  );
}

export default Header;

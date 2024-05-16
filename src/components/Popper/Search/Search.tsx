import { useEffect, useState } from "react";
import Tippy from "@tippyjs/react/headless";

import classNames from "classnames/bind";
import styles from "./Search.module.scss";

import Wrapper from "../Wrapper";
import SearchIcon from "../../Layouts/components/jsx-icon/SearchIcon";
import AccountItem from "../../AccountItem/AccountItem";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
function Search() {
  const [searchResult, setSearchResult] = useState<number[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchResult([]);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  return (
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
  );
}

export default Search;

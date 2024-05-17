import { useEffect, useState, useRef } from "react";
import HeadlessTippy from "@tippyjs/react/headless";

import classNames from "classnames/bind";
import styles from "./Search.module.scss";

import Wrapper from "../../../Popper/Wrapper";
import SearchIcon from "../jsx-icon/SearchIcon";
import AccountItem from "../../../AccountItem/AccountItem";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(true);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchResult([1, 1, 1, 1]);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const handleClear = () => {
    setSearchValue("");
    // setSearchResult([]);
    inputRef.current?.focus();
  };

  const handleHideResult = () => {
    setShowResult(false);
  };

  const handleShowResult = () => {
    setShowResult(true);
  };

  return (
    <HeadlessTippy
      interactive
      visible={showResult && searchResult.length > 0}
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
      onClickOutside={handleHideResult}
    >
      <div className={cx("search")}>
        <input
          ref={inputRef}
          value={searchValue}
          placeholder="Search"
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => {
            handleShowResult();
          }}
        />
        {!!searchValue && (
          <button
            className={cx("clear")}
            onClick={() => {
              handleClear();
            }}
          >
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}
        {/* <FontAwesomeIcon className={cx("loading")} icon={faSpinner} /> */}
        <button className={cx("search-btn")}>
          <SearchIcon />
        </button>
      </div>
    </HeadlessTippy>
  );
}

export default Search;

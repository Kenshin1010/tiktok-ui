import { useEffect, useState, useRef } from "react";
import HeadlessTippy from "@tippyjs/react/headless";

import classNames from "classnames/bind";
import styles from "./Search.module.scss";

import Wrapper from "../../../Popper/Wrapper";
import SearchIcon from "../jsx-icon/SearchIcon";
import AccountItem, { AccountData } from "../../../AccountItem/AccountItem";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState<AccountData[]>([]);
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (!searchValue.trim()) {
      setSearchResult([]);
      return;
    }

    setLoading(true);

    fetch(
      `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
        searchValue
      )}&type=less`
    )
      .then((res) => res.json())
      .then((res) => {
        setSearchResult(res.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
    // const timer = setTimeout(() => {
    //   setSearchResult([1, 1, 1, 1]);
    // }, 0);
    // return () => clearTimeout(timer);
  }, [searchValue]);

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
            {searchResult.map((result: AccountData) => (
              <AccountItem key={result.id} data={result} />
            ))}
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
        {!!searchValue && !loading && (
          <button
            className={cx("clear")}
            onClick={() => {
              handleClear();
            }}
          >
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}
        {loading && (
          <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
        )}
        <button className={cx("search-btn")}>
          <SearchIcon />
        </button>
      </div>
    </HeadlessTippy>
  );
}

export default Search;

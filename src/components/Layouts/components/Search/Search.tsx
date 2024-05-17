import HeadlessTippy from "@tippyjs/react/headless";
import { ChangeEvent, MouseEvent, useEffect, useRef, useState } from "react";
import useDebounce from "../../../../hooks/useDebounce";
import * as searchServices from "../../../../apiServices/searchServices";

import classNames from "classnames/bind";
import styles from "./Search.module.scss";

import AccountItem, { AccountData } from "../../../AccountItem/AccountItem";
import Wrapper from "../../../Popper/Wrapper";
import SearchIcon from "../jsx-icon/SearchIcon";

import { faCircleXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cx = classNames.bind(styles);
function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState<AccountData[]>([]);
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);

  const debounced = useDebounce({ value: searchValue, delay: 500 });

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (!debounced.trim()) {
      setSearchResult([]);
      return;
    }
    const fetchApi = async () => {
      setLoading(true);

      const result = await searchServices.search(debounced);

      setSearchResult(result);
      setLoading(false);
    };

    fetchApi();
  }, [debounced]);

  const handleClear = () => {
    setSearchValue("");
    setSearchResult([]);
    inputRef.current?.focus();
  };

  const handleHideResult = () => {
    setShowResult(false);
  };

  const handleShowResult = () => {
    setShowResult(true);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(" ")) {
      setSearchValue(searchValue);
    }
  };

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault;
  };

  return (
    // Using a wrapper <div> or <span> tag around the reference element
    // solves this by creating a new parentNode context.
    <span>
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
            onChange={handleChange}
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
          <button className={cx("search-btn")} onMouseDown={handleSubmit}>
            <SearchIcon />
          </button>
        </div>
      </HeadlessTippy>
    </span>
  );
}

export default Search;

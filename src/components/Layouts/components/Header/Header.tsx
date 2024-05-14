import tiktokLogo from "../../../../assets/images/tiktok.svg";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";
import SearchIcon from "../SearchIcon";

const cx = classNames.bind(styles);
function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img width="118" height="42" alt="TikTok Logo" src={tiktokLogo} />
        </div>
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
        <div className={cx("action")}></div>
      </div>
    </header>
  );
}

export default Header;

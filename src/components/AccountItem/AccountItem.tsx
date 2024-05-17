import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Image from "../Image/Image";

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <Image
        className={cx("avatar")}
        src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/7103407749668536322~c5_300x300.webp?lk3s=a5d48078&x-expires=1715853600&x-signature=sZ%2Bp3tg1GBF%2F7kFRKQEYSa0zMS0%3D"
        alt="相沢みなみ"
      />
      <div className={cx("info")}>
        <h4 className={cx("username")}>minami_aizawa_</h4>
        <p className={cx("name")}>
          <span>相沢みなみ</span>
          <FontAwesomeIcon className={cx("verified")} icon={faCheckCircle} />
        </p>
      </div>
    </div>
  );
}

export default AccountItem;

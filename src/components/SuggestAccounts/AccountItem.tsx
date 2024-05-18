import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import styles from "./SuggestAccounts.module.scss";

const cx = classNames.bind(styles);

// type AccountItemProps = {
//   children?: React.ReactNode;
// };

function AccountItem() {
  return (
    <div className={cx("account-item")}>
      <img
        className={cx("avatar")}
        src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-euttp/3d007eb544d9e31adb124febfaf41e80~c5_100x100.jpeg?lk3s=30310797&nonce=19134&refresh_token=2e1fd53506616e120a3115bde655eab2&x-expires=1716102000&x-signature=Jr1a8CgaL4RAqFPJEFaiGc%2Frqzk%3D&shp=30310797&shcp=811c9dc5"
        alt="David Beckham"
      />
      <div className={cx("item-info")}>
        <div className={cx("nickname")}>
          <h4>davidbeckham</h4>
          {true && (
            <FontAwesomeIcon className={cx("verified")} icon={faCheckCircle} />
          )}
        </div>
        <span className={cx("name")}>David Beckham</span>
      </div>
    </div>
  );
}

AccountItem.propTypes = {
  children: PropTypes.node,
};

export default AccountItem;

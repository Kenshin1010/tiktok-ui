import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import styles from "./AccountPreview.module.scss";
import Button from "../../Button/Button";
import DavidBeckham from "../../../assets/images/davidbeckham.webp";

const cx = classNames.bind(styles);

function AccountPreview() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <img className={cx("avatar")} src={DavidBeckham} alt="David Beckham" />
        <Button className={cx("preview-btn")} primary>
          Follow
        </Button>
      </div>
      <div className={cx("body")}>
        <div className={cx("nickname")}>
          <h4>davidbeckham</h4>
          {true && (
            <FontAwesomeIcon className={cx("verified")} icon={faCheckCircle} />
          )}
        </div>
        <span className={cx("name")}>David Beckham</span>
        <p className={cx("analytics")}>
          <strong className={cx("value")}>5.5M </strong>
          <span className={cx("label")}>Followers</span>
          <strong className={cx("value")}>24.1M </strong>
          <span className={cx("label")}>Likes</span>
        </p>
      </div>
    </div>
  );
}

export default AccountPreview;

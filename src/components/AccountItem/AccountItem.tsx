import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Image from "../Image/Image";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

export type AccountData = {
  id: number;
  avatar: string;
  nickname: string;
  full_name: string;
  tick: boolean;
};

function AccountItem(data: AccountData) {
  return (
    <Link to={`/@${data.nickname}`} className={cx("wrapper")}>
      <Image className={cx("avatar")} src={data.avatar} alt="data.avatar" />
      <div className={cx("info")}>
        <div className={cx("username-verified")}>
          <h4 className={cx("username")}>{data.nickname}</h4>
          {data.tick && (
            <FontAwesomeIcon className={cx("verified")} icon={faCheckCircle} />
          )}
        </div>
        <span className={cx("name")}>{data.full_name}</span>
      </div>
    </Link>
  );
}

AccountItem.propTypes = {
  data: PropTypes.object.isRequired,
  id: PropTypes.number,
  avatar: PropTypes.string,
  nickname: PropTypes.string,
  full_name: PropTypes.string,
  tick: PropTypes.bool,
};

export default AccountItem;

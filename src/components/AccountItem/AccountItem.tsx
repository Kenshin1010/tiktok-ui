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

function AccountItem({ data }: { data: AccountData }) {
  return (
    <Link to={`/@${data.nickname}`} className={cx("wrapper")}>
      <Image className={cx("avatar")} src={data.avatar} alt="data.avatar" />
      <div className={cx("info")}>
        <h4 className={cx("username")}>{data.nickname}</h4>
        <p className={cx("name")}>
          <span>{data.full_name}</span>
          {data.tick && (
            <FontAwesomeIcon className={cx("verified")} icon={faCheckCircle} />
          )}
        </p>
      </div>
    </Link>
  );
}

export default AccountItem;

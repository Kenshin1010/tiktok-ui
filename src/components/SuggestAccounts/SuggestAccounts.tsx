import PropTypes from "prop-types";

import classNames from "classnames/bind";
import styles from "./SuggestAccounts.module.scss";
import AccountItem from "./AccountItem";

const cx = classNames.bind(styles);

type SuggestAccountsType = {
  label: string;
};

function SuggestAccounts({ label }: SuggestAccountsType) {
  return (
    <div className={cx("wrapper")}>
      <p className={cx("label")}>{label}</p>

      <AccountItem />
      <AccountItem />
      <AccountItem />

      <button className={cx("button")}>
        <span className={cx("button-text")}>See all</span>
      </button>
    </div>
  );
}

SuggestAccounts.propTypes = {
  label: PropTypes.string.isRequired,
};

export default SuggestAccounts;

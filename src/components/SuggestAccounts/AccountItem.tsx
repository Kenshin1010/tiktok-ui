import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import styles from "./SuggestAccounts.module.scss";
import Tippy from "@tippyjs/react/headless";
import ITippy from "../Popper/ITippy";
import Wrapper from "../Popper/Wrapper";
import AccountPreview from "./AccountPreview/AccountPreview";
import DavidBeckham from "../../assets/images/davidbeckham.webp";

const cx = classNames.bind(styles);

// type AccountItemProps = {
//   children?: React.ReactNode;
// };

const renderPreview = (attrs: ITippy): React.ReactNode => {
  return (
    <div className={cx("preview")} tabIndex={-1} {...attrs}>
      <Wrapper className={cx("menu-popper")}>
        <AccountPreview />
      </Wrapper>
    </div>
  );
};

function AccountItem() {
  return (
    // Fix warning Tippy
    <span>
      <Tippy
        interactive
        delay={[800, 100]}
        offset={[-10, 0]}
        placement="bottom"
        render={renderPreview}
      >
        <div className={cx("account-item")}>
          <img
            className={cx("avatar")}
            src={DavidBeckham}
            alt="David Beckham"
          />
          <div className={cx("item-info")}>
            <div className={cx("nickname")}>
              <h4>davidbeckham</h4>
              {true && (
                <FontAwesomeIcon
                  className={cx("verified")}
                  icon={faCheckCircle}
                />
              )}
            </div>
            <span className={cx("name")}>David Beckham</span>
          </div>
        </div>
      </Tippy>
    </span>
  );
}

AccountItem.propTypes = {
  children: PropTypes.node,
};

export default AccountItem;

import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import classNames from "classnames/bind";
import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);

type MenuItemProps = {
  icon: React.ReactNode;
  activeIcon: React.ReactNode;
  title: string;
  to: string;
};
function MenuItem({ icon, activeIcon, title, to }: MenuItemProps) {
  return (
    <NavLink
      className={(nav) => cx("menu-item", { active: nav.isActive })}
      to={to}
    >
      <span className={cx("icon")}>{icon}</span>
      <span className={cx("activeIcon")}>{activeIcon}</span>
      <span className={cx("title")}>{title}</span>
    </NavLink>
  );
}

MenuItem.propTypes = {
  icon: PropTypes.node.isRequired,
  activeIcon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default MenuItem;

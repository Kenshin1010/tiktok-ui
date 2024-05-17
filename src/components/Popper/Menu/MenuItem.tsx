import PropTypes from "prop-types";

import Button from "../../Button/Button";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);

export type MenuItemProps = {
  icon: React.ReactNode;
  title: string;
  to?: string;
  separate?: boolean;
  children?: {
    title: string;
    data: {
      type: string;
      code: string;
      title: string;
    }[];
  };
  onClick?: () => void;
};

function MenuItem({
  icon,
  title,
  to,
  onClick,
  separate = false,
}: MenuItemProps) {
  const classes = cx("menu-item", {
    separate: separate,
  });
  return (
    <Button className={classes} to={to} leftIcon={icon} onClick={onClick}>
      {title}
    </Button>
  );
}

MenuItem.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.string.isRequired,
  to: PropTypes.string,
  onClick: PropTypes.func,
  separate: PropTypes.bool,
};

export default MenuItem;

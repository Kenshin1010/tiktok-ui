import Button from "../../Button/Button";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);

export type MenuItemProps = {
  icon: React.ReactNode;
  title: string;
  to?: string;
};

function MenuItem({ icon, title, to }: MenuItemProps) {
  return (
    <Button className={cx("menu-item")} to={to} leftIcon={icon}>
      {title}
    </Button>
  );
}

export default MenuItem;

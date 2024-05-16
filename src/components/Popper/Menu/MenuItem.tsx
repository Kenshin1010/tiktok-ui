import Button from "../../Button/Button";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);

// export type MenuItemChild = {
//   title: string;
//   data: {
//     type: string;
//     code: string;
//     title: string;
//   }[];
// };

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

export default MenuItem;

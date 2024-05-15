import Tippy from "@tippyjs/react";
import { ReactElement } from "react";
import Wrapper from "../Wrapper";

import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import MenuItem, { MenuItemProps } from "./MenuItem";

const cx = classNames.bind(styles);

type MenuProps = {
  children: ReactElement;
  items: MenuItemProps[];
};

function Menu({ children, items = [] }: MenuProps) {
  const renderItems = () => {
    return items.map((item, index) => <MenuItem key={index} {...item} />);
  };
  return (
    <Tippy
      interactive
      delay={[0, 700]}
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx("menu-list")} tabIndex={-1} {...attrs}>
          <Wrapper className={cx("menu-popper")}>{renderItems()}</Wrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;

import Tippy from "@tippyjs/react";
import { ReactElement, useState } from "react";

import classNames from "classnames/bind";
import styles from "./Menu.module.scss";

import Wrapper from "../Wrapper";
import Header from "./Header";
import MenuItem, { MenuItemProps } from "./MenuItem";

const cx = classNames.bind(styles);

type MenuProps = {
  children: ReactElement;
  items: MenuItemProps[];
  onChange?: (item: MenuItemProps) => void;
};

const defaultFn = () => {
  console.log("defaultFn");
};

function Menu({ children, items = [], onChange = defaultFn }: MenuProps) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];
  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;
      return (
        <MenuItem
          key={index}
          {...item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, { data: item.children ?? [] }]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };
  return (
    <Tippy
      interactive
      visible
      delay={[0, 700]}
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx("menu-list")} tabIndex={-1} {...attrs}>
          <Wrapper className={cx("menu-popper")}>
            {history.length > 1 && (
              <Header
                title="Language"
                onBack={() => {
                  setHistory((prev) => prev.slice(0, prev.length - 1));
                }}
              />
            )}
            {renderItems()}
          </Wrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;

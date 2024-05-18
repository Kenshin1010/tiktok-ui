import PropTypes from "prop-types";

import { ReactElement, useState } from "react";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import ITippy from "../ITippy";

import classNames from "classnames/bind";
import styles from "./Menu.module.scss";

import Wrapper from "../Wrapper";
import Header from "./Header";
import MenuItem, { MenuItemProps } from "./MenuItem";

const cx = classNames.bind(styles);

type MenuProps = {
  children: ReactElement;
  items: MenuItemProps[];
  hideOnClick?: boolean;
  onChange?: (item: MenuItemProps) => void;
};

const defaultFn = () => {
  console.log("defaultFn");
};

function Menu({
  children,
  items = [],
  hideOnClick = false,
  onChange = defaultFn,
}: MenuProps) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];

  const [headerTitle, setHeaderTitle] = useState("");

  const renderItems = () => {
    if (!Array.isArray(current.data)) {
      // Xử lý khi current.data không phải là mảng
      return null;
    }
    return current.data.map((item, index) => {
      const isParent = !!item.children;
      return (
        <MenuItem
          key={index}
          {...item}
          onClick={() => {
            if (isParent) {
              // Chuyển đổi item.children thành mảng MenuItemProps[]
              const childrenArray: MenuItemProps[] = item.children
                ? item.children.data.map((child) => ({
                    icon: undefined,
                    title: child.title,
                    to: undefined,
                    children: undefined,
                  }))
                : [];

              // Cập nhật headerTitle
              if (item.children && item.children.title) {
                setHeaderTitle(item.children.title);
              }

              // Thêm childrenArray vào history
              setHistory((prev) => [...prev, { data: childrenArray }]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };

  const handleBack = () => {
    setHistory((prev) => prev.slice(0, prev.length - 1));
  };

  const renderResult = (attrs: ITippy) => (
    <div className={cx("menu-list")} tabIndex={-1} {...attrs}>
      <Wrapper className={cx("menu-popper")}>
        {history.length > 1 && (
          <Header title={headerTitle} onBack={handleBack} />
        )}
        <div className={cx("menu-body")}>{renderItems()}</div>
      </Wrapper>
    </div>
  );

  // Reset to first page
  const handleReset = () => {
    setHistory((prev) => prev.slice(0, 1));
  };

  return (
    <Tippy
      interactive
      hideOnClick={hideOnClick}
      placement="bottom-end"
      offset={[12, 8]}
      render={renderResult}
      onHidden={handleReset}
    >
      {children}
    </Tippy>
  );
}

Menu.propTypes = {
  children: PropTypes.node.isRequired,
  items: PropTypes.array,
  hideOnClick: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Menu;

import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

type ButtonProps = {
  className?: string;
  to?: string;
  href?: string;
  primary?: boolean;
  outline?: boolean;
  outlinePrimary?: boolean;
  target?: string;
  small?: boolean;
  large?: boolean;
  disabled?: boolean;
  rounded?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onClick?: () => void;
  children: React.ReactNode;
};

function Button({
  className,
  to,
  href,
  primary = false,
  outline = false,
  outlinePrimary = false,
  small = false,
  large = false,
  disabled = false,
  rounded = false,
  leftIcon,
  rightIcon,
  onClick,
  children,
  ...passProps
}: ButtonProps) {
  const classes = cx("wrapper", {
    [className || ""]: className,
    primary,
    outline,
    outlinePrimary,
    small,
    large,
    disabled,
    rounded,
    leftIcon,
    rightIcon,
  });
  let Comp: React.ElementType = "button";
  //   const Comp: React.ElementType = to ? Link : href ? "a" : "button";

  const _props: { to?: string; href?: string; onClick?: () => void } = {
    onClick: disabled ? undefined : onClick,
    ...passProps,
  };

  if (to) {
    _props.to = to;
    Comp = Link;
  } else if (href) {
    _props.href = href;
    Comp = "a";
  }

  //   Remove event listener when btn is disabled
  if (disabled) {
    delete _props.onClick;
    delete _props.to;
    delete _props.href;
    // Object.keys(_props).forEach((key) => {
    //   if (key.startsWith("on") && typeof _props[key] === "function") {
    //     delete _props[key];
    //   }
    // });
  }

  return (
    <Comp className={classes} {..._props}>
      {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
      <span className={cx("title")}>{children}</span>
      {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}
    </Comp>
  );
}

export default Button;

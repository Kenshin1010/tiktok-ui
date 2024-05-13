import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";

import Header from "../components/Header/Header";
import Sidebar from "./Sibar/Sidebar";

export type DefaultLayoutProps = {
  children: React.ReactElement;
};

const cx = classNames.bind(styles);

function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>
        <Sidebar />
        <div className={cx("content")}>{children}</div>
      </div>
    </div>
  );
}
export default DefaultLayout;

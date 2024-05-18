import { Link } from "react-router-dom";
import minamiAizawaImage from "../../../assets/images/minami_aizawa_.webp";

import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";

import Image from "../../../components/Image/Image";
import config from "../../../config";
import ExploreActiveIcon from "../tsx-icon/ExploreActiveIcon";
import ExploreIcon from "../tsx-icon/ExploreIcon";
import HomeActiveIcon from "../tsx-icon/HomeActiveIcon";
import HomeIcon from "../tsx-icon/HomeIcon";
import LiveActiveIcon from "../tsx-icon/LiveActiveIcon";
import LiveIcon from "../tsx-icon/LiveIcon";
import UserGroupActiveIcon from "../tsx-icon/UserGroupActiveIcon";
import UserGroupIcon from "../tsx-icon/UserGroupIcon";
import UserPlusActiveIcon from "../tsx-icon/UserPlusActiveIcon";
import UserPlusIcon from "../tsx-icon/UserPlusIcon";
import Menu, { MenuItem } from "./Menu";
import SuggestAccounts from "../../../components/SuggestAccounts";

const cx = classNames.bind(styles);

function Sidebar() {
  const ProfileIcon = () => {
    return (
      <button className={cx("sidebar-avatar")}>
        <Image
          className={cx("profile-icon")}
          src={minamiAizawaImage}
          alt="相沢みなみ"
          fallback={minamiAizawaImage}
        />
      </button>
    );
  };
  return (
    <aside className={cx("wrapper")}>
      <Menu className={cx("sidebar-menu")}>
        <MenuItem
          title="For You"
          to={config.routes.home}
          icon={
            <span className={cx("sidebar-icon-wrapper")}>
              <HomeIcon />
            </span>
          }
          activeIcon={
            <span className={cx("sidebar-icon-wrapper")}>
              <HomeActiveIcon />
            </span>
          }
        />
        <MenuItem
          title="Following"
          to={config.routes.following}
          icon={
            <span className={cx("sidebar-icon-wrapper")}>
              <UserPlusIcon />
            </span>
          }
          activeIcon={
            <span className={cx("sidebar-icon-wrapper")}>
              <UserPlusActiveIcon />
            </span>
          }
        />
        <MenuItem
          title="Friends"
          to={config.routes.friends}
          icon={
            <span className={cx("sidebar-icon-wrapper")}>
              <UserGroupIcon />
            </span>
          }
          activeIcon={
            <span className={cx("sidebar-icon-wrapper")}>
              <UserGroupActiveIcon />
            </span>
          }
        />
        <MenuItem
          title="Explore"
          to={config.routes.explore}
          icon={
            <span className={cx("sidebar-icon-wrapper")}>
              <ExploreIcon />
            </span>
          }
          activeIcon={
            <span className={cx("sidebar-icon-wrapper")}>
              <ExploreActiveIcon />
            </span>
          }
        />
        <MenuItem
          title="LIVE"
          to={config.routes.live}
          icon={
            <span className={cx("sidebar-icon-wrapper")}>
              <LiveIcon />
            </span>
          }
          activeIcon={
            <span className={cx("sidebar-icon-wrapper")}>
              <LiveActiveIcon />
            </span>
          }
        />
        <MenuItem
          title="Profile"
          to={config.routes.profile}
          icon={
            <Link to={"/@:nickname"} className={cx("sidebar-icon-wrapper")}>
              <ProfileIcon />
            </Link>
          }
          activeIcon={
            <Link to={"/@:nickname"} className={cx("sidebar-icon-wrapper")}>
              <ProfileIcon />
            </Link>
          }
        />
      </Menu>
      <SuggestAccounts label="Suggested accounts"></SuggestAccounts>
      <SuggestAccounts label="Following accounts"></SuggestAccounts>
    </aside>
  );
}

export default Sidebar;

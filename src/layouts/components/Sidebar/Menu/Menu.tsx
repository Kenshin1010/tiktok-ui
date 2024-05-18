import PropTypes from "prop-types";

type MenuProps = {
  children: React.ReactNode;
};

function Menu({ children }: MenuProps) {
  return <nav>{children}</nav>;
}

Menu.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Menu;

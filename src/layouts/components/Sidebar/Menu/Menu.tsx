import PropTypes from "prop-types";

type MenuProps = {
  children: React.ReactNode;
  className?: string;
};

function Menu({ children, className }: MenuProps) {
  return <nav className={className}>{children}</nav>;
}

Menu.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Menu;

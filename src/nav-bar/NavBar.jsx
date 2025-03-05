import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to="/home"></Link>
      <Link to="/detail"></Link>
      <Link to="/404"></Link>
    </nav>
  );
};

export default NavBar;

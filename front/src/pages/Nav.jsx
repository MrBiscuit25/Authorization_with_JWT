import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <Link className="nav__link" to="/welcome">
            Back to Welcome
          </Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="/usersList">
            Back to Users List
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

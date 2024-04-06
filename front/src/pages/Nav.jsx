import { useDispatch } from "react-redux";
import { logOut } from "../store/authSlice";
import { Link } from "react-router-dom";
const Nav = () => {
  const dispatch = useDispatch();
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
        <li className="nav__item">
          <Link className="nav__link" to="/login" onClick={dispatch(logOut)}>
            Log out
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

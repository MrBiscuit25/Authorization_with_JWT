import { useSelector } from "react-redux";
import { selectCurrentUser, selectCurrentToken } from "../store/authSlice";
import { Link } from "react-router-dom";

const Welcome = () => {
  const user = useSelector(selectCurrentUser);
  const token = useSelector(selectCurrentToken);

  const welcome = user ? `Welcome email: ${user}!` : `Welcome!`;
  const tokenAbbr = `${token.slice(0, 9)}...`;

  const content = (
    <>
      <section className="welcome container">
        <h1>{welcome}</h1> <h2>Token: {tokenAbbr}</h2>
        <Link
          to="/info"
          style={{ color: "#FF9800", borderBottom: "1px solid black" }}
        >
          Follow to the Info Page
        </Link>
      </section>
    </>
  );
  return content;
};

export default Welcome;

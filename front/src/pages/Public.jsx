import { Link } from "react-router-dom";

const Public = () => {
  const content = (
    <section className="public container">
      <header>
        <h1>Welcome to the Home page of the JWT application</h1>
      </header>
      <main>
        <p>Located in beautiful Downtown Foo City, Repair Store</p>
      </main>
      <p>&nbsp;</p>
      <address>
        Repair Store <br />
        555 Foo Drive <br />
        Foo City, CA 12345 <br />
      </address>
      <footer>
        <Link
          to="/login"
          style={{ color: "#FF9800", borderBottom: "1px solid black" }}
        >
          Login
        </Link>
      </footer>
    </section>
  );

  return content;
};

export default Public;

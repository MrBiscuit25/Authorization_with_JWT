import { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../store/registerApiSlice";

const Register = () => {
  const userRef = useRef();
  const errRef = useRef();
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();
  const [register, { error }] = useRegisterMutation();

  useEffect(() => {}, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register({ email, pwd });
    setEmail("");
    setPwd("");
    navigate("/login");
  };

  const handleEmailInput = (e) => setEmail(e.target.value);
  const handlePwdInput = (e) => setPwd(e.target.value);

  const content = (
    <>
      <section>
        <p
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <form onSubmit={handleSubmit} className="sign-in__form form container">
          <img
            src="./assets/images/bg2.jpg"
            alt="women"
            className="login-image hidden-tablet"
          />
          <div className="sign-in__form-inner">
            <div className="form__title">Registration</div>
            <p className="form__info">
              Have you already been here ?{" "}
              <Link to="/login" className="form__info-registration">
                Authorize
              </Link>
            </p>
            <div className="field">
              <label htmlFor="email" className="field__label">
                Email:
              </label>
              <input
                ref={userRef}
                type="email"
                id="email"
                value={email}
                onChange={handleEmailInput}
                autoComplete="off"
                required
                className="field__control"
              />
            </div>
            <div className="field">
              <label htmlFor="password" className="field__label">
                Password:
              </label>
              <input
                type="password"
                id="password"
                value={pwd}
                onChange={handlePwdInput}
                required
                className="field__control"
              />
            </div>
            <button className="form__button button">Sign in</button>
          </div>
        </form>
      </section>
    </>
  );
  return content;
};

export default Register;

import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { setCredentials } from "../store/authSlice";
import { useLoginMutation } from "../store/authApiSlice";

const Login = () => {
  const userRef = useRef();
  const errRef = useRef();
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = await login({ email, pwd }).unwrap();
      dispatch(setCredentials({ email, ...userData }));
      setEmail("");
      setPwd("");
      navigate("/usersList");
    } catch (error) {
      if (!error?.originalStatus) {
        setErrMsg("No server response");
      } else if (error.originalStatus === 400) {
        setErrMsg("Missing Username or Password");
      } else if (error.originalStatus === 401) {
        setErrMsg("Unathorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  const handleEmailInput = (e) => setEmail(e.target.value);
  const handlePwdInput = (e) => setPwd(e.target.value);

  const content = isLoading ? (
    <h1>Loading ...</h1>
  ) : (
    <>
      <section>
        <form onSubmit={handleSubmit} className="sign-in__form form container">
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <img
            src="/assets/images/bg2.jpg"
            alt="women"
            className="login-image hidden-tablet"
          />
          <div className="sign-in__form-inner">
            <div className="form__title">Authentication</div>
            <p className="form__info">
              Do you already have account ?{" "}
              <Link to="/register" className="form__info-registration">
                Create Account
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

export default Login;

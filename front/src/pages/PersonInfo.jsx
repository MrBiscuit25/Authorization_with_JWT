import Nav from "./Nav";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../store/authSlice";

const PersonInfo = () => {
  const user = useSelector(selectCurrentUser);
  console.log(user);
  return (
    <>
      <Nav />
      <section className="hero container">
        <div className="hero__info">
          <div className="hero__title">
            Hi, I am {user}, Creative Technologist
          </div>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <button className="hero__button button">Download Resume</button>
        </div>
        <div className="hero__image-wrapper">
          <img
            src="../assets/images/smile.png"
            width="243"
            height="243"
            alt="smiling man"
            className="hero__image"
          />
        </div>
      </section>

      <section className="posts container">
        <header className="posts__header">
          <div className="posts__title">Recent posts</div>
          <div className="posts__view-all">View all</div>
        </header>
        <div className="posts__cards">
          <div className="posts__card">
            <div className="posts__card-title">
              Making a design system from scratch
            </div>
            <div className="posts__card-tags">
              <time dateTime="2020-02-12">12 Feb 2020</time>
              <span>|</span>
              Design, Pattern
            </div>
            <div className="posts__card-description">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </div>
          </div>
          <div className="posts__card">
            <div className="posts__card-title">
              Creating pixel perfect icons in Figma
            </div>
            <div className="posts__card-tags">
              <time dateTime="2020-02-12">12 Feb 2020</time>
              <span>|</span>
              Figma, Icon Design
            </div>
            <div className="posts__card-description">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </div>
          </div>
        </div>
      </section>

      <section className="works container">
        <div className="works__title section-title">Featured works</div>
        <div className="works__cards">
          <div className="works__card">
            <div className="works__card-image-wrapper">
              <img
                src="../assets/images/works/1.png"
                width="246"
                height="180"
                alt=""
                className="works__card__image"
              />
            </div>
            <div className="works__card-content">
              <div className="works__card-title">Vibrant Portraits of 2020</div>
              <div className="works__card-tags">
                <time dateTime="2020">2018</time>
                <span className="tag">Illustration</span>
              </div>
              <div className="works__description">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </div>
            </div>
          </div>
          <div className="works__card">
            <div className="works__card-image-wrapper">
              <img
                src="../assets/images/works/3.png"
                width="246"
                height="180"
                alt=""
                className="works__card__image"
              />
            </div>
            <div className="works__card-content">
              <div className="works__card-title">36 Days of Malayalam type</div>
              <div className="works__card-tags">
                <time dateTime="2020">2018</time>
                <span className="tag">Typography</span>
              </div>
              <div className="works__description">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </div>
            </div>
          </div>
          <div className="works__card">
            <div className="works__card-image-wrapper">
              <img
                src="../assets/images/works/1.png"
                width="246"
                height="180"
                alt=""
                className="works__card__image"
              />
            </div>
            <div className="works__card-content">
              <div className="works__card-title">Designing Dashboards</div>
              <div className="works__card-tags">
                <time dateTime="2020">2020</time>
                <span className="tag">Dashboard</span>
              </div>
              <div className="works__description">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer__inner">
          <div className="footer__soc1als">
            <img
              src="../assets/icons/facebook.svg"
              width="30"
              height="30"
              alt="facebook"
              className="footer__soc1als-icon"
            />
            <img
              src="../assets/icons/instagram.svg"
              alt="instagram"
              width="30"
              height="30"
              className="footer__soc1als-icon"
            />
            <img
              src="../assets/icons/twitter.svg"
              width="37"
              height="30"
              alt="twitter"
              className="footer__soc1als-icon"
            />
            <img
              src="../assets/icons/Linkedin.svg"
              width="30"
              height="30"
              alt="Linkedin"
              className="footer__soc1als-icon"
            />
          </div>
          <div className="footer__copyright">
            Copyright ©2020 All rights reserved
          </div>
        </div>
      </footer>
    </>
  );
};

export default PersonInfo;

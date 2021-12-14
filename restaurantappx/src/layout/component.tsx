import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import images from "../assets";
import { loadingSelector } from "../redux/ui/selectors";
import { loginRequested, logoutSuccess } from "../redux/user/actions";

import Lottie, { Options } from "react-lottie";
import { userTokenSelector } from "../redux/user/selectors";
import "./styles.css";
import burger from "../assets/lottie/burger.json";
import { Link } from "react-router-dom";

const Layout: FC = ({ children }) => {
  const { BurgerLogo, FacebookLogo, InstagramLogo, YoutubeLogo } =
    images; /* Burger no se necesita porque se importa directamente de css*/

  const loading = useSelector(loadingSelector);
  const tokenUser = useSelector(userTokenSelector);

  const defaultOptions: Options = {
    loop: true,
    autoplay: true,
    animationData: burger,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  function deleteLocalStorage() {
    localStorage.removeItem("persist:root");
    sessionStorage.removeItem("persist:root");
    window.location.reload();
  }

  return (
    <div className="restaurant-container">
      {loading ? (
        <div className="loader-container">
          <Lottie
            speed={2.2}
            options={defaultOptions}
            height={400}
            width={400}
          />
          <p>Loading...</p>
        </div>
      ) : null}
      <header className="restaurant-header">
        <Link to="/">
          <BurgerLogo className="restaurant-logo" />
        </Link>
        <ul className="restaurant-firstMenu">
          <Link to="/products">
            <li className="clickable">Menu</li>
          </Link>
          <Link to="/locations">
            <li className="clickable">Locations</li>
          </Link>
          <li className="clickable">ClubHouse</li>
        </ul>
        <ul className="restaurant-secondMenu">
          <li className="clickable">The front yard</li>
          <li className="clickable">Own a BYB</li>
          <li className="clickable">Contact</li>
          {!tokenUser ? (
            <li className="clickable">
              <Link to="/Login">Login in/Sign in</Link>
            </li>
          ) : (
            <li className="clickable" onClick={deleteLocalStorage}>
              <Link to="/">Logout</Link>
            </li>
          )}
        </ul>
      </header>
      <div className="restaurant-content">{children}</div>
      <footer className="restaurant-footer">
        <ul className="footer-greyList">
          <li className="clickable">Catering</li>
          <li className="clickable">Community</li>
          <li className="clickable">Restaurant resources</li>
        </ul>
        <ul className="footer-greyList">
          <li className="clickable">Careers</li>
          <li className="clickable">Press</li>
        </ul>
        <div>
          <img
            className="social-media-logo clickable"
            alt="InstagramLogo"
            src={InstagramLogo}
          />
          <img
            className="social-media-logo clickable"
            alt="FacebookLogo"
            src={FacebookLogo}
          />
          <img
            className="social-media-logo clickable"
            alt="YoutubeLogo"
            src={YoutubeLogo}
          />
        </div>
        <ul className="footer-second-greyList">
          <li className="clickable">{"Terms & conditions"}</li>
          <li className="clickable">Privacy Policy</li>
        </ul>
        <div className="footer-rights">
          <p>© 2021 Carl's jr.</p>
          <p>All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

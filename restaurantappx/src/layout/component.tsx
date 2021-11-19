import { FC } from "react";
import images from "../assets";
import "./styles.css";

const Layout: FC = ({ children }) => {
  const {
    BurgerLogo,
    FacebookLogo,
    InstagramLogo,
    YoutubeLogo,
  } = images; /* Burger no se necesita porque se importa directamente de css*/

  return (
    <div className="restaurant-container">
      <header className="restaurant-header">
        <BurgerLogo className="restaurant-logo" />
        <ul className="restaurant-firstMenu">
          <li className="clickable">Menu</li>
          <li className="clickable">Locations</li>
          <li className="clickable">ClubHouse</li>
        </ul>
        <ul className="restaurant-secondMenu">
          <li className="clickable">The front yard</li>
          <li className="clickable">Our story</li>
          <li className="clickable">Own a BYB</li>
          <li className="clickable">Contact</li>
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

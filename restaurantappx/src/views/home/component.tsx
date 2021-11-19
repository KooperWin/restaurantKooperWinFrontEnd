import { FC } from "react";
import "./styles.css";
import { MdLocationOn } from "react-icons/md";
import { GrFlagFill } from "react-icons/gr";
import images from "../../assets";

const Home: FC = () => {
  const { HamburgerTransparent, BurguerIso,IceCream,NoKidHungryLogo} = images;

  return (
    <div className="home-container">
      <div className="product-section-1">
        <div className="section1-content">
          <p className="section-title">Eat better</p>
          <p className="section-title">burgers</p>
          <button className="button Our-burgers-button">
            <span>View our burgers</span>
          </button>
        </div>
      </div>
      <div className="info-section-1">
        <div className="info-section-1-content-1">
          <MdLocationOn />
          <span>Burger Locator</span>
        </div>
        <div className="info-section-1-content-2">
          <p>Restaurant hours. Local menus. Catering options.</p>
          <p>Find burgers, chicken sandwiches, milkshakes and more</p>
        </div>
        <button className="info-section-1-content-3 button">
          Find Burgers
        </button>
      </div>
      <div className="half-section-1">
        <img
          className="hamburger-half"
          alt="Hamburger not load :c"
          src={HamburgerTransparent}
        />
        <div className="half-section-1-content">
          <div className="new-announcement">
            <p>New</p>
          </div>
          <p className="half-product-name">
            Black <br />
            Jack
            <br />
            Chicken
            <br />
            Club
          </p>
          <p className="half-product-description">
            Blackened chicken. Peper jack chesse. Beacon. Creole mayo. No, we
            are not bluffing...
          </p>
          <a className="link find-more">Find out more</a>
        </div>
      </div>
      <div className="half-section-2">
        <BurguerIso />
        <p className="clubhouse-title">
          Get a <br />
          Free Burger
        </p>
        <p className="clubhouse-description">
          Be the first to know about our newest menu items and latest offers.
          More food. Less money. Commence mouthwatering.
        </p>
        <button className="button-join-club button">join the clubhouse</button>
      </div>
      <div className="product-section-2">
        <div className="product-section-2-content">
          <p className="product-section-2-title">
            HELP US <br />
            END <br />
            CHILDHOOD <br />
            HUNGER
          </p>
          <p className="product-section-2-description">
            At Back Yard Burgers we are proud to partner with No Kid Hungry in a
            commitment …
            <a className="find-more-ice-cream link">Find out more</a>
          </p>
        </div>
        <img
          className="ice-cream"
          alt="ice creams doesn't load :c"
          src={IceCream}
        />
        <div className="product-section-2-noKid">
          <NoKidHungryLogo />
          <p>*at participating locations</p>
        </div>
      </div>
      <div className="info-section-2">
        <div className="info-section-2-content-1">
          <GrFlagFill />
          <span>own a byb</span>
        </div>
        <div className="info-section-2-content-2">
          <p>Love our burgers? Now is the time to explore adding</p>
          <p>Back Yard Burgers to your portfolio.</p>
        </div>
        <button className="info-section-2-content-3 button">
          Join the family
        </button>
      </div>
      <div className="product-section-3">
        <div className="cool-phrase-container">
          <p className="phrase-title">{'"we have cole slaw!"'}</p>
          <p className="phrase-ref">@BurgerKingMX</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
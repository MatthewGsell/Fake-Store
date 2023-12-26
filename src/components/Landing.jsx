import { Link } from "react-router-dom";
import LandingCss from "./Landing.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedhat } from "@fortawesome/free-brands-svg-icons";
import { faShoePrints, faShirt } from "@fortawesome/free-solid-svg-icons";

function Landing() {

  return (
    <div className={LandingCss.landingpagemain}>
      <div className={LandingCss.titlediv}>
        <h1 className={LandingCss.h1}>The Men and Womens Clothes Store</h1>
        <FontAwesomeIcon icon={faRedhat} className={LandingCss.iconhat} />
        <FontAwesomeIcon icon={faShirt} className={LandingCss.iconshirt} />
        <FontAwesomeIcon icon={faShoePrints} className={LandingCss.iconshoe} />
      </div>
      <h3 className={LandingCss.h3}>
        You won't be able to guess what products we sell!
      </h3>
      <h6 className={LandingCss.h6}>Click shop no to see our collecton</h6>
      <Link to="store">
        <button className={LandingCss.button}>Shop Now!</button>
      </Link>
    </div>
  );
}

export default Landing;

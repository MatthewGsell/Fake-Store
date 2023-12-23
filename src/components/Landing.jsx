
import { Link } from "react-router-dom"
import LandingCss from './Landing.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRedhat } from "@fortawesome/free-brands-svg-icons"
import { faShoePrints, faShirt } from "@fortawesome/free-solid-svg-icons"
function Landing () {
    return (
        <div className={LandingCss.landingpagemain}>
    <div><h1>The Shoe Hat and Shirt Store</h1>
    <FontAwesomeIcon icon={faRedhat} />
    <FontAwesomeIcon icon={faShoePrints} />
    <FontAwesomeIcon icon={faShirt} />
</div>
    <h3>You won't be able to guess what products we sell!</h3>
    <h6>Click shop no to see our collecton</h6>
    <Link to="store"><button>Shop Now!</button></Link>
    </div>
    )
}

export default Landing 
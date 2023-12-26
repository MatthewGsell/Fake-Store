import { Link, Outlet } from "react-router-dom";
import Storecss from "./Store.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

function Store() {
  return (
    <div className={Storecss.main}>
      <div className={Storecss.topbar}>
        <h1>Browse Our Absolutely 100 Percent Original Collection</h1>
        <div className={Storecss.choices}>
          <div className={Storecss.choice}>
            <Link to="mens">
              <span>Shop Mens</span>
            </Link>
          </div>
          <div className={Storecss.choice}>
            <Link to="womens">
              <span>Shop Womens</span>
            </Link>
          </div>
          <div className={Storecss.shoppingbag}>
            <p>
              Click Here<br></br>to<br></br>Checkout!
            </p>
            <FontAwesomeIcon icon={faBagShopping} />
          </div>
        </div>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default Store;

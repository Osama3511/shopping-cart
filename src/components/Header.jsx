import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import getProductAmount from "../scripts/getProductAmount";
import { FaShoppingCart } from "react-icons/fa";
import "../styles/header.css";

function Header({ products }) {
  const productAmount = getProductAmount(products);
  return (
    <header className="header">
      <nav className="navbar">
        <h1 className="logo">
          <Link to="/">Fake Store</Link>
        </h1>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="products">Products</Link>
          </li>
          <li>
            <Link to="cart">
              <FaShoppingCart className="cart-icon" /> Cart ({productAmount})
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

Header.propTypes = {
  products: PropTypes.array,
};

export default Header;

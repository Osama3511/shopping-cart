import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import getProductAmount from "../scripts/getProductAmount";
function Header({ products }) {
  const productAmount = getProductAmount(products);
  return (
    <header>
      <nav>
        <h1>
          <Link to="/">fake store</Link>
        </h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="products">Products</Link>
          </li>
          <li>
            <Link to="cart">Cart {productAmount}</Link>
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

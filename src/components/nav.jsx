import { Link } from "react-router-dom";
function Nav() {
  return (
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
          <Link to="cart">Cart</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;

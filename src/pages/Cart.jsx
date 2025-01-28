import { useOutletContext } from "react-router-dom";
import CartProduct from "../components/CartProduct";
import getTotalPrice from "../scripts/getTotalPrice";
import "../styles/cart.css";

function Cart() {
  const { products, setProducts } = useOutletContext();
  const total = getTotalPrice(products);

  if (!products.length) {
    return <span className="cart-empty">Cart is empty</span>;
  }

  return (
    <section className="cart-container">
      {products.map((product) => (
        <CartProduct
          key={product.title}
          product={product}
          onClick={setProducts}
        />
      ))}
      <div className="cart-footer">
        <p className="cart-total">Total: ${total}</p>
        <button className="cart-order-button">Order</button>
      </div>
    </section>
  );
}

export default Cart;

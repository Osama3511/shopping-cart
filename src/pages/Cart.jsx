import { useOutletContext } from "react-router-dom";
import CartProduct from "../components/CartProduct";
import getTotalPrice from "../scripts/getTotalPrice";

function Cart() {
  const { products, setProducts } = useOutletContext();
  const total = getTotalPrice(products);

  if (!products.length) {
    return <span>Cart is empty</span>;
  }

  return (
    <section>
      {products.map((product) => {
        return (
          <CartProduct
            key={product.title}
            product={product}
            onClick={setProducts}
          />
        );
      })}
      <p>{total}</p>
      <button>Order</button>
    </section>
  );
}

export default Cart;

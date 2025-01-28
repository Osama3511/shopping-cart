import PropTypes from "prop-types";
import updateProductsAmount from "../scripts/updateProductAmount";

function CartProduct({ product, onClick }) {
  const { image, title, price, amount } = product;

  const handleDelete = () => {
    onClick((prevProducts) => {
      const newProducts = prevProducts.filter(
        (item) => item.title !== product.title
      );

      return newProducts;
    });
  };

  const handleIncrease = () => {
    onClick((prevProducts) => {
      const updatedProducts = updateProductsAmount(prevProducts, product, 1);

      return updatedProducts;
    });
  };

  const handleDecrease = () => {
    if (product.amount > 1) {
      onClick((prevProducts) => {
        const updatedProducts = updateProductsAmount(prevProducts, product, -1);

        return updatedProducts;
      });
    }
  };

  return (
    <div>
      <img src={image} alt={title} width={"100px"} height={"100px"} />
      <p>{title}</p>
      <p>{price}</p>
      <div>
        <button onClick={handleDecrease}>-</button>
        <p>{amount}</p>
        <button onClick={handleIncrease}>+</button>
      </div>
      <button onClick={handleDelete}>delete</button>
    </div>
  );
}

CartProduct.propTypes = {
  product: PropTypes.object,
  onClick: PropTypes.func,
};

export default CartProduct;

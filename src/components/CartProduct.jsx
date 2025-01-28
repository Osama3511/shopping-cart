import PropTypes from "prop-types";
import updateProductsAmount from "../scripts/updateProductAmount";
import "../styles/cartProduct.css";

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
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-details">
        <div className="card-info">
          <p className="card-title">{title}</p>
          <p className="card-price">${price}</p>
        </div>
        <div className="card-actions">
          <button className="card-button" onClick={handleDecrease}>
            -
          </button>
          <p className="card-amount">{amount}</p>
          <button className="card-button" onClick={handleIncrease}>
            +
          </button>
          <button className="card-delete" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

CartProduct.propTypes = {
  product: PropTypes.object,
  onClick: PropTypes.func,
};

export default CartProduct;

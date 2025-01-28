import PropTypes from "prop-types";
import { useState } from "react";
import updateProductsAmount from "../scripts/updateProductAmount";
import "../styles/card.css"

function Card({ product, onClick }) {
  const [inputVal, setInputVal] = useState(1);
  const { image, title, price } = product;

  const handleAddToCart = () => {
    const amount = Number(inputVal);

    onClick((prevProducts) => {
      if (!prevProducts.some((item) => item.title === product.title)) {
        return [...prevProducts, { ...product, amount }];
      }

      const updatedProducts = updateProductsAmount(
        prevProducts,
        product,
        amount
      );

      return updatedProducts;
    });

    setInputVal(1);
  };

  const handleIncrease = () => {
    setInputVal(+inputVal + 1);
  };

  const handleDecrease = () => {
    if (inputVal > 1) {
      setInputVal(+inputVal - 1);
    }
  };

  const handleChange = (e) => {
    setInputVal(e.target.value);
  };


  return (
    <div className="product-card">
      <img className="product-image" src={image} alt={title} />
      <span className="product-title">{title}</span>
      <p className="product-price">${price}</p>
      <div className="quantity-container">
        <button className="quantity-button" onClick={handleDecrease}>
          -
        </button>
        <input
          className="quantity-input"
          type="number"
          onChange={(e) => handleChange(e)}
          value={inputVal}
          name="amount"
        />
        <button className="quantity-button" onClick={handleIncrease}>
          +
        </button>
      </div>
      <button className="add-to-cart-button" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}

Card.propTypes = {
  product: PropTypes.object,
  onClick: PropTypes.func,
};

export default Card;

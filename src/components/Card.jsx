import PropTypes from "prop-types";
import { useState } from "react";
import updateProductsAmount from "../scripts/updateProductAmount";

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

  const imgStyle = {
    width: "100px",
    height: "100px",
  };

  return (
    <div>
      <img style={imgStyle} src={image} alt={title} />
      <span>{title}</span>
      <p>{price}</p>
      <div>
        <button onClick={handleDecrease}>-</button>
        <input
          type="number"
          onChange={(e) => handleChange(e)}
          value={inputVal}
          name="amount"
        />
        <button onClick={handleIncrease}>+</button>
      </div>
      <button onClick={handleAddToCart}>Add to cart</button>
    </div>
  );
}

Card.propTypes = {
  product: PropTypes.object,
  onClick: PropTypes.func,
};

export default Card;

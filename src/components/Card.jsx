import PropTypes from "prop-types";
function Card({ src, title, price }) {
  const imgStyle = {
    width: "100px",
    height: "100px"
  }

  return (
    <div>
      <img style={imgStyle} src={src} alt={title} />
      <span>{title}</span>
      <p>{price}</p>
      
    </div>
  );
}

Card.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Card;

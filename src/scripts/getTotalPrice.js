function getTotalPrice(products) {
  let total = 0;
  for (const product of products) {
    total += Number(product.price) * Number(product.amount);
  }

  return Math.round(total);
}

export default getTotalPrice;

function updateProductsAmount(products, product, newAmount) {
  const updatedProducts = products.map((item) =>
    item.title === product.title
      ? { ...item, amount: item.amount + newAmount }
      : item
  );

  return updatedProducts;
}

export default updateProductsAmount;

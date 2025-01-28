function getProductAmount(products) {
  let amount = 0;
  for (const product of products) {
    amount += product.amount;
  }

  return amount;
}

export default getProductAmount;

class ShoppingCart {
  constructor(name, quantity, pricePerUnit) {
    this.productArr = [];
    this.name = name;
    this.quantity = quantity;
    this.pricePerUnit = pricePerUnit;
  }
  getItems() {
    return this.productArr;
  }
  addItem(name, quantity, pricePerUnit) {
    this.productArr.push({
      name,
      quantity,
      pricePerUnit
    });
  }
  clear() {
    this.productArr = [];
  }
  total() {
    return this.productArr.reduce(
      (acc, product) => acc + product.pricePerUnit * product.quantity,
      0
    );
  }
}

module.exports = ShoppingCart;

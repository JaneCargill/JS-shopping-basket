var tenPercDisc = {
  discount: function(basket) {
  if (basket.totalOfItems() > 20) {
    var discount = basket.totalOfItems() * 0.1;
    console.log("discount", discount);
    basket.price = basket.totalOfItems() - discount;
    }
  return basket.price;
  }
}

module.exports = tenPercDisc;
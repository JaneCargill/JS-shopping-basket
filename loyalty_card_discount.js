var loyaltyCardDisc = {
  discount: function(basket) {
  if (basket.loyaltyCardDisc = true) {
    var discount = basket.price * 0.05;
    basket.price = basket.price - discount;
  }else{
      return basket.price;
    }
  }
}

module.exports = loyaltyCardDisc;
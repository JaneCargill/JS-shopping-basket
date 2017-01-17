var shoppingBasket = {
  price: 0,
  loyaltyCard: Boolean,
  items: [],
  addItems: function(item) {
    this.items.push(item);
  },
  removeItems: function() {
    this.items.pop();
  },
  totalOfItems: function() {
    var total = 0
    for(var item of this.items) {
      total += item.price;
    }
    return total;
  }
 

};

module.exports = shoppingBasket;
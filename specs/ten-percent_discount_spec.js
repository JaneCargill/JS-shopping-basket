var tenPercDisc = require('../ten_perc_disc');
var basket = require('../shopping_basket');
var item = require('../item');
var assert = require('assert');
var item1 = new item("cheese", 5.50, true);
var item2 = new item("bread", 1.20, true);
var item3 = new item("ham", 3.20, false);
var item4 = new item("butter", 2.00, false);
var item5 = new item("wine", 25.00, false);
// var basket = new basket;


describe('Ten percent discount', function() {
  beforeEach(function(){
    basket.items = [];
  });
    it('ten percent discount when total > 20', function() {
      basket.addItems(item1);
      basket.addItems(item5);
      assert.equal(27.45, tenPercDisc.discount(basket));
    });
});
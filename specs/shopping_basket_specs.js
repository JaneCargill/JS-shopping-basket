var basket = require('../shopping_basket');
var item = require('../item');
var assert = require('assert');
var item1 = new item("cheese", 5.50, true);
var item2 = new item("bread", 1.20, true);
var item3 = new item("ham", 3.20, false);
var item4 = new item("butter", 2.00, false);
var item5 = new item("wine", 25.00, false)


describe('Shopping basket', function() {
  beforeEach(function(){
    basket.items = [];
    basket.loyaltyCard = true;
    basket.price = 0;
  });
  it('price should start at 0', function() {
    assert.equal(0, basket.price);
    });

  it('basket has loyalty card', function() {
    assert.equal(true, basket.loyaltyCard);
  });

  it('basket starts empty', function() {
    assert.equal(0, basket.items.length);
    });

  it('basket can add item', function() {
    basket.addItems(item);
    basket.addItems(item2);
    assert.equal(2, basket.items.length);
  });

  it('basket can remove item', function() {
    basket.addItems(item);
    basket.addItems(item2);
    basket.removeItems();
    assert.equal(1, basket.items.length);
  });

  it('total of items in basket', function() {
    basket.addItems(item1);
    basket.addItems(item2);
    basket.addItems(item3);
    assert.equal(9.90, basket.totalOfItems());
  });

  it('total of items in basket', function() {
    basket.addItems(item1);
    basket.addItems(item5);
    assert.equal(30.5,  basket.totalOfItems());
  });

  });
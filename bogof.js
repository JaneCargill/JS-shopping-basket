var bogof = {
  discount: function bogofDeal(items, basket) {
    var basketBogof = []
    for(var item of items) {
  if (item.bogof) {
     basketBogof.push(item.price);
    }
  }
  
  // var basketBogof = basket.filter(bogofDeal);
  basketBogof.sort();
  var size = basketBogof.length;
  if(size % 2 === 0) {
     size;
  }else{
    basketBogof.pop();
    size -+ 1;
  }
  console.log("size", size);
  var free = 0  
  for( var i = 0; i <= size/2; i++){
    free += i;
  }

 basket.price =  basket.price -= free;
 return basket.price;

}


}

module.exports = bogof;
// Remove Items From Cart
$('a.remove').click(function(){
    event.preventDefault();
    $( this ).parent().parent().parent().hide( 400 );
   
  })
  
  // Just for testing, show all items
    $('a.btn.continue').click(function(){
      $('li.items').show(400);
    })
  
  
    const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const quantityBtn = document.getElementById('quantity');
const prodTotal = document.getElementById('prodTotal');
const price = document.getElementById('price');

let count = 0;
let priceNum = parseFloat(price.innerText);
let quantityBtnNum = parseFloat(quantityBtn.innerText);
console.log('Initial priceNum:', priceNum);

incrementBtn.addEventListener('click', () => {
  count++;
  quantityBtn.innerText = count;
});

decrementBtn.addEventListener('click', () => {
  if (count > 0) {
    count--;
    quantityBtn.innerText = count;
    prodTotal.innerText = (priceNum * count).toFixed(2); 
  }
});

    

    
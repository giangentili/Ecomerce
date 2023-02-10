// cart

let cartIcon = document.querySelector('#cart-icon')
let cart = document.querySelector('.cart')
let closeCart = document.querySelector('#close-cart')
//Open cart
cartIcon.onclick = () =>
{
    cart.classList.add("active");
}
//Close cart
closeCart.onclick = () =>
{
    cart.classList.remove("active");
}

// Cart Working Js

if(document.readyState == 'loading')
{
    document.addEventListener('DOMContentLoaded',ready);
}
else
{
    ready();
}

//Making Function
function ready()
{
 //remove items
 let removeCartButtons = document.getElementsByClassName("cart-remove");
 console.log(removeCartButtons);
 for(let i=0;i<removeCartButtons.length;i++)
 {
    let button = removeCartButtons[i]
    button.addEventListener("click", removeCartItem);
 }

 // Quantity Changes
  let quantityInputs = document.getElementsByClassName("cart-quantity");
  for(let i=0;i<quantityInputs.length;i++)
  {
    let input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }
  // Add to Cart
  let addCart = document.getElementsByClassName("add-cart")
  for ( let i=0; i<addCart.length;i++)
  {
let button = addCart[i];
button.addEventListener("click", addCartClicked);
  }
}

// Buy button work

//document.getElementsByClassName("btn-buy")[0].addEventListener("clcik", buyButtonClicked);




// Remove items from Cart

function removeCartItem(event)
{
    let buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updateTotal();
}

// Quantity Changes
function quantityChanged(event)
{
    let input = event.target;
    if (isNaN(input.value) || input.value <= 0 )
    {
        input.value = 1;
    }                  
    updateTotal();
}

//Add to cart

function addCartClicked(event)
{
    let button = event.target;
    let shopProducts = button.parentElement;
    let title = shopProducts.getElementsByClassName("product-title")[0].innerText;
    let price = shopProducts.getElementsByClassName("price")[0].innerText;
    let productImg = shopProducts.getElementsByClassName("product-img")[0].src;

    addProductToCart(title,price,productImg);
    updateTotal();
}

function addProductToCart(title,price,productImg)
{
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add("cart-box");
    var cartItems = document.getElementsByClassName("cart-content")[0];
    var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
    for(var i=0;i<cartItemsNames.length;i++){
        if (cartItemsNames[i].innerText == title)
        {
            alert("You have already add this item to the cart");
            return;
        }
    }

}






//Update Total

function updateTotal()
{
   let cartContent = document.getElementsByClassName('cart-content')[0]
   let  cartBoxes = cartContent.getElementsByClassName('cart-box')
   let total = 0;
   for(let i=0;i<cartBoxes.length;i++)
   {
        let cartBox= cartBoxes[i]
        let priceElement = cartBox.getElementsByClassName('cart-price')[0]
        let quantityElement = cartBox.getElementsByClassName('cart-quantity')[0]
        let price = parseFloat(priceElement.innerText.replace("$",""));
        let quantity = quantityElement.value
        total= total+( price * quantity);
        // if price contain some cents value
        total = Math.round(total *100)/100;

        document.getElementsByClassName('total-price')[0].innerText = '$' + total;
   }
}
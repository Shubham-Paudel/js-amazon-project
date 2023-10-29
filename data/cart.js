export let cart = [
  {
    productId:  "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity: 2
  },
  {
    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity: 1
  }

];

export function addtoCart(productId)
  {
    let matchingItem;
        

      let qty = document.querySelector(`.js-quantity-selector-${productId}`);

      let qtyValue = Number(qty.value);

      cart.forEach((cartItem)=>
      {
        if(productId === cartItem.productId)
        {
          matchingItem = cartItem;
        }
      });

      if(matchingItem)
      {
        matchingItem.quantity += qtyValue;
      }
      else{
        cart.push({
          productId: productId,
          quantity: qtyValue
        });
      };
  }

  export function removeFromCart(productId)
  {
    let newCart = [];

    cart.forEach((cartItem) => 
    {
      if(cartItem.productId !== productId)
      {
        newCart.push(cartItem);
      }
    });

  cart = newCart;

  }
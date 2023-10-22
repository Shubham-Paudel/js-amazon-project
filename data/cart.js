export const cart = [

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

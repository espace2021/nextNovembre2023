"use client";

import React,{ useState } from "react";

import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

import { useShoppingCart } from "use-shopping-cart" ;

const CartProductItem= ({product})=> {
   
  const { addItem  } = useShoppingCart();

  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
    redirect('/signin?callbackUrl=/client/cartProducts')
    }
  })
 

    const [quantity, setQuantity] = useState(1);

    const decreaseQuantity = () => {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    };
  
    const increaseQuantity = () => {
      setQuantity(quantity + 1);
    };

    const addToCart = () => {
      
      const target = { 
        id:product._id,
      title:  product.designation,
      image: product.imageart,
      price : product.prix,
      quantity : quantity,
      count:quantity
      };
            addItem(target);
      console.log('Item added to cart:', target);
     
       // We are adding this line, which resets the quantity back to 1
      setQuantity(1);
    };
    
    return ( 

<article className="col-sm-3">
  <div className="card">
    <img
      src={product?.imageart}
      className="card-img-top p-5"
      alt={product.designation}
    />
  </div>
  <div>
 <div>{product.designation}</div>
 <div>Prix : {product.prix} TND </div>
 <div>
    <button
      onClick={decreaseQuantity}
      className="btn btn-default"
    >
      -
    </button>
    <span>{quantity}</span>
    <button
      onClick={increaseQuantity}
      className="btn btn-default"
    >
      +
    </button>
  </div>
  </div>
  <div className="text-center">
  <button className="btn btn-warning" onClick={() => addToCart()}>
    Add to cart
  </button>
  </div>
</article>

    );
}
export default CartProductItem;
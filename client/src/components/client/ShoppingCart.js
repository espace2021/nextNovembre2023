"use client";
import { useState } from "react";
import CartItem from "./CartItem";
import { useShoppingCart } from "use-shopping-cart";

export default function ShoppingCart() {
    
    const { shouldDisplayCart,cartDetails,totalPrice } = useShoppingCart();
console.log(cartDetails)
    const [status, setStatus] = useState("idle");
  return (
    <div
      className={`${
        shouldDisplayCart ? "opacity-100" : "opacity-0"
      }`}
    >
      {cartDetails ? (
        <> 
          {
          Object.values(cartDetails ?? {}).map((item) => (
            <CartItem item={item} key={item.id} />
          ))}
                <article className="mt-3 flex flex-col">
                  Total : {totalPrice}
                   <button>
                     {status !== "loading" ? "Proceed to checkout" : "Loading..."}
                  </button>
               </article>
        </>
      ) : (
        <div className="p-5">You have no items in your cart</div>
      )
      }
    </div>
    
  );
    }
  

import Image from "next/image";
import { useShoppingCart } from "use-shopping-cart" ;

export default function CartItem({ item }) {
    const { removeItem } = useShoppingCart();
  const { title, image, quantity, price } = item;
  
  const removeItemFromCart = () => {
    removeItem(item.id);
  };


  return (
    <div className="column">
      <p>
                    <img
                    src={image}
                    width={40} height={40} 
                    alt={title}
                   />
                   </p>
      
       {title} <span> Quantity : ({quantity})</span>
      Price : {price} TND
      <button className="btn btn-default" onClick={() => removeItemFromCart()}>
        <Image alt="delete icon" src="/images/trash.png" width={25} height={25} />
      </button>
    </div>
  );
}

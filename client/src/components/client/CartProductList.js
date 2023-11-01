'use client';
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { useShoppingCart } from "use-shopping-cart" ;

const CartProductList=  async ({products})=> {
   
  const { addItem } = useShoppingCart();

  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
    redirect('/signin?callbackUrl=/client/cartProducts')
    }
  })

const addToCart = (product) => {
      
      const target = { 
      id:product._id,
      title:  product.designation,
      image: product.imageart,
      price : product.prix,
      qtestock : product.qtestock,
      quantity : 1
      };
      addItem(target);
      console.log('Item added to cart:', target);
     
    };

       return ( 
        <div className="row">
            {products && products?.map((product) => (
              
              <article className="col-sm-3">
              <div className="card">
                <img
                  src={product?.imageart}
                  className="card-img-top p-5"
                  alt={product.designation}
                />
              </div>
             <div className="text-center">
             <div>{product.designation}</div>
             <div>Prix : {product.prix} TND </div>
             </div>
              <div className="text-center">
              <button className="btn btn-warning" onClick={() => addToCart(product)}>
                Add to cart
              </button>
              </div>
            </article>
            
             
            ))}
          </div>
       );
}

export default CartProductList;

import CartProductItem from "./CartProductItem";
const CartProductList=  async ({products})=> {
   
       return ( 
        <div className="row">
            {products && products?.map((product) => (
              
              <CartProductItem key={product?._id} product={product} />
             
            ))}
          </div>
       );
}

export default CartProductList;

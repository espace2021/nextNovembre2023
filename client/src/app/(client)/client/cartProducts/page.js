import CartProductList from '@/components/client/CartProductList';

import {fetchArticles} from "@/services/ArticlesService"
const getProducts=async()=>{
const {data}=await fetchArticles();
return data
};

const CartProductsPage= async ()=> {
    const products = await getProducts();

    return ( 
      <>
     
      <CartProductList products={products} />
  
     </>

    )
}

export default CartProductsPage;

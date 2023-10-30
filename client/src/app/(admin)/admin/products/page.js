import React  from 'react';

//import Listproducts from '@/components/admin/Listproducts';

import Listproducts from '@/components/admin/listeDesProduits';

import {fetchArticles} from "@/services/ArticlesService"

const getProducts=async()=>{
const data=await fetchArticles()
.then((results)=>{return results.data})
.catch((err)=>{console.log(err)})
//console.log(data);
return data
};

const ProductPage = async() =>{
    const produits=await getProducts()
    
  return (
    <div>
     {produits && <Listproducts produits={produits}/>} 
    </div>
  )
}

export default ProductPage

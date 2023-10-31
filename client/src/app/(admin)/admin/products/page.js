import React  from 'react';

import { redirect } from 'next/navigation'

//import Listproducts from '@/components/admin/Listproducts';

import Listproducts from '@/components/admin/listeDesProduits';

import {fetchArticles} from "@/services/ArticlesService"

const getProducts=async()=>{

const data=await fetchArticles()
.then((results)=>{return results.data})
.catch(
    (err)=>{
      console.log(err)
      redirect('/auth/login')
    }
    
    )
return data
};

const ProductPage = async() =>{
    const produits=await getProducts();

  return (
    <div>
     {produits && <Listproducts produits={produits}/>} 
    </div>
  )
}

export default ProductPage

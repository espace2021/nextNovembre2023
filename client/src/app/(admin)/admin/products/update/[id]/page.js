import {fetchSCategories} from "@/services/ScategorieService"
import { fetchArticleById} from '@/services/ArticlesService';
import UpdateProduct from '@/components/admin/UpdateProduct';

const getscategories=async()=>{
  try {
    const scategories = await  fetchSCategories().then((result) =>{return result.data} )
    return scategories;
  }
  catch (error) {
      console.log(error);
  }
}

const getProductDetails=async (id)=>{
  try {
    const product = await  fetchArticleById(id).then((result) =>{return result.data} )
    return product;
  }
  catch (error) {
      console.log(error);
  }
}

const ProductUpdatePage = async({params}) => {
  const article=await getProductDetails(params.id)
  const scategories = await getscategories();
  
  return (
    <div>
       <UpdateProduct article={article} scategories={scategories} />
    </div>
  )
}

export default ProductUpdatePage

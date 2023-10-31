//import { getServerSession } from "next-auth";
//import { authOptions } from "../app/api/auth/[...nextauth]/route";
//const session = await getServerSession(authOptions);

//if (session) console.log(session.user.token);

import Api from "../Axios/Api";

const ARTICLE_API="/articles"
/*
export const fetchArticles=async()=> {
return await Api.get(ARTICLE_API,  
    {
        headers: {
          Authorization: `Bearer ${session?.user.token}`,
        }
      })
}*/

export const fetchArticles=async()=> {
  return await Api.get(ARTICLE_API)
  }
export const fetchArticleById=async(articleId)=> {
return await Api.get(ARTICLE_API + '/' + articleId);
}
export const deleteArticle=async(articleId) =>{
return await Api.delete(ARTICLE_API + '/' + articleId);
}
export const addArticle=async(article)=> {
return await Api.post(ARTICLE_API, article);
}
export const editArticle=(article) =>{
return Api.put(ARTICLE_API + '/' + article._id, article);
}
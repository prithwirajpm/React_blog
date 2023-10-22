import { commomAPI } from "./commonAPI"
import { serverURL } from "./serverURL"

// Using POST Method
export const uploadBlog = async (reqBody)=>{
    return await commomAPI("POST",`${serverURL}/blog`,reqBody)
}

// Use GET METHOD

export const getAllBlog = async ()=>{
    return await commomAPI("GET",`${serverURL}/blog`,"")
}


// Delete Blog
export const DeleteABlog = async (id)=>{
    return await commomAPI("DELETE",`${serverURL}/blog/${id}`,{})
}

// RedBlogs

export const getABlog = async (id)=>{
    return await commomAPI("GET",`${serverURL}/blog/${id}`,"")
}
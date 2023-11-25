import serverRoutes from "@/helper/server-routes";
import { get, remove, post, put } from "@/modules/API";

export async function getCategoryList(){
    const res = await get(serverRoutes.category.list)
    .then(response => {
        return response.data
    })
    .catch(error =>{
        throw error
    })

    return res
}

export async function removeCategory( id ){
    const res = await remove(serverRoutes.category.delete + id)
    .then(response => {
        return response.data
    })
    .catch(error =>{
        throw error
    })

    return res
}

export async function addCategory( name, parent ){

    const data = {
        name: name
    }

    if(parent) data.parent = parent

    const res = await post(serverRoutes.category.add, data)
    .then(response => {
        return response.data
    })
    .catch(error =>{
        throw error
    })

    return res
}

export async function editCategory( id, name, parent ){

    const data = {
        name: name
    }

    if(parent && parent != 0) data.parent = parent

    const res = await put(serverRoutes.category.update + id, data)
    .then(response => {
        return response.data
    })
    .catch(error =>{
        throw error
    })

    return res
}
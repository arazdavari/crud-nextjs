import axios from "axios";

const host = process.env.NEXT_PUBLIC_BASE_SERVER_API_URL

export async function get( url ){
    const res = await axios
    .get( host + url )
    .then(response => {
        return response.data
    })
    .catch(error => {
        throw error
    })

    return res
}

export async function post( url, data ){
    const res = await axios
    .post( host + url, data )
    .then(response => {
        return response.data
    })
    .catch(error => {
        throw error
    })

    return res
}

export async function put( url, data ){
    const res = await axios
    .put( host + url, data )
    .then(response => {
        return response.data
    })
    .catch(error => {
        throw error
    })

    return res
}

export async function remove( url ){
    const res = await axios
    .delete( host + url )
    .then(response => {
        return response.data
    })
    .catch(error => {
        throw error
    })

    return res
}
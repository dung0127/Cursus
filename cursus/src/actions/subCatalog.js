import { CATALOG_BASE_URL, CATALOG_INFO_BASE_URL, SUBCATALOG_BASE_URL, SUBCATALOG_INFO_BASE_URL } from "../config/env";
import authHeader from "../config/authHeader";
import axios from "axios";

export const fetchSubCatalogRequest = () => {
    return(dispatch) => {
        axios.get(SUBCATALOG_BASE_URL, { headers: authHeader() }).then((res) => {
            dispatch(getAllSubCatalog(res.data.data)) 
        })
    }
}

export const getAllSubCatalog = (subCatalogs) => {
    return {
        type:'GET_ALL_SUBCATALOG',
        subCatalogs
    }
}

export const searchSubCatalogRequest = (search) => {
    return(dispatch) => {
        axios.get(SUBCATALOG_INFO_BASE_URL+'/search?name='+search, { headers: authHeader() }).then((res) => {
            dispatch(searchSubCatalog(res.data.data)) 
        });
    }
}

export const searchSubCatalog = (subCatalogs) => {
    return {
        type:'SEARCH_SUBCATALOG',
        subCatalogs
    }
}

export const updateSubCatalogRequest = (editSubCatalog) => {
    return(dispatch) => {
        axios.post(SUBCATALOG_INFO_BASE_URL + '/update', editSubCatalog , { headers: authHeader() }).then(res=>{
            alert(res.data.message)
            dispatch(updateSubCatalog()) 
            dispatch(fetchSubCatalogRequest())
        })
    }
}

export const updateSubCatalog = () => {
    return {
        type:'UPDATE_SUBCATALOG',
    }
}

export const createSubCatalogRequest = (addSubCatalog) => {
    return(dispatch) => {
        axios.post(SUBCATALOG_INFO_BASE_URL + '/create', addSubCatalog , { headers: authHeader() }).then(res=>{
            dispatch(createSubCatalog()) 
            alert (res.data.message) 
            dispatch(fetchSubCatalogRequest())
        })
    }
}

export const createSubCatalog = () => {
    return {
        type:'CREATE_SUBCATALOG'
    }
}

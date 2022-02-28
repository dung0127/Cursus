import { PAYMENT_INFO_API_BASE_URL, PAYMENT_API_BASE_URL } from "../config/env";
import authHeader from "../config/authHeader";
import axios from "axios";
import $ from "jquery"

export const fetchPaymentRequest = (order) => {
    return(dispatch) => {
        axios.post(PAYMENT_INFO_API_BASE_URL+'/payment', order, { headers: authHeader() }).then((res) => {
            dispatch(payment(res.data.message))
            $('#success').fadeIn('fast').delay(3000).fadeOut('slow');
            localStorage.setItem("cartItems", []);
            
        })
    }
}

export const payment = (messageSuccess) => {
    return {
        type:'PAYMENT',
        messageSuccess
        
    }
}

export const fetchOrderRequest = (page) => {
    return(dispatch) => {
        axios.get(PAYMENT_API_BASE_URL +'/?pageNumber='+ page, { headers: authHeader() }).then((res) => {
            dispatch(getAllOrder(res.data.data.content,res.data.data.pageable.pageNumber,res.data.data.totalPages))
        })
    }
}

export const getAllOrder = (orders, page, totalPages) => {
    return {
        type:'GET_ALL_ORDER',
        orders,
        page,
        totalPages
    }
}

export const fetchOrderByIdRequest = (num) => {
    return(dispatch) => {
        axios.get(PAYMENT_INFO_API_BASE_URL+'/' + num, { headers: authHeader() }).then((res) => {
            dispatch(getOrderById(res.data.data))
        })
    }
}

export const getOrderById = (order) => {
    return {
        type:'GET_ORDER_BY_ID',
        order
    }
}



import { COURSE_API_BASE_URL } from "../config/env";
import authHeader from "../config/authHeader";
import axios from "axios";

/*GET NUMBER CART*/
export const GetNumberCart = () =>{
    return{
        type:'GET_NUMBER_CART'
    }
}
 
export const AddCart = (payload) =>{
    return {
        type:'ADD_CART',
        payload
    }
}

export const addToCart = (items, product) => (dispatch) => {
    const cartItems = items.slice();
    let productAlreadyInCart = false;
    cartItems.forEach((cp) => {
      if (cp.id === product.id) {
        // cp.count += 1;
        alert("Already exist")
        productAlreadyInCart = true;
      }
    });
  
    if (!productAlreadyInCart) {
      cartItems.push({ ...product, count: 1 });
    }
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    dispatch({ type: 'ADD_TO_CART', payload: { cartItems } });
  };

export const removeFromCart = (items, product) => (dispatch) => {
  const cartItems = items.slice().filter((a) => a.id !== product.id);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  dispatch({ type: 'REMOVE_FROM_CART', payload: { cartItems } });
};

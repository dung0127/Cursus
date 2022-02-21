import Header from "../../Admin/Layout/header"
import React from "react";
import MenuUser from "./menuUser";
import Login from "../../Admin/Auth/login";
import { BrowserRouter as Router, Route, Routes, Navigate, Redirect} from 'react-router-dom';
import MainUser from "./mainUser";
import Course from "../Course/course";
import HeaderGuest from "./headerGuest";
import CourseById from "../Course/courseById";
import CartInfo from "../Cart/cartInfo";
import Checkout from "../Payment/checkout";
import CourseLesson from "../Course/courseLesson";
import HeaderLearn from "../Layout/headerLearn";
import {connect} from "react-redux"

const isLogin = localStorage.getItem("isLogin");


export const PrivateRoute = ({children}) => {
  
  if (isLogin) {
      
    return children
  }
  
  return <Navigate to="/" />
}
console.log(!(window.location.pathname.startsWith('/login') || window.location.pathname.startsWith('/learn')))
class AppUser extends React.Component {
    constructor(){
      super()
      
    }

    render() {
      return (
        <Router>
                  {isLogin? ( !(window.location.pathname.startsWith('/login') || window.location.pathname.startsWith('/learn')) ? <Header/> : '') : ( window.location.pathname !== '/login' ? <HeaderGuest/> : '')}
                  {!(window.location.pathname.startsWith('/login') || window.location.pathname.startsWith('/learn'))? <MenuUser/>:''}
                  {window.location.pathname.startsWith('/learn')? <HeaderLearn/>:''}
              <Routes>    
                  <Route path ="/index" element = {<MainUser/>}/> 
                  {!isLogin? <Route path ="/login" element = {<Login/>}/> :''}
                  <Route path ="/" element = {<MainUser/>}/>
                  <Route path ="/course" element = {<Course/>}/> 
                  <Route path="/course/:id" element ={<CourseById/>}></Route>
                  <Route path ="/cart" element = {<CartInfo/>}/> 
                  <Route path ="/checkout" element = {<PrivateRoute><Checkout/></PrivateRoute>}/> 
                  <Route path ="/learn/:id" element = {<PrivateRoute><CourseLesson/></PrivateRoute>}/> 
                  {/* <Route path ="*" element = {<ErrorPage/>}/>  */}
              </Routes>  
          </Router>
      );
    }
}

const mapStateToProps = state => {
  return {
      auth: state.auth.token
  }
}

export default connect(mapStateToProps)(AppUser)


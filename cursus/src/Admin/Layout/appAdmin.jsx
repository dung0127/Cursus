import Header from "../Layout/header"
import React from "react";
import Menu from "../Layout/menu";
import UserInfo from "../User/userInfor";
import UserAdd from "../User/userAdd";
import Login from "../Auth/login";
import CourseInfo from "../Courses/courseInfo";
import { BrowserRouter as Router, Route, Routes, Navigate, Redirect} from 'react-router-dom';
import CourseAdd from "../Courses/courseAdd";
import DashBoard from "../Dashboard/dashBoard";
import {login, logout} from "../../actions/auth"
import {connect} from "react-redux"
import Error from "../Layout/error";
import Detail from "../Profile/detail"
import DetailUpdate from "../Profile/detailUpdate";
import Category from "../Category/category"
import CatalogAdd from "../Category/catalogAdd";

const isLogin = localStorage.getItem("isLogin");

export const PrivateRoute = ({children}) => {
  
  if (isLogin) {
      
    return children
  }
  
  return <Navigate to="/" />
}

class AppAdmin extends React.Component {
  render() {
      return (
        <Router>
                {console.log(this.props.auth)}
                {console.log('hi',!isLogin)}
                {isLogin?<Header/>:''}
                {isLogin?<Menu/>:''}
            <Routes>    
                <Route path ="/index" element = {<PrivateRoute><DashBoard/></PrivateRoute>}/> 
                <Route path ="/dashboard" element = {<PrivateRoute><DashBoard/></PrivateRoute>}/> 
                {!isLogin?<Route path ="/" element = {<Login/>}/>:<Route path ="/" element = {<PrivateRoute><DashBoard/></PrivateRoute>}/>}
                <Route path="/users" element={<PrivateRoute><UserInfo/></PrivateRoute>}/>
                <Route path ="/add-user" element = {<PrivateRoute><UserAdd/></PrivateRoute>}/> 
                <Route path ="/category" element = {<PrivateRoute><Category/></PrivateRoute>}/>
                <Route path="/add-catalog" element = {<PrivateRoute><CatalogAdd/></PrivateRoute>}/>
                <Route path ="/courses" element = {<PrivateRoute><CourseInfo/></PrivateRoute>}/>
                <Route path="/add-course" element = {<PrivateRoute><CourseAdd/></PrivateRoute>}/>
                <Route path="/detail" element = {<PrivateRoute><Detail/></PrivateRoute>}/>
                <Route path="/detail-update" element = {<PrivateRoute><DetailUpdate/></PrivateRoute>}/>
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

export default connect(mapStateToProps)(AppAdmin)

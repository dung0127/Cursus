import Header from "../../Admin/Layout/header"
import React from "react";
import MenuUser from "./menuUser";
import Login from "../../Admin/Auth/login";
import { BrowserRouter as Router, Route, Routes, Navigate, Redirect} from 'react-router-dom';
import MainUser from "./mainUser";
import Course from "../Course/course";
import HeaderGuest from "./headerGuest";

const isLogin = localStorage.getItem("isLogin");

export const PrivateRoute = ({children}) => {
  
  if (this.props.user) {
      
    return children
  }
  
  return <Navigate to="/" />
}

class AppUser extends React.Component {
    constructor(){
      super()
      
    }

    componentDidMount(){
        
    }

    render() {
      return (
        <Router>
                  {isLogin? ( window.location.pathname !== '/login' ? <Header/> : '') : ( window.location.pathname !== '/login' ? <HeaderGuest/> : '')}
                  {window.location.pathname !== '/login' ? <MenuUser/>:''}
              <Routes>    
                  <Route path ="/index" element = {<MainUser/>}/> 
                  {!isLogin? <Route path ="/login" element = {<Login/>}/> :''}
                  <Route path ="/" element = {<MainUser/>}/>
                  <Route path ="/course" element = {<Course/>}/> 
              </Routes>  
          </Router>
      );
    }
}

export default AppUser

import React from "react";
import axios from "axios";
import validator from 'validator';
import { login, logout } from "../../actions/auth";
import { connect } from 'react-redux';
import {LOGIN_BASE_URL} from '../../config/env';
import {withRouter} from './withRouter'

class Login extends React.Component {
	constructor(){
        super();
        this.state = {
            user: {
                username: '',
                password: ''
            },
			role: '',
            error: {},
            isSuccess: false,
            errorMessage: null
        }
        this.handleInputsChange = this.handleInputsChange.bind(this);  
		
    }

	
	handleInputsChange = e =>{                
        let formData = Object.assign({}, this.state.user);
        formData[e.target.name] = e.target.value;        

        this.setState({
            user: formData            
        })         
    }

	validateFormData = () => {
        let isValid = true;

        const error = {}
        if(validator.isEmpty(this.state.user.username)){            
            error['username'] = 'The username field is required.';
            isValid = false;
        }

        if(validator.isEmpty(this.state.user.password)){
            error['password'] = 'The password field is required.';
            isValid = false;
        }

        this.setState({
            error: error
        })

        return isValid;
    }

	checkLoginInfo = (user) => {   
        if(this.validateFormData()){
            axios.post(LOGIN_BASE_URL,user).then(res=>{
                if(res.data.data){
					if(res.data.data.token){                   
                        this.props.login(res.data.data.username,res.data.data.token,res.data.data.roles);   
						localStorage.setItem('isLogin',true)
						localStorage.setItem('token',res.data.data.token)
						localStorage.setItem('role',res.data.data.roles)					
                    }  
					alert ("Hi "+ res.data.data.username)  
					this.setState({isSuccess: true})
					this.props.navigate('/index')
					window.location.reload();
					   
                }            
                this.setState({
                    isSuccess: res.data.isSuccess,
                    errorMessage: res.data.errorMessage
                })               

            })
			.catch(error => {console.log('error')})
        }
    }
    render() {
        return(
            <div className="sign_in_up_bg">
				<div className="container">
					<div className="row justify-content-lg-center justify-content-md-center">
						<div className="col-lg-12">
							<div className="main_logo25" id="logo">
								<a href="index.html"><img src="images/logo.svg" alt=""/></a>
								<a href="index.html"><img class="logo-inverse" src="images/ct_logo.svg" alt=""/></a>
							</div>
						</div>
					
						<div className="col-lg-6 col-md-8">
							<div className="sign_form">
								<h2>Welcome Back</h2>
								<p>Log In to Your Edututs+ Account!</p>
								<button className="social_lnk_btn color_btn_fb"><i className="uil uil-facebook-f"></i>Continue with Facebook</button>
								<button className="social_lnk_btn mt-15 color_btn_tw"><i className="uil uil-twitter"></i>Continue with Twitter</button>
								<button className="social_lnk_btn mt-15 color_btn_go"><i className="uil uil-google"></i>Continue with Google</button>
								<form>
									<div className="ui search focus mt-15">
										<div className="ui icon input swdh95">
											<input className="prompt srch_explore" type="text" name="username" id="id_email" required=""  placeholder="Username" onChange={this.handleInputsChange} value={this.state.user.username}/>															
											<i className="uil uil-user icon icon2"></i>
										</div>
										{this.state.error.username && <div className="validation alert alert-warning">{this.state.error.username}</div>}
									</div>
									<div className="ui search focus mt-15">
										<div className="ui icon input swdh95">
											<i className="uil uil-key-skeleton-alt icon icon2"></i>
											<input className="prompt srch_explore" type="password" name="password" id="id_password" required=""  placeholder={"Password"} onChange={this.handleInputsChange} value={this.state.user.password}/>
										</div>
										{this.state.error.password && <div className="validation alert alert-warning">{this.state.error.password}</div>}
										
									</div>
									<div className="ui form mt-30 checkbox_sign">
										<div className="inline field">
											<div className="ui checkbox mncheck">
												<input type="checkbox" tabindex="0" className="hidden"/>
												<label>Remember Me</label>
											</div>
										</div>
									</div>
									<button className="login-btn" type="button" value="Login" onClick={()=>this.checkLoginInfo(this.state.user)} >Sign In</button>
								</form>
								<p className="sgntrm145">Or <a href="forgot_password.html">Forgot Password</a>.</p>
								<p className="mb-0 mt-30 hvsng145">Don't have an account? <a href="sign_up.html">Sign Up</a></p>
							</div>
							<div className="sign_footer"><img src="images/sign_logo.png" alt=""/>© 2020 <strong>Cursus</strong>. All Rights Reserved.</div>
						</div>				
					</div>				
				</div>				
			</div>
		);
    }
}


const mapStateToProps = state => {
    return {        
        username: state.auth.username,
        token: state.auth.token,
		role: state.auth.role
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: (username, token, role) => {
            dispatch(login(username,token,role));
        },
		logout: () => {
            dispatch(logout())
        }
    };
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Login));
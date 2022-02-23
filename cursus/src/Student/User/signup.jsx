import React from "react";
import axios from "axios";
import validator from 'validator';
import {USER_INFO_API_BASE_URL } from "../../config/env";
import $ from "jquery";
import Success from "../../Alert/success";
import {withRouter} from "../../Admin/Auth/withRouter"

class Signup extends React.Component {
    constructor(){
        super();
        this.state = {
            addUser: {},
            error: {},
            isShow: false, 
        }
        
        this.handleInputChange = this.handleInputChange.bind(this);
  
    }

    validateFormData = () => {
        let isValid = true;

        const error = {}

        if(validator.isEmpty(this.state.addUser.username)){            
            error['username'] = 'The Username field is required.';
            isValid = false;
        }

        if(validator.isEmpty(this.state.addUser.password)){            
            error['password'] = 'The Password field is required.';
            isValid = false;
        }

        if(validator.isEmpty(this.state.addUser.confirmPassword)){            
            error['confirmPassword'] = 'The Confirm password field is required.';
            isValid = false;
        }

        if(validator.isEmpty(this.state.addUser.email)){            
            error['email'] = 'The Email field is required.';
            isValid = false;
        }

        this.setState({
            error: error
        })

        return isValid;
    }

    handle = () => {
        $('#target').fadeIn('fast').delay(1000).fadeOut('slow');
		setTimeout(()=>{
			this.props.navigate('/login')
			window.location.reload();
		},2000);
		
	}

    handleInputChange = e => {   
        let formData = Object.assign({}, this.state.addUser);    
        console.log(formData)
        formData[e.target.name] = e.target.value;        
        this.setState({addUser:formData});  
        console.log(formData)  
    }

    handleSubmit = (addUser) => {
        if(this.validateFormData()){
            axios.post('http://localhost:8080/api/auth/signup', addUser).then(res=>{
            // update state.staff.staffInfo
            //this.setState({addUser: res.data.data}) 
            this.handle(); 
            })
        }
    }

    showHide = () => {
        this.state.isShow?
            this.setState({
                isShow: false
            }):
            this.setState({
                isShow: true
            });
    }

    render() {
        return (
            <div className="sign_in_up_bg">
                <div className="container">
                    <div className="row justify-content-lg-center justify-content-md-center">
                        <div className="col-lg-12">
                            <div className="main_logo25" id="logo">
                                <a href="index.html"><img src="images/logo.svg" alt=""/></a>
                                <a href="index.html"><img className="logo-inverse" src="images/ct_logo.svg" alt=""/></a>
                            </div>
                        </div>
                        <div  id="target" style={{display:"none"}}><Success name="Signup Successful"/></div>
                        <div className="col-lg-6 col-md-8">
                            <div className="sign_form">
                                <h2>Welcome to Cursus</h2>
                                <p>Sign Up and Start Learning!</p>
                                <form>
                                    <div className="ui search focus">
                                        <div className="ui left icon input swdh11 swdh19">
                                            <input className="prompt srch_explore" type="text" name="username"  maxlength="64" placeholder="Username" onChange={this.handleInputChange}/>															
                                        </div>
                                    </div>
                                    <div className="ui search focus mt-15">
                                        <div className="ui left icon input swdh11 swdh19">
                                            <input className="prompt srch_explore" type="text" name="email" maxlength="64" placeholder="Email Address" onChange={this.handleInputChange}/>															
                                        </div>
                                    </div>
                                    <div className="ui search focus mt-15">
                                        <div className="ui left icon input swdh11 swdh19">
                                            <input className="prompt srch_explore" type="password" name="password" maxlength="64" placeholder="Password" onChange={this.handleInputChange}/>															
                                        </div>
                                    </div>
                                    <div className="ui search focus mt-15">
                                        <div className="ui left icon input swdh11 swdh19">
                                            <input className="prompt srch_explore" type="password" name="confirmPassword" maxlength="64" placeholder="Confirm password" onChange={this.handleInputChange}/>															
                                        </div>
                                    </div>
                                    <div className="ui form mt-30 checkbox_sign">
                                        <div className="inline field">
                                            <div className="ui checkbox mncheck">
                                                <input type="checkbox" tabindex="0" className="hidden"/>
                                                <label>I’m in for emails with exciting discounts and personalized recommendations</label>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="login-btn" type="button" onClick={()=>this.handleSubmit(this.state.addUser)}>Signup</button>
                                </form>
                                <p className="sgntrm145">By signing up, you agree to our <a href="terms_of_use.html">Terms of Use</a> and <a href="terms_of_use.html">Privacy Policy</a>.</p>
                                <p className="mb-0 mt-30">Already have an account? <a href="sign_in.html">Log In</a></p>
                            </div>
                            <div className="sign_footer"><img src="images/sign_logo.png" alt=""/>© 2020 <strong>Cursus</strong>. All Rights Reserved.</div>
                        </div>				
                    </div>				
                </div>				
            </div>
        );
    }
}

export default  withRouter(Signup);
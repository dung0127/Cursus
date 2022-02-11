import React from "react";
import Footer from "../Layout/footer";
import axios from "axios";
import authHeader from "../../config/authHeader";
import validator from 'validator';
import {withRouter} from '../Auth/withRouter'
import {USER_INFO_API_BASE_URL } from "../../config/env";

class UserAdd extends React.Component {
    constructor(){
        super();
        this.state = {
            addUser: {  
                username:'',
                password:'',
                fullname: '',
                email: '',
                address: '',
                avatarImage:'',
                role:'ROLE_ADMIN'
                },
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

        if(validator.isEmpty(this.state.addUser.fullname)){            
            error['fullname'] = 'The Fullname field is required.';
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

    handleInputChange = e => {   
        let formData = Object.assign({}, this.state.addUser);    
        console.log(formData)
        formData[e.target.name] = e.target.value;        
        this.setState({addUser:formData});  
        console.log(formData)  
    }

    handleSubmit = (addUser) => {
        if(this.validateFormData()){
            axios.post(USER_INFO_API_BASE_URL + '/create', addUser , { headers: authHeader() }).then(res=>{
            // update state.staff.staffInfo
            //this.setState({addUser: res.data.data}) 
            alert (res.data.message) 
            if(res.data.message=='Success'){
                this.props.navigate('/users')
            }
            console.log(res.data.data)
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
            <div className="wrapper">
                <div className="sa4d25">
                    <div className="container">			
                        		
                        <div className="col-lg-12">	
                            <h2 className="st_title"><i className='uil uil-user'></i> Create New Account</h2>
                        </div>			
                        <div className="col-12">
                            <div className="step-content">
                                <div className="step-tab-panel step-tab-info active" id="tab_step1"> 
                                    <div className="tab-from-content">
                                        <div className="course__form">
                                            <div className="general_info10">
                                                <div className="row">
                                                    <div className="col-lg-6 col-md-12">		                                          
                                                        <div className="mt-30 lbel25">
                                                            <label>Role</label>
                                                                <select class="ui hj145 dropdown cntry152 prompt srch_explore" onChange={this.handleInputChange} name="role" >
                                                                    <option value="ROLE_ADMIN" >Admin</option>
                                                                    <option value="ROLE_USER">User</option>
                                                                </select>
                                                        </div>		
                                                    </div>
                                                    <div className="col-lg-12 col-md-12">						
                                                        <div className="ui search focus mt-30 lbel25">
                                                            <label>Username</label>
                                                            <div className="ui left icon input swdh19">
                                                                <input className="prompt srch_explore" type="text" placeholder="Username here" name="username" data-purpose="edit-course-title" maxlength="60" id="main[title]" onChange={this.handleInputChange}/>															
                                                                
                                                            </div>
                                                            {this.state.error.username && <div className="validation alert alert-warning">{this.state.error.username}</div>}
                                                            <div className="help-block">(Please make this a maximum of 100 characters and unique.)</div>
                                                        </div>									
                                                    </div>
                                                    <div className="col-lg-12 col-md-12">						
                                                        <div className="ui search focus mt-30 lbel25">
                                                            <label>Password</label>
                                                            <div className="ui left icon input swdh19">
                                                                <input className="prompt srch_explore" type={this.state.isShow?'text':'password'} placeholder="Password here" name="password" data-purpose="edit-course-title" maxlength="60" id="main[title]" onChange={this.handleInputChange}/>															    
                                                                <div style={{margin: 'auto'}}>
                                                                    {this.state.isShow?<i className="fa fa-fw fa-eye-slash" id="togglePassword" style={{marginLeft: '-40px', cursor: 'pointer'}} onClick={this.showHide}/>
                                                                    :<i className="fa fa-fw fa-eye"id="togglePassword" style={{marginLeft: '-40px', cursor: 'pointer'}} onClick={this.showHide} /> }
                                                                </div>	
                                                            </div>
                                                            {this.state.error.password && <div className="validation alert alert-warning">{this.state.error.password}</div>}
                                                            <div className="help-block">(Please make this a maximum of 100 characters and unique.)</div>
                                                        </div>									
                                                    </div>
                                                    <div className="col-lg-12 col-md-12">		
                                                                                                        
                                                        <div className="ui search focus mt-30 lbel25">
                                                            
                                                            <label>Full Name</label>
                                                            <div className="ui left icon input swdh19">
                                                                <input className="prompt srch_explore" type="text" placeholder="Fullname here" name="fullname" data-purpose="edit-course-title" maxlength="60" id="main[title]" onChange={this.handleInputChange}/>															
                                                            </div>
                                                            {this.state.error.fullname && <div className="validation alert alert-warning">{this.state.error.fullname}</div>}
                                                            <div className="help-block">(Please make this a maximum of 100 characters and unique.)</div>
                                                        </div>									
                                                    </div>
                                                    <div className="col-lg-12 col-md-12">		
                                                                                                        
                                                        <div className="ui search focus mt-30 lbel25">
                                                            
                                                            <label>Email</label>
                                                            <div className="ui left icon input swdh19">
                                                                <input className="prompt srch_explore" type="text" placeholder="Email here" name="email" data-purpose="edit-course-title" maxlength="60" id="main[title]" onChange={this.handleInputChange}/>															
                                                            </div>
                                                            {this.state.error.email && <div className="validation alert alert-warning">{this.state.error.email}</div>}
                                                            <div className="help-block">(Please make this a maximum of 100 characters and unique.)</div>
                                                        </div>									
                                                    </div>
                                                    <div className="col-lg-12 col-md-12">		
                                                                                                        
                                                        <div className="ui search focus mt-30 lbel25">
                                                            
                                                            <label>Address</label>
                                                            <div className="ui left icon input swdh19">
                                                                <input className="prompt srch_explore" type="text" placeholder="Address here" name="address" data-purpose="edit-course-title" maxlength="60" id="main[title]" onChange={this.handleInputChange}/>															
                                                                
                                                            </div>
                                                            <div className="help-block">(Please make this a maximum of 100 characters and unique.)</div>
                                                        </div>									
                                                    </div>
                                                    
                                                    <div className="col-lg-5 col-md-6">
                                                        <div className="ui search focus mt-30 lbel25">
                                                            
                                                        <label className="label25 text-left">Avatar Image</label>
                                                        </div>
                                                        <div className="thumb-item">
                                                            <img src="images/thumbnail-demo.jpg" alt=""/>
                                                            <div className="thumb-dt">													
                                                                <div className="upload-btn">													
                                                                    <input className="uploadBtn-main-input" type="file" name="avatarImage" id="ThumbFile__input--source"/>
                                                                    <label for="ThumbFile__input--source" title="Zip">Choose Thumbnail</label>
                                                                </div>
                                                                <span className="uploadBtn-main-file">Size: 590x300 pixels. Supports: jpg,jpeg, or png</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                                                                        
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="step-tab-panel step-tab-location" id="tab_step5">
                                    <div className="tab-from-content">
                                        <div className="title-icon">
                                            <button className="save_btn" type="button" value={'Add'} onClick={()=>this.handleSubmit(this.state.addUser)} ><h3 className="title"><i className="uil uil-upload"></i>Submit</h3></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
	        </div>
        );
    }
}

export default withRouter(UserAdd);
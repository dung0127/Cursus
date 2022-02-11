import React from "react";
import Footer from "../Layout/footer";
import authHeader from "../../config/authHeader";
import axios from "axios";
import {USER_INFO_API_BASE_URL} from "../../config/env";
import {connect} from 'react-redux';
import { getDetailInfo, updateDetail } from '../../actions/detail'
import validator from 'validator';

class DetailUpdate extends React.Component {
    constructor(){
        super();
        this.state = {
            user: [],
            newDetail: {
                fullname: '',
                email: '',
                enable: '',
                address: ''
                },
            password: {
                oldPassword:'',
                newPassword:'',
                confirmPassword:''
                },
            error: {},
            updateSuccess: false,
            isShow: false, 
        }
        
        this.handleInputPasswordChange = this.handleInputPasswordChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
  
    }

    componentDidMount(){        
        this.getDetail();
    } 

    getDetail = () => {
        axios.get(USER_INFO_API_BASE_URL+'/user-information', { headers: authHeader() }).then((res) => {
            this.setState({user: res.data.data});
            this.props.getDetailInfo(res.data.data);
            this.setState({newDetail: res.data.data});
        });
    }

    validateFormData = () => {
        let isValid = true;

        const error = {}

        if(validator.isEmpty(this.state.password.oldPassword)){            
            error['oldPassword'] = 'The Old Password field is required.';
            isValid = false;
        }

        if(validator.isEmpty(this.state.password.newPassword)){            
            error['newPassword'] = 'The New Password field is required.';
            isValid = false;
        }

        if(validator.isEmpty(this.state.password.confirmPassword)){            
            error['confirmPassword'] = 'The Confirm Password field is required.';
            isValid = false;
        }

        this.setState({
            error: error
        })

        return isValid;
    }

    handleInputChange= e => {   
        let formData = Object.assign({}, this.state.newDetail);    
        console.log(formData)
        formData[e.target.name] = e.target.value;        
        this.setState({newDetail:formData});  
        console.log(formData)  
    }
      
    updateDetail = (newDetail) => {
        axios.post(USER_INFO_API_BASE_URL+'/update', newDetail , { headers: authHeader() }).then(res=>{
            // update state.staff.staffInfo
            this.props.getDetailInfo(res.data.data);  
            this.props.updateDetail(this.state.updateSuccess) 
            this.setState({newDetail: res.data.data}) 
            alert ("Success")  
            console.log(res.data.data)
        })
          
    }

    handleInputPasswordChange= e => {   
        let formData = Object.assign({}, this.state.password);    
        console.log(formData)
        formData[e.target.name] = e.target.value;
        this.setState({password:formData});         
        console.log(formData)  
    }

    updatePassword = (password) => {
        if(this.validateFormData()){
            axios.post(USER_INFO_API_BASE_URL+'/change-password', password , { headers: authHeader() }).then(res=>{
                alert (res.data.message) 
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
        console.log(this.props.isUpdate)
        return(
            <div className="wrapper">
                <div className="sa4d25">
                    <div className="container-fluid">			
                        <div className="row">
                            <div className="col-lg-12">
                                <h2 className="st_title"><i className='uil uil-cog'></i> Setting</h2>
                                <div className="tab-content" id="pills-tabContent">
                                    <div className="tab-pane fade show active" id="pills-account" role="tabpanel" aria-labelledby="pills-account-tab">
                                        <div className="account_setting">
                                            <h4>Your Cursus Account</h4>
                                            <p>This is your public presence on Cursus. You need a account to upload your paid courses, comment on courses, purchased by students, or earning.</p>
                                            <div className="basic_profile">
                                            
                                                <div className="basic_ptitle">
                                                    <h4>Password</h4>
                                                    <p>Change your password</p>
                                                </div>
                                                <div className="basic_form">
                                                    <div className="row">
                                                        <div className="col-lg-8">
                                                            <div className="row">
                                                                <div className="col-lg-7">
                                                                    <div className="ui search focus mt-30">
                                                                        <div className="ui left icon input swdh11 swdh19">
                                                                            <input className="prompt srch_explore" type={this.state.isShow?'text':'password'} name="oldPassword" required="" placeholder="Old password"
                                                                            onChange={this.handleInputPasswordChange}/>
                                                                            <div style={{margin: 'auto'}}>
                                                                            {this.state.isShow?<i className="fa fa-fw fa-eye" id="togglePassword" style={{marginLeft: '-40px', cursor: 'pointer'}} onClick={this.showHide}/>
                                                                            :<i className="fa fa-fw fa-eye-slash"id="togglePassword" style={{marginLeft: '-40px', cursor: 'pointer'}} onClick={this.showHide} /> }
                                                                            </div>					
                                                                        </div>
                                                                        {this.state.error.oldPassword && <div className="validation alert alert-warning">{this.state.error.oldPassword}</div>}
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-7">
                                                                    <div className="ui search focus mt-30">
                                                                        <div className="ui left icon input swdh11 swdh19">
                                                                            <input className="prompt srch_explore" type={this.state.isShow?'text':'password'} name="newPassword" required="" placeholder="New password"
                                                                            onChange={this.handleInputPasswordChange}/>
                                                                            <div style={{margin: 'auto'}}>
                                                                            {this.state.isShow?<i className="fa fa-fw fa-eye" id="togglePassword" style={{marginLeft: '-40px', cursor: 'pointer'}} onClick={this.showHide}/>
                                                                            :<i className="fa fa-fw fa-eye-slash"id="togglePassword" style={{marginLeft: '-40px', cursor: 'pointer'}} onClick={this.showHide} /> }
                                                                            </div>					
                                                                        </div>
                                                                        {this.state.error.newPassword && <div className="validation alert alert-warning">{this.state.error.newPassword}</div>}
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-7">
                                                                    <div className="ui search focus mt-30">
                                                                        <div className="ui left icon input swdh11 swdh19">
                                                                            <input className="prompt srch_explore" type={this.state.isShow?'text':'password'} name="confirmPassword" required="" placeholder="Confirm password" 
                                                                            onChange={this.handleInputPasswordChange}/>		
                                                                            <div style={{margin: 'auto'}}>
                                                                            {this.state.isShow?<i className="fa fa-fw fa-eye" id="togglePassword" style={{marginLeft: '-40px', cursor: 'pointer'}} onClick={this.showHide}/>
                                                                            :<i className="fa fa-fw fa-eye-slash"id="togglePassword" style={{marginLeft: '-40px', cursor: 'pointer'}} onClick={this.showHide} /> }
                                                                            </div>
                                                                        </div>
                                                                        {this.state.error.confirmPassword && <div className="validation alert alert-warning">{this.state.error.confirmPassword}</div>}
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-12">
                                                                    <div className="divider-1"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="save_btn" type="button" value={'Value'} onClick={()=>this.updatePassword(this.state.password)}>Save Changes</button>
                                            <form>
                                            <div className="basic_profile">
                                                <div className="basic_ptitle">
                                                    <h4>Basic Profile</h4>
                                                    <p>Add information about yourself</p>
                                                </div>
                                                <div className="basic_form">
                                                    <div className="row">
                                                        <div className="col-lg-8">
                                                            <div className="row">
                                                                <div className="col-lg-6">
                                                                    <div className="ui search focus mt-30">
                                                                        <div className="ui left icon input swdh11 swdh19">
                                                                            <input className="prompt srch_explore" type="text" required="" disabled="true"  value={this.state.user.username}/>															
                                                                        </div>
                                                                    </div>
                                                                </div>                                                                
                                                                <div className="col-lg-12">
                                                                    <div className="ui search focus mt-30">
                                                                        <div className="ui left icon input swdh11 swdh19">
                                                                            <input className="prompt srch_explore" type="text" name="fullname" required=""  
                                                                            onChange={this.handleInputChange} defaultValue={this.state.user.fullname}/>					
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-6">
                                                                    <div className="ui search focus mt-30">
                                                                        <div className="ui left icon input swdh11 swdh19">
                                                                            <input className="prompt srch_explore" type="text" name="email" required="" 
                                                                            onChange={this.handleInputChange} defaultValue={this.state.user.email}/>					
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-6">
                                                                    <div className="ui search focus mt-30">
                                                                        <div className="ui left icon input swdh11 swdh19">
                                                                            <input className="prompt srch_explore" type="text" name="phone" required="" 
                                                                            onChange={this.handleInputChange} defaultValue={this.state.user.phone}/>					
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-6">
                                                                    <div className="ui search focus mt-30">
                                                                        <div className="ui left icon input swdh11 swdh19">
                                                                            <input className="prompt srch_explore" type="text" name="address" required=""  
                                                                            onChange={this.handleInputChange} defaultValue={this.state.user.address}/>					
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-6">
                                                                    <div className="ui search focus mt-30">
                                                                        <div className="ui left icon input swdh11 swdh19">
                                                                            <input className="prompt srch_explore" type="text" disabled="true" value={this.state.user.enabled?'Active':'Inactive'} required="" />					
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-12">
                                                                    <div className="divider-1"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <button value={'Update'} onClick={()=>this.updateDetail(this.state.newDetail)} className="save_btn" type="button">Save Changes</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>						
                        </div>
                    </div>
                </div>
                <Footer/>
	        </div>
        )
    }
}
const mapStateToProps = state => {
    return{
        detailInfo: state.detail.detailInfo,   
        isUpdate: state.detail.updateSuccess
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getDetailInfo: (detailInfo) => {
            dispatch(getDetailInfo(detailInfo));
        },
        updateDetail: (updateSuccess) => {
            dispatch(updateDetail(updateSuccess));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailUpdate);
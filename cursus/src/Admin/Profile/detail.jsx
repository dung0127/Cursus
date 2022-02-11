import React from 'react'
import Footer from '../Layout/footer'
import {Link} from "react-router-dom"
import { fetchDetailUserRequest } from '../../actions/detail'
import {connect} from 'react-redux';

class Detail extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            detail: [],
        }
    }

    componentDidMount(){
        this.props.fetchDetailUserRequest();
    }
    render () {
        return (
            <div className="wrapper _bg4586">
                <div className="_216b01">
                    <div className="container-fluid">			
                        <div className="row justify-content-md-center">
                            <div className="col-md-10">
                                <div className="section3125 rpt145">							
                                    <div className="row">						
                                        <div className="col-lg-7">
                                            <a href="#" className="_216b22">										
                                                <span><i className="uil uil-cog"></i></span>Setting
                                            </a>
                                            <div className="dp_dt150">						
                                                <div className="img148">
                                                    <img src={this.props.user.avatarImage} alt=""/>										
                                                </div>
                                                <div className="prfledt1">
                                                    <h2>{this.props.user.fullname}</h2>
                                                    <span>{this.props.user.username}</span>
                                                </div>										
                                            </div>
                                        </div>
                                        <div className="col-lg-5">
                                            <div className="rgt-145">
                                                <ul className="tutor_social_links">
                                                    <li><a href="#" className="fb"><i className="fab fa-facebook-f"></i></a></li>
                                                    <li><a href="#" className="tw"><i className="fab fa-twitter"></i></a></li>
                                                    <li><a href="#" className="ln"><i className="fab fa-linkedin-in"></i></a></li>
                                                    <li><a href="#" className="yu"><i className="fab fa-youtube"></i></a></li>
                                                </ul>
                                            </div>
                                            <ul className="_bty149">
                                                <li><button className="studio-link-btn btn500" onclick="window.location.href = 'instructor_dashboard.html';">Cursus Studio</button></li>								
                                                <li><Link to='/detail-update'><button className="msg125 btn500">Edit</button></Link></li>								
                                            </ul>
                                            
                                        </div>													
                                    </div>							
                                </div>							
                            </div>															
                        </div>
                    </div>
                </div>
                <div className="_215b17">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="course_tab_content">
                                    <div className="tab-content" id="nav-tabContent">
                                        <div className="tab-pane fade show active" id="nav-about" role="tabpanel">
                                            <div className="_htg451">
                                                <div className="_htg452">
                                                    <h3>About Me</h3>
                                                    <div className="basic_form">
                                                        <div className="row">
                                                            <div className="col-lg-8">
                                                                <div className="row">
                                                                    <div className="col-lg-6">
                                                                        <div className="ui search focus mt-30">
                                                                            <div class="row">
                                                                                <div class="col-md-6">
                                                                                    <label>Name</label>
                                                                                </div>
                                                                                <div class="col-md-6">
                                                                                    <p>{this.props.user.fullname}</p>
                                                                                </div>
                                                                            </div>
                                                                            <div class="row">
                                                                                <div class="col-md-6">
                                                                                    <label>Email</label>
                                                                                </div>
                                                                                <div class="col-md-6">
                                                                                    <p>{this.props.user.email}</p>
                                                                                </div>
                                                                            </div>
                                                                            <div class="row">
                                                                                <div class="col-md-6">
                                                                                    <label>Phone</label>
                                                                                </div>
                                                                                <div class="col-md-6">
                                                                                    <p>{this.props.user.phone}</p>
                                                                                </div>
                                                                            </div>
                                                                            <div class="row">
                                                                                <div class="col-md-6">
                                                                                    <label>Adress</label>
                                                                                </div>
                                                                                <div class="col-md-6">
                                                                                    <p>{this.props.user.address}</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>  
                                                </div>																	
                                            </div>				
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
    return {        
        user: state.detail.user,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchDetailUserRequest:() => dispatch (fetchDetailUserRequest())
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Detail); 
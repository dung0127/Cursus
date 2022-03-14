import React from "react";
import {Link} from "react-router-dom";
import { fetchCourseRequest } from "../../actions/course";
import {connect}  from "react-redux";
import { fetchCatalogRequest} from "../../actions/catalog";

class Help extends React.Component {
    constructor(){
        super()
       
    }

    componentDidMount(){
        this.props.fetchCourseRequest(0);
    }
    render() {
        return (
        <div className="wrapper _bg4586">
            <div className="_215v12">
                <div className="container-fluid">			
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section3125">							
                                <div className="row justify-content-md-center">						
                                    <div className="col-md-6">					
                                        <div className="help_stitle">					
                                            <h2>How may we help you?</h2>
                                            
                                        </div>															
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
                                    <div className="tab-pane fade show active" id="nav-instructor" role="tabpanel">
                                        <div className="tpc152">
                                            <div className="crse_content">
                                                <h3>Select a topic to search for help</h3>																			
                                            </div>
                                            <div className="section3126 mt-20">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <a href="#" className="value_props50">
                                                            <div className="value_icon">
                                                                <i className="uil uil-wallet"></i>
                                                            </div>
                                                            <div className="value_content">
                                                                <h4>Payments</h4>
                                                                <p>Understand the revenue share and how to receive payments.</p>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <a href="#" className="value_props50">
                                                            <div className="value_icon">
                                                                <i className="uil uil-megaphone"></i>
                                                            </div>
                                                            <div className="value_content">
                                                                <h4>Selling & Promotion</h4>
                                                                <p>Learn about the announcement and promotional tools.</p>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <a href="#" className="value_props50">
                                                            <div className="value_icon">
                                                                <i className="uil uil-file-check-alt"></i>
                                                            </div>
                                                            <div className="value_content">
                                                                <h4>Quality Standards</h4>
                                                                <p>Learn what it takes to create a high quality course.</p>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <a href="#" className="value_props50">
                                                            <div className="value_icon">
                                                                <i className="uil uil-file-edit-alt"></i>
                                                            </div>
                                                            <div className="value_content">
                                                                <h4>Course Building</h4>
                                                                <p>Build your course curriculum and landing page.</p>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <a href="#" className="value_props50">
                                                            <div className="value_icon">
                                                                <i className="uil uil-window"></i>
                                                            </div>
                                                            <div className="value_content">
                                                                <h4>Course Management</h4>
                                                                <p>Maintain your course and engage with students.</p>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <a href="#" className="value_props50">
                                                            <div className="value_icon">
                                                                <i className="uil uil-file-shield-alt"></i>
                                                            </div>
                                                            <div className="value_content">
                                                                <h4>Trust & Safety</h4>
                                                                <p>Policy and copyright questions and guidance.</p>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tpc152">
                                            <div className="crse_content">
                                                <h3>Frequently Asked Questions</h3>																			
                                            </div>
                                            <div className="section3126 mt-20">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <a href="#" className="value_props51">																											
                                                            Promote Your Course With Coupons and Referral Links																													
                                                        </a>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <a href="#" className="value_props51">																											
                                                            How to Select Your Payout Method And Become a Premium Instructor																													
                                                        </a>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <a href="#" className="value_props51">																											
                                                            Cursus Course Quality Checklist																												
                                                        </a>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <a href="#" className="value_props51">																											
                                                            Instructor Revenue Share																													
                                                        </a>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <a href="#" className="value_props51">																											
                                                            Instructor Promotional Agreements and Cursus Deals																												
                                                        </a>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <a href="#" className="value_props51">																											
                                                            How to Become an Instructor: FAQ																												
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="nav-student" role="tabpanel">
                                        <div className="tpc152">
                                            <div className="crse_content">
                                                <h3>Select a topic to search for help</h3>																			
                                            </div>
                                            <div className="section3126 mt-20">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <a href="#" className="value_props50">
                                                            <div className="value_icon">
                                                                <i className="uil uil-file-check-alt"></i>
                                                            </div>
                                                            <div className="value_content">
                                                                <h4>Getting Started</h4>
                                                                <p>Learn how Cursus works and how to start learning.</p>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <a href="#" className="value_props50">
                                                            <div className="value_icon">
                                                                <i className="uil uil-user"></i>
                                                            </div>
                                                            <div className="value_content">
                                                                <h4>Account/Profile</h4>
                                                                <p>Manage your account settings.</p>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <a href="#" className="value_props50">
                                                            <div className="value_icon">
                                                                <i className="uil uil-desktop-cloud-alt"></i>
                                                            </div>
                                                            <div className="value_content">
                                                                <h4>Troubleshooting</h4>
                                                                <p>Experiencing a bug? Check here.</p>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <a href="#" className="value_props50">
                                                            <div className="value_icon">
                                                                <i className="uil uil-book-alt"></i>
                                                            </div>
                                                            <div className="value_content">
                                                                <h4>Course Taking</h4>
                                                                <p>Everything about taking a course on Udemy.</p>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <a href="#" className="value_props50">
                                                            <div className="value_icon">
                                                                <i className="uil uil-wallet"></i>
                                                            </div>
                                                            <div className="value_content">
                                                                <h4>Purchase/Refunds</h4>
                                                                <p>Learn about coupons, how to send gifts, and refunds.</p>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <a href="#" className="value_props50">
                                                            <div className="value_icon">
                                                                <i className="uil uil-mobile-android-alt"></i>
                                                            </div>
                                                            <div className="value_content">
                                                                <h4>Mobile</h4>
                                                                <p>On the go? Learn about our mobile app.</p>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tpc152">
                                            <div className="crse_content">
                                                <h3>Frequently Asked Questions</h3>																			
                                            </div>
                                            <div className="section3126 mt-20">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <a href="#" className="value_props51">																											
                                                            Lifetime Access																													
                                                        </a>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <a href="#" className="value_props51">																											
                                                            Cursus FAQ 																													
                                                        </a>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <a href="#" className="value_props51">																											
                                                            Downloading Courses																													
                                                        </a>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <a href="#" className="value_props51">																											
                                                            Certificate of Completion																													
                                                        </a>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <a href="#" className="value_props51">																											
                                                            Refund a Course																													
                                                        </a>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <a href="#" className="value_props51">																											
                                                            How to Solve Payment Issues																													
                                                        </a>
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
        );
    }  
};
 
const mapStateToProps = state => {
    return {        
        cartItems: state.cart.items,
        catalogs: state.catalog.catalogs,
    }
}

const mapDispatchToProps = dispatch => {
    return {
     
        fetchCourseRequest:(e) => dispatch (fetchCourseRequest(e)),
        fetchCatalogRequest:() => dispatch (fetchCatalogRequest()),
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Help)
import React from "react";
import FooterUser from "../Layout/footerUser";
import {connect} from 'react-redux';
import { fetchCourseRequest } from "../../actions/course";

class Course extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentDidMount(){
        this.props.fetchCourseRequest(this.props.page);
    } 

    render(){
      return (
        <div class="wrapper">
            <div class="sa4d25">
                <div class="container-fluid">			
                    <div class="row">
                        <div class="col-xl-12 col-lg-8">
                            <div class="section3125">
                                <div class="explore_search">
                                    <div class="ui search focus">
                                        <div class="ui left icon input swdh11">
                                            <input class="prompt srch_explore" type="text" placeholder="Search for Tuts Videos, Tutors, Tests and more.."/>
                                            <i class="uil uil-search-alt icon icon2"></i>
                                        </div>
                                    </div>
                                </div>							
                            </div>							
                        </div>
                        <div class="col-md-12">
                            <div class="_14d25">
                                <div class="row">
                                {
                                    this.props.courses.map((course,index) => {
                                        return (
                                            <div class="col-lg-3 col-md-4">
                                                <div class="fcrse_1 mt-30">
                                                    <a href="course_detail_view.html" class="fcrse_img">
                                                        <img src={course.imageVideoDescription} alt=""/>
                                                        <div class="course-overlay">
                                                            <span class="play_btn1"><i class="uil uil-play"></i></span>
                                                            <div class="crse_timer">
                                                                {course.videoDuration}
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <div class="fcrse_content">
                                                        <div class="eps_dots more_dropdown">
                                                            <a href="#"><i class="uil uil-ellipsis-v"></i></a>
                                                            <div class="dropdown-content">
                                                                <span><i class='uil uil-share-alt'></i>Share</span>
                                                                <span><i class="uil uil-heart"></i>Save</span>
                                                                <span><i class='uil uil-ban'></i>Not Interested</span>
                                                                <span><i class="uil uil-windsock"></i>Report</span>
                                                            </div>																											
                                                        </div>
                                                        {/* <div class="vdtodt">
                                                            <span class="vdt14">109k views</span>
                                                            <span class="vdt14">15 days ago</span>
                                                        </div> */}
                                                        <a href="course_detail_view.html" class="crse14s">{course.title}</a>
                                                        <a href="#" class="crse-cate">{course.language}</a>
                                                        <div class="auth1lnkprce">
                                                            <div class="prce142">${course.price}</div>
                                                            <button class="shrt-cart-btn" title="cart"><i class="uil uil-shopping-cart-alt"></i></button>
                                                        </div>
                                                    </div>
                                                </div>													
                                            </div>  
                                        )
                                    })
                                }   
                                    
                                    <div class="col-md-12">
                                        <div class="main-loader mt-50">													
                                            <div class="spinner">
                                                <div class="bounce1"></div>
                                                <div class="bounce2"></div>
                                                <div class="bounce3"></div>
                                            </div>																										
                                        </div>
                                    </div>
                                </div>				
                            </div>				
                        </div>				
                    </div>
                </div>
            </div>
            <FooterUser/>
	</div>  
      );
    }
  
};

const mapStateToProps = state => {
    return {        
        courses: state.course.courses,
        page: state.user.page,
        totalPages: state.user.totalPages
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCourseRequest:(e) => dispatch (fetchCourseRequest(e)),

    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Course);

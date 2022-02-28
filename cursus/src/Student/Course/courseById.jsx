import React, { Component } from "react";
import FooterUser from "../Layout/footerUser";
import {connect} from 'react-redux';
import { withRouterParams } from "../../Admin/Auth/withRouter";
import {courseByIdRequest} from "../../actions/course";
import {Link} from "react-router-dom";
import { addToCart,removeFromCart } from "../../actions/cart";


class CourseById extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            id : this.props.params.id,       
        }

    }

    componentDidMount(){
        this.props.courseByIdRequest(this.state.id);
    } 

    
    render(){
        let dem = 0;
       
      return (
        <div className="wrapper _bg4586">
            <div className="modal vd_mdl fade" id="videoModal" tabindex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <div class="modal-body">
                            <iframe  src={this.props.course.urlVideoDescription} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="_215b01">
                <div className="container-fluid">			
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section3125">							
                                <div className="row justify-content-center">						
                                    <div className="col-xl-4 col-lg-5 col-md-6">						
                                        <div className="preview_video">						
                                            <a href="#" className="fcrse_img" data-toggle="modal" data-target="#videoModal">
                                                <img src={this.props.course.imageVideoDescription} alt=""/>
                                                <div className="course-overlay">
                                                    {/* <div className="badge_seller">Bestseller</div> */}
                                                    <span className="play_btn1"><i className="uil uil-play"></i></span>
                                                    <span className="_215b02">Preview this course</span>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="_215b10">										
                                            <a href="#" className="_215b11">										
                                                <span><i className="uil uil-heart"></i></span>Save
                                            </a>
                                            <a href="#" className="_215b12">										
                                                <span><i className="uil uil-windsock"></i></span>Report abuse
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-xl-8 col-lg-7 col-md-6">
                                        <div className="_215b03">
                                            <h2>{this.props.course.title}</h2>
                                            <span class="_215b04">{this.props.course.shortDescription}</span>
                                        </div>
                                        
                                        {/* <div className="_215b05">
                                            <div className="crse_reviews mr-2">
                                                <i className="uil uil-star"></i>4.5
                                            </div>
                                            (81,665 ratings)
                                        </div>
                                        <div className="_215b05">										
                                            114,521 students enrolled
                                        </div>
                                        <div className="_215b06">										
                                            <div className="_215b07">										
                                                <span><i className='uil uil-comment'></i></span>
                                                English
                                            </div>
                                            <div className="_215b08">										
                                                <span><i className='uil uil-closed-captioning'></i></span>
                                                <span>English, Dutch
                                                    <span className="caption_tooltip">
                                                        12 more
                                                        <span className="caption-content">
                                                            <span>French</span>
                                                            <span>Hindi</span>
                                                            <span>German [Auto-generated]</span>
                                                            <span>Indonesian [Auto-generated]</span>
                                                            <span>Italian [Auto-generated]</span>
                                                            <span>Japanese [Auto-generated]</span>
                                                            <span>Korean</span>
                                                            <span>Polish</span>
                                                            <span>Portuguese [Auto-generated]</span>
                                                            <span>Spanish [Auto-generated]</span>
                                                            <span>Traditional Chinese</span>
                                                            <span>Turkish [Auto-generated]</span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="_215b05">										
                                            Last updated 1/2020
                                        </div> */}
                                         <div className="_215b05">										
                                            <span><i className='uil uil-comment'></i></span>
                                           {this.props.course.language}
                                        </div>
                                        <div className="_215b05">										
                                            Last updated: {this.props.course.updatedDate}
                                        </div> 
                                        <ul className="_215b31">										
                                            <li><button className="btn_adcart" type="button" onClick={() => this.props.addToCart(this.props.cartItems, this.props.course)}>Add to Cart</button></li>
                                            <Link to = "/checkout"><button className="btn_buy" type="button" onClick={() => this.props.addToCart(this.props.cartItems, this.props.course)}>Buy Now</button></Link>
                                        </ul>
                                    </div>							
                                </div>							
                            </div>							
                        </div>															
                    </div>
                </div>
            </div>
            <div className="_215b15 _byt1458">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            {/* <div className="user_dt5">
                                <div className="user_dt_left">
                                    <div className="live_user_dt">
                                        <div className="user_img5">
                                            <a href="#"><img src="images/left-imgs/img-1.jpg" alt=""/></a>												
                                        </div>
                                        <div className="user_cntnt">
                                            <a href="#" className="_df7852">Johnson Smith</a>
                                            <button className="subscribe-btn">Subscribe</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="user_dt_right">
                                    <ul>
                                        <li>
                                            <a href="#" className="lkcm152"><i className="uil uil-eye"></i><span>1452</span></a>
                                        </li>
                                        <li>
                                            <a href="#" className="lkcm152"><i className="uil uil-thumbs-up"></i><span>100</span></a>
                                        </li>
                                        <li>
                                            <a href="#" className="lkcm152"><i className="uil uil-thumbs-down"></i><span>20</span></a>
                                        </li>
                                        <li>
                                            <a href="#" className="lkcm152"><i className="uil uil-share-alt"></i><span>9</span></a>
                                        </li>
                                    </ul>
                                </div>
                            </div> */}
                            <div className="course_tabs">
                                <nav>
                                    <div className="nav nav-tabs tab_crse justify-content-center" id="nav-tab" role="tablist">
                                        <a className="nav-item nav-link active" id="nav-about-tab" data-toggle="tab" href="#nav-about" role="tab" aria-selected="true">About</a>
                                        <a className="nav-item nav-link" id="nav-courses-tab" data-toggle="tab" href="#nav-courses" role="tab" aria-selected="false">Courses Content</a>
                                        <a className="nav-item nav-link" id="nav-reviews-tab" data-toggle="tab" href="#nav-reviews" role="tab" aria-selected="false">Reviews</a>
                                    </div>
                                </nav>						
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
                                                    <h3>Requirements</h3>
                                                    <ul className="_abc124">
                                                        <li><span className="_5f7g11">{this.props.course.requirement}</span></li>
                                                    </ul>
                                            </div>
                                            <div className="_htg452 mt-35">
                                                    <h3>Description</h3>
                                                    <p>Hi! Welcome to the Web Developer Bootcamp, the <strong>only course you need to learn web development</strong>. There are a lot of options for online developer training, but this course is without a doubt the most comprehensive and effective on the market.  Here's why:</p>
                                                    <ul className="_abc124">
                                                        <li><span className="_5f7g11">{this.props.course.description}</span></li>
                                                    </ul>
                                                    <p>When you're learning to program you often have to sacrifice learning the exciting and current technologies in favor of the "beginner friendly" classNamees.  With this course, you get the best of both worlds.  This is a course designed for the complete beginner, yet it covers some of the most exciting and relevant topics in the industry.</p>
                                            </div>
                                            <div className="_htg452 mt-35">
                                                <h3>Who this course is for :</h3>
                                                <ul className="_abc124">												
                                                    <li><span className="_5f7g11">{this.props.course.whoThisCourseIsFor}</span></li>
                                            </ul>
                                            </div>	
                                            <div className="_htgdrt mt-35">
                                                <h3>What you'll learn</h3>
                                                <div className="_scd123">
                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <ul className="_htg452 _abcd145">												
                                                                <li><div className="_5f7g15"><i className="fas fa-check-circle"></i><span>{this.props.course.whatYouWillLearn}</span></div></li>
                                                                <li><div className="_5f7g15"><i className="fas fa-check-circle"></i><span>Suspendisse semper feugiat urna dictum interdum.</span></div></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <ul className="_htg452 _abcd145">
                                                                <li><div className="_5f7g15"><i className="fas fa-check-circle"></i><span>Nullam non lacus nibh. Etiam et fringilla neque, ut vulputate sapien. Sed vitae tortor gravida, interdum felis at, pulvinar enim. Integer tempor urna leo.</span></div></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>							
                                        </div>							
                                    </div>
                                    <div className="tab-pane fade" id="nav-courses" role="tabpanel">
                                        <div className="crse_content">
                                            {
                                                this.props.course.lessons?
                                                this.props.course.lessons.map((les,k) =>
                                                    {
                                                        les.lectures.map((lec) => {
                                                            return dem++
                                                        })
                                                    }
                                            ):''} 
                                            
                                            <h3>{this.props.course.title}</h3>
                                            <div className="_112456">
                                                <ul className="accordion-expand-holder">
                                                    <li><span className="accordion-expand-all _d1452">Expand all</span></li>
                                                    <li><span className="_fgr123"> {dem} lectures</span></li>
                                                    <li><span className="_fgr123">{this.props.course.videoDuration}</span></li>
                                                </ul>
                                            </div>
                                            <div id="accordion" className="ui-accordion ui-widget ui-helper-reset">
                                                {this.props.course.lessons?
                                                this.props.course.lessons.map((lesson,index) => {
                                                    return (
                                                        <div>
                                                            <a  className="accordion-header ui-accordion-header ui-helper-reset ui-state-default ui-accordion-icons ui-corner-all">												
                                                                <div className="section-header-left">
                                                                    <span className="section-title-wrapper">
                                                                        <i className='uil uil-presentation-play crse_icon'></i>
                                                                        <span className="section-title-text">{lesson.title}</span>
                                                                    </span>
                                                                </div>
                                                                <div className="section-header-right">
                                                                    <span className="num-items-in-section">8 lectures</span>
                                                                    <span className="section-header-length">22:08</span>
                                                                </div>
                                                            </a>
                                                            
                                                                    <div className="ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom">
                                                                        {lesson.lectures.map((lecture,i)=>{
                                                                            
                                                                        return (
                                                                                
                                                                                <div className="lecture-container">
                                                                                    <div className="left-content">
                                                                                        <i className='uil uil-file icon_142'></i>
                                                                                        <div className="top">
                                                                                            <div className="title">{lecture.title}</div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="details">
                                                                                        <span className="content-summary">{lecture.videoDuration}</span>
                                                                                    </div>
                                                                                </div>
                                                                                )
                                                                        })}
                                                                    </div>
                                                                
                                                            
                                                        </div>
                                                        
                                                    )
                                                }):''
                                                }
                                               
                                                {/* <a  className="accordion-header ui-accordion-header ui-helper-reset ui-state-default ui-accordion-icons ui-corner-all">												
                                                    <div className="section-header-left">
                                                        <span className="section-title-wrapper">
                                                            <i className='uil uil-presentation-play crse_icon'></i>
                                                            <span className="section-title-text">Introduction to Front End Development</span>
                                                        </span>
                                                    </div>
                                                    <div className="section-header-right">
                                                        <span className="num-items-in-section">6 lectures</span>
                                                        <span className="section-header-length">27:26</span>
                                                    </div>
                                                </a>
                                                <div className="ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom">
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className='uil uil-play-circle icon_142'></i>
                                                            <div className="top">
                                                                <div className="title">Unit Objectives</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                        <a href="#" className="preview-text">Preview</a>
                                                            <span className="content-summary">01.40</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className='uil uil-file icon_142'></i>
                                                            <div className="top">
                                                                <div className="title">Note about Setting Up Front-End Developer Environment</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">00:30</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className='uil uil-play-circle icon_142'></i>
                                                            <div className="top">
                                                                <div className="title">Setting Up Front-End Developer Environment</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">03:11</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className='uil uil-file icon_142'></i>
                                                            <div className="top">
                                                                <div className="title">Note about Introduction to the Web</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">00:11</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className='uil uil-play-circle icon_142'></i>
                                                            <div className="top">
                                                                <div className="title">Introduction to the Web</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <span className="content-summary">10.08</span>
                                                        </div>
                                                    </div>
                                                    <div className="lecture-container">
                                                        <div className="left-content">
                                                            <i className='uil uil-play-circle icon_142'></i>
                                                            <div className="top">
                                                                <div className="title">The Front End Holy Trinity</div>
                                                            </div>
                                                        </div>
                                                        <div className="details">
                                                            <a href="#" className="preview-text">Preview</a>
                                                            <span className="content-summary">11:46</span>
                                                        </div>
                                                    </div>
                                                </div> */}
                                                
                                                									
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="nav-reviews" role="tabpanel">
                                        <div className="student_reviews">
                                            <div className="row">
                                                <div className="col-lg-5">
                                                    <div className="reviews_left">
                                                        <h3>Student Feedback</h3>
                                                        <div className="total_rating">
                                                            <div className="_rate001">4.6</div>														
                                                            <div className="rating-box">
                                                                <span className="rating-star full-star"></span>
                                                                <span className="rating-star full-star"></span>
                                                                <span className="rating-star full-star"></span>
                                                                <span className="rating-star full-star"></span>
                                                                <span className="rating-star half-star"></span>
                                                            </div>
                                                            <div className="_rate002">Course Rating</div>	
                                                        </div>
                                                        <div className="_rate003">
                                                            <div className="_rate004">
                                                                <div className="progress progress1">
                                                                    <div className="progress-bar w-70" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
                                                                <div className="rating-box">
                                                                    <span className="rating-star full-star"></span>
                                                                    <span className="rating-star full-star"></span>
                                                                    <span className="rating-star full-star"></span>
                                                                    <span className="rating-star full-star"></span>
                                                                    <span className="rating-star full-star"></span>
                                                                </div>
                                                                <div className="_rate002">70%</div>
                                                            </div>
                                                            <div className="_rate004">
                                                                <div className="progress progress1">
                                                                    <div className="progress-bar w-30" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
                                                                <div className="rating-box">
                                                                    <span className="rating-star full-star"></span>
                                                                    <span className="rating-star full-star"></span>
                                                                    <span className="rating-star full-star"></span>
                                                                    <span className="rating-star full-star"></span>
                                                                    <span className="rating-star empty-star"></span>
                                                                </div>
                                                                <div className="_rate002">40%</div>
                                                            </div>
                                                            <div className="_rate004">
                                                                <div className="progress progress1">
                                                                    <div className="progress-bar w-5" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
                                                                <div className="rating-box">
                                                                    <span className="rating-star full-star"></span>
                                                                    <span className="rating-star full-star"></span>
                                                                    <span className="rating-star full-star"></span>
                                                                    <span className="rating-star empty-star"></span>
                                                                    <span className="rating-star empty-star"></span>
                                                                </div>
                                                                <div className="_rate002">5%</div>
                                                            </div>
                                                            <div className="_rate004">
                                                                <div className="progress progress1">
                                                                    <div className="progress-bar w-2" role="progressbar" aria-valuenow="2" aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
                                                                <div className="rating-box">
                                                                    <span className="rating-star full-star"></span>
                                                                    <span className="rating-star full-star"></span>
                                                                    <span className="rating-star empty-star"></span>
                                                                    <span className="rating-star empty-star"></span>
                                                                    <span className="rating-star empty-star"></span>
                                                                </div>
                                                                <div className="_rate002">1%</div>
                                                            </div>
                                                            <div className="_rate004">
                                                                <div className="progress progress1">
                                                                    <div className="progress-bar w-1" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
                                                                <div className="rating-box">
                                                                    <span className="rating-star full-star"></span>
                                                                    <span className="rating-star empty-star"></span>
                                                                    <span className="rating-star empty-star"></span>
                                                                    <span className="rating-star empty-star"></span>
                                                                    <span className="rating-star empty-star"></span>
                                                                </div>
                                                                <div className="_rate002">1%</div>
                                                            </div>
                                                        </div>
                                                    </div>												
                                                </div>
                                                <div className="col-lg-7">
                                                    <div className="review_right">
                                                        <div className="review_right_heading">
                                                            <h3>Reviews</h3>
                                                            <div className="review_search">
                                                                <input className="rv_srch" type="text" placeholder="Search reviews..."/>
                                                                <button className="rvsrch_btn"><i className='uil uil-search'></i></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="review_all120">
                                                        <div className="review_item">
                                                            <div className="review_usr_dt">
                                                                <img src="images/left-imgs/img-1.jpg" alt=""/>
                                                                <div className="rv1458">
                                                                    <h4 className="tutor_name1">John Doe</h4>
                                                                    <span className="time_145">2 hour ago</span>
                                                                </div>
                                                            </div>
                                                            <div className="rating-box mt-20">
                                                                <span className="rating-star full-star"></span>
                                                                <span className="rating-star full-star"></span>
                                                                <span className="rating-star full-star"></span>
                                                                <span className="rating-star full-star"></span>
                                                                <span className="rating-star half-star"></span>
                                                            </div>
                                                            <p className="rvds10">Nam gravida elit a velit rutrum, eget dapibus ex elementum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce lacinia, nunc sit amet tincidunt venenatis.</p>
                                                            <div className="rpt100">
                                                                <span>Was this review helpful?</span>
                                                                <div className="radio--group-inline-container">
                                                                    <div className="radio-item">
                                                                        <input id="radio-1" name="radio" type="radio"/>
                                                                        <label for="radio-1" className="radio-label">Yes</label>
                                                                    </div>
                                                                    <div className="radio-item">
                                                                        <input id="radio-2" name="radio" type="radio"/>
                                                                        <label  for="radio-2" className="radio-label">No</label>
                                                                    </div>
                                                                </div>
                                                                <a href="#" className="report145">Report</a>
                                                            </div>
                                                        </div>
                                                        <div className="review_item">
                                                            <div className="review_usr_dt">
                                                                <img src="images/left-imgs/img-2.jpg" alt=""/>
                                                                <div className="rv1458">
                                                                    <h4 className="tutor_name1">Jassica William</h4>
                                                                    <span className="time_145">12 hour ago</span>
                                                                </div>
                                                            </div>
                                                            <div className="rating-box mt-20">
                                                                <span className="rating-star full-star"></span>
                                                                <span className="rating-star full-star"></span>
                                                                <span className="rating-star full-star"></span>
                                                                <span className="rating-star full-star"></span>
                                                                <span className="rating-star empty-star"></span>
                                                            </div>
                                                            <p className="rvds10">Nam gravida elit a velit rutrum, eget dapibus ex elementum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce lacinia, nunc sit amet tincidunt venenatis.</p>
                                                            <div className="rpt100">
                                                                <span>Was this review helpful?</span>
                                                                <div className="radio--group-inline-container">
                                                                    <div className="radio-item">
                                                                        <input id="radio-3" name="radio1" type="radio"/>
                                                                        <label for="radio-3" className="radio-label">Yes</label>
                                                                    </div>
                                                                    <div className="radio-item">
                                                                        <input id="radio-4" name="radio1" type="radio"/>
                                                                        <label  for="radio-4" className="radio-label">No</label>
                                                                    </div>
                                                                </div>
                                                                <a href="#" className="report145">Report</a>
                                                            </div>
                                                        </div>
                                                        <div className="review_item">
                                                            <div className="review_usr_dt">
                                                                <img src="images/left-imgs/img-3.jpg" alt=""/>
                                                                <div className="rv1458">
                                                                    <h4 className="tutor_name1">Albert Dua</h4>
                                                                    <span className="time_145">5 days ago</span>
                                                                </div>
                                                            </div>
                                                            <div className="rating-box mt-20">
                                                                <span className="rating-star full-star"></span>
                                                                <span className="rating-star full-star"></span>
                                                                <span className="rating-star full-star"></span>
                                                                <span className="rating-star half-star"></span>
                                                                <span className="rating-star empty-star"></span>
                                                            </div>
                                                            <p className="rvds10">Nam gravida elit a velit rutrum, eget dapibus ex elementum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce lacinia, nunc sit amet tincidunt venenatis.</p>
                                                            <div className="rpt100">
                                                                <span>Was this review helpful?</span>
                                                                <div className="radio--group-inline-container">
                                                                    <div className="radio-item">
                                                                        <input id="radio-5" name="radio2" type="radio"/>
                                                                        <label for="radio-5" className="radio-label">Yes</label>
                                                                    </div>
                                                                    <div className="radio-item">
                                                                        <input id="radio-6" name="radio2" type="radio"/>
                                                                        <label  for="radio-6" className="radio-label">No</label>
                                                                    </div>
                                                                </div>
                                                                <a href="#" className="report145">Report</a>
                                                            </div>
                                                        </div>
                                                        <div className="review_item">
                                                            <div className="review_usr_dt">
                                                                <img src="images/left-imgs/img-4.jpg" alt=""/>
                                                                <div className="rv1458">
                                                                    <h4 className="tutor_name1">Zoena Singh</h4>
                                                                    <span className="time_145">15 days ago</span>
                                                                </div>
                                                            </div>
                                                            <div className="rating-box mt-20">
                                                                <span className="rating-star full-star"></span>
                                                                <span className="rating-star full-star"></span>
                                                                <span className="rating-star full-star"></span>
                                                                <span className="rating-star full-star"></span>
                                                                <span className="rating-star full-star"></span>
                                                            </div>
                                                            <p className="rvds10">Nam gravida elit a velit rutrum, eget dapibus ex elementum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce lacinia, nunc sit amet tincidunt venenatis.</p>
                                                            <div className="rpt100">
                                                                <span>Was this review helpful?</span>
                                                                <div className="radio--group-inline-container">
                                                                    <div className="radio-item">
                                                                        <input id="radio-7" name="radio3" type="radio"/>
                                                                        <label for="radio-7" className="radio-label">Yes</label>
                                                                    </div>
                                                                    <div className="radio-item">
                                                                        <input id="radio-8" name="radio3" type="radio"/>
                                                                        <label  for="radio-8" className="radio-label">No</label>
                                                                    </div>
                                                                </div>
                                                                <a href="#" className="report145">Report</a>
                                                            </div>
                                                        </div>
                                                        <div className="review_item">
                                                            <div className="review_usr_dt">
                                                                <img src="images/left-imgs/img-5.jpg" alt=""/>
                                                                <div className="rv1458">
                                                                    <h4 className="tutor_name1">Joy Dua</h4>
                                                                    <span className="time_145">20 days ago</span>
                                                                </div>
                                                            </div>
                                                            <div className="rating-box mt-20">
                                                                <span className="rating-star full-star"></span>
                                                                <span className="rating-star full-star"></span>
                                                                <span className="rating-star full-star"></span>
                                                                <span className="rating-star empty-star"></span>
                                                                <span className="rating-star empty-star"></span>
                                                            </div>
                                                            <p className="rvds10">Nam gravida elit a velit rutrum, eget dapibus ex elementum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce lacinia, nunc sit amet tincidunt venenatis.</p>
                                                            <div className="rpt100">
                                                                <span>Was this review helpful?</span>
                                                                <div className="radio--group-inline-container">
                                                                    <div className="radio-item">
                                                                        <input id="radio-9" name="radio4" type="radio"/>
                                                                        <label for="radio-9" className="radio-label">Yes</label>
                                                                    </div>
                                                                    <div className="radio-item">
                                                                        <input id="radio-10" name="radio4" type="radio"/>
                                                                        <label  for="radio-10" className="radio-label">No</label>
                                                                    </div>
                                                                </div>
                                                                <a href="#" className="report145">Report</a>
                                                            </div>
                                                        </div>
                                                        <div className="review_item">
                                                            <a href="#" className="more_reviews">See More Reviews</a>
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
            <FooterUser/>
	    </div>
      );
    }
  
};

const mapStateToProps = state => {
    return {        
        course: state.course.courseById,
        cartItems: state.cart.items,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        courseByIdRequest:(e) => dispatch (courseByIdRequest(e)),
        addToCart:(e,p) => dispatch (addToCart(e,p)),
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouterParams(CourseById));;

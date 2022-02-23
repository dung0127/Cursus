import React from "react";
import FooterUser from "./footerUser";
import {connect} from 'react-redux';
import { fetchCourseRequest } from "../../actions/course";
import {fetchDetailUserRequest} from "../../actions/detail";
import OwlCarousel from 'react-owl-carousel';
import {Link} from "react-router-dom";
import { addToCart } from "../../actions/cart";
import Success from "../../Alert/success";
import Warning from "../../Alert/warning";


class MainUser extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            course:'',
        }
    }

    componentDidMount(){
        this.props.fetchCourseRequest(0);
    } 

    render(){
        console.log(this.props.courses)
        return (
            <div className="wrapper">
                <div className="sa4d25">
                    <div className="container-fluid">			
                        <div className="row">
                                <div  id="success" style={{display:"none"}}><Success name="Add to cart"/></div>
                                <div  id="warning" style={{display:"none"}} ><Warning name="Already exits"/></div>
                            {localStorage.getItem("isLogin")?
                                <div className="col-xl-9 col-lg-8">
                                    <div className="section3125">
                                            
                                        <h4 className="item_title"> Courses</h4>
                                        
                                        <Link to="/course" className="see150">See all</Link>
                                       
                                        <div className="la5lo1">
                                            
                                            <OwlCarousel className=" owl-theme">
                                                    {
                                                    this.props.courses.map((course,index) => {
                                                        return (
                                                            <div className="item">
                                                                <div className="fcrse_1 mb-20">
                                                                    <Link to={`/course/${course.id}`} params={course.id} className="fcrse_img">
                                                                        <img src={course.imageVideoDescription} alt=""/>
                                                                        <div className="course-overlay">
                                                                            <div class="badge_seller">Bestseller</div>
                                                                            <span className="play_btn1"><i className="uil uil-play"></i></span>
                                                                            <div className="crse_timer">
                                                                                {course.videoDuration}
                                                                            </div>
                                                                        </div>
                                                                    </Link> 
                                                                    <div className="fcrse_content">
                                                                        <div className="eps_dots more_dropdown">
                                                                            <a href="#"><i className='uil uil-ellipsis-v'></i></a>
                                                                            <div className="dropdown-content">
                                                                                <span><i className='uil uil-share-alt'></i>Share</span>
                                                                                <span><i className="uil uil-heart"></i>Save</span>
                                                                                <span><i className='uil uil-ban'></i>Not Interested</span>
                                                                                <span><i className="uil uil-windsock"></i>Report</span>
                                                                            </div>																										
                                                                        </div>
                                                                        {/* <div className="vdtodt">
                                                                            <span className="vdt14">109k views</span>
                                                                            <span className="vdt14">15 days ago</span>
                                                                        </div> */}
                                                                        <Link to={`/course/${course.id}`} params={course.id} className="crse14s">{course.title}</Link>
                                                                        <a href="#" class="crse-cate">{course.language}</a>
                                                                        <div className="auth1lnkprce">
                                                                            <div className="prce142">${course.price}</div>
                                                                            <button className="shrt-cart-btn" title="cart" type="button" onClick={() => this.props.addToCart(this.props.cartItems, course)}><i className="uil uil-shopping-cart-alt"></i></button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </OwlCarousel>
                                        </div>
                                    </div>
                                    
                                    <div className="section3126">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-12 col-md-6">
                                                <div className="value_props">
                                                    <div className="value_icon">
                                                        <i className='uil uil-history'></i>
                                                    </div>
                                                    <div className="value_content">
                                                        <h4>Go at your own pace</h4>
                                                        <p>Enjoy lifetime access to courses on Edututs+'s website</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-12 col-md-6">
                                                <div className="value_props">
                                                    <div className="value_icon">
                                                        <i className='uil uil-user-check'></i>
                                                    </div>
                                                    <div className="value_content">
                                                        <h4>Learn from industry experts</h4>
                                                        <p>Select from top instructors around the world</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-12 col-md-6">
                                                <div className="value_props">
                                                    <div className="value_icon">
                                                        <i className='uil uil-play-circle'></i>
                                                    </div>
                                                    <div className="value_content">
                                                        <h4>Find video courses on almost any topic</h4>
                                                        <p>Build your library for your career and personal growth</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-12 col-md-6">
                                                <div className="value_props">
                                                    <div className="value_icon">
                                                        <i className='uil uil-presentation-play'></i>
                                                    </div>
                                                    <div className="value_content">
                                                        <h4>100,000 online courses</h4>
                                                        <p>Explore a variety of fresh topics</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                :
                                <div className="col-xl-12 col-lg-8">
                                    <div className="section3125">
                                        <h4 className="item_title"> Courses</h4>
                                        <Link to="/course" className="see150">See all</Link>
                                        <div className="la5lo1">
                                            <OwlCarousel className="owl-theme">
                                                {
                                                    this.props.courses.map((course,k) => {
                                                        return (
                                                            <div className="item">
                                                                <div className="fcrse_1 mb-20">
                                                                    <Link to={`/course/${course.id}`} params={course.id} className="fcrse_img">
                                                                        <img src={course.imageVideoDescription} alt=""/>
                                                                        <div className="course-overlay">
                                                                            <div class="badge_seller">Bestseller</div>
                                                                            <span className="play_btn1"><i className="uil uil-play"></i></span>
                                                                            <div className="crse_timer">
                                                                                {course.videoDuration}
                                                                            </div>
                                                                        </div>
                                                                    </Link> 
                                                                    <div className="fcrse_content">
                                                                        <div className="eps_dots more_dropdown">
                                                                            <a href="#"><i className='uil uil-ellipsis-v'></i></a>
                                                                            <div className="dropdown-content">
                                                                                <span><i className='uil uil-share-alt'></i>Share</span>
                                                                                <span><i className="uil uil-heart"></i>Save</span>
                                                                                <span><i className='uil uil-ban'></i>Not Interested</span>
                                                                                <span><i className="uil uil-windsock"></i>Report</span>
                                                                            </div>																										
                                                                        </div>
                                                                        {/* <div className="vdtodt">
                                                                            <span className="vdt14">109k views</span>
                                                                            <span className="vdt14">15 days ago</span>
                                                                        </div> */}
                                                                        <Link to={`/course/${course.id}`} params={course.id} className="crse14s">{course.title}</Link>
                                                                        <a href="#" class="crse-cate">{course.language}</a>
                                                                        <div className="auth1lnkprce">
                                                                            <div className="prce142">${course.price}</div>
                                                                            <button className="shrt-cart-btn" title="cart" type="button" onClick={() => this.props.addToCart(this.props.cartItems, course)}><i className="uil uil-shopping-cart-alt"></i></button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </OwlCarousel> 
                                        </div>
                                    </div>
                                    <div className="section3126">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-12 col-md-6">
                                                <div className="value_props">
                                                    <div className="value_icon">
                                                        <i className='uil uil-history'></i>
                                                    </div>
                                                    <div className="value_content">
                                                        <h4>Go at your own pace</h4>
                                                        <p>Enjoy lifetime access to courses on Edututs+'s website</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-12 col-md-6">
                                                <div className="value_props">
                                                    <div className="value_icon">
                                                        <i className='uil uil-user-check'></i>
                                                    </div>
                                                    <div className="value_content">
                                                        <h4>Learn from industry experts</h4>
                                                        <p>Select from top instructors around the world</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-12 col-md-6">
                                                <div className="value_props">
                                                    <div className="value_icon">
                                                        <i className='uil uil-play-circle'></i>
                                                    </div>
                                                    <div className="value_content">
                                                        <h4>Find video courses on almost any topic</h4>
                                                        <p>Build your library for your career and personal growth</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-12 col-md-6">
                                                <div className="value_props">
                                                    <div className="value_icon">
                                                        <i className='uil uil-presentation-play'></i>
                                                    </div>
                                                    <div className="value_content">
                                                        <h4>100,000 online courses</h4>
                                                        <p>Explore a variety of fresh topics</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                            {localStorage.getItem("isLogin")?
                                <div className="col-xl-3 col-lg-4">
                                    
                                    <div className="right_side">
                                            <div className="fcrse_2 mb-30">
                                                <div className="tutor_img">
                                                    <a href="my_instructor_profile_view.html"><img src={this.props.user.avatarImage} alt=""/></a>												
                                                </div>
                                                <div className="tutor_content_dt">
                                                    <div className="tutor150">
                                                        <a href="my_instructor_profile_view.html" className="tutor_name">{this.props.user.username}</a>
                                                        <div className="mef78" title="Verify">
                                                            <i className="uil uil-check-circle"></i>
                                                        </div>
                                                    </div>
                                                    <div className="tutor_cate">{this.props.user.email}</div>
                                                    <ul className="tutor_social_links">
                                                        <li><a href="#" className="fb"><i className="fab fa-facebook-f"></i></a></li>
                                                        <li><a href="#" className="tw"><i className="fab fa-twitter"></i></a></li>
                                                        <li><a href="#" className="ln"><i className="fab fa-linkedin-in"></i></a></li>
                                                        <li><a href="#" className="yu"><i className="fab fa-youtube"></i></a></li>
                                                    </ul>
                                                    
                                                    <Link to="/detail" className="prfle12link">Go To Profile</Link>
                                                </div> 
                                            </div>
                                        <div className="get1452">
                                            <h4>Get personalized recommendations</h4>
                                            <p>Answer a few questions for your top picks</p>
                                            <button className="Get_btn" onclick="window.location.href = '#';">Get Started</button>
                                        </div>
                                    </div>
                                    
                                </div>
                                :''
                        }
                        </div>
                    </div>
                    
                </div>
                {/* <Alert color='primary' fade={true}>check it out!</Alert>
                <Provider template={AlertTemplate} {...options}>
      <button
        onClick={() => {
          alert.show("Oh look, an alert!");
        }}
      >
        Show Alert
      </button>
      <button
        onClick={() => {
          alert.error("You just broke something!");
        }}
      >
        Oops, an error
      </button>
      <button
        onClick={() => {
          alert.success("It's ok now!");
        }}
      >
        Success!
      </button>
  </Provider> */}
  
                <FooterUser/>
            </div>
      );
    }
  
};

const mapStateToProps = state => {
    return {        
        courses: state.course.courses,
        page: state.course.page,
        totalPages: state.course.totalPages,
        user: state.detail.user,
        cartItems: state.cart.items,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCourseRequest:(e) => dispatch (fetchCourseRequest(e)),
        fetchDetailUserRequest:() => dispatch (fetchDetailUserRequest()),
        addToCart:(e,p) => dispatch (addToCart(e,p)),
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(MainUser);

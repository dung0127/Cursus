import React, { Component } from "react";
import FooterUser from "../Layout/footerUser";
import {connect} from 'react-redux';
import { fetchCourseRequest } from "../../actions/course"
import { withRouterParams } from "../../Admin/Auth/withRouter";
import { fetchSubCatalogRequest } from "../../actions/subCatalog";
import { fetchCatalogRequest} from "../../actions/catalog";
import {courseByIdRequest} from "../../actions/course";
import {Link} from "react-router-dom";
import { addToCart,removeFromCart } from "../../actions/cart";


class CourseLesson extends React.Component {
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
        const {course} = this.props
        return (
		<div className="lecture-container-wrap d-flex">
			<div className="lecture-sidebar">
				<h4 className="p-4 lecture-sidebar-course-title">{course.title}</h4>
				<div className="lecture-sidebar-curriculum-wrap">
					{course.lessons?
						course.lessons.map((lesson,i)=>{
						return(
						<div className="course-course-section">
							<div className="section-header pp-2 d-flex">
								<span className="section-name flex-grow-1 ms-2 d-flex">
									<strong className="flex-grow-1">{lesson.title}</strong>
								</span>
							</div>
							<div className="course-section-body">                                                              
								
								{lesson.lectures.map((lecture,j)=>{
									return(
										<div className="sidebar-section-item">
											<div className="section-item-title">
												<a href="#" className="pp-2 d-flex">
													<span className="lecture-status-icon pr-1">
														<i class="uil uil-play-circle icon_142"></i>
													</span>
													<div className="title-container pl-2 flex-grow-1 d-flex">
														<span className="lecture-name flex-grow-1">
															{lecture.title}
														</span>
													</div>
												</a>
											</div>
										</div> 
									)
								})}                          
								
							</div>
						</div>      
					)}):''}                        
				</div>
			</div>
			<div className="lecture-container">
				<h2 className="lecture-title mb-4">A Note On Asking For Help</h2>                          
				<div className="lecture-content-inner mt-35">
					<div className="lecture-content-inner-video">
						<div className="video-responsive">
							<iframe src={course.urlVideoDescription} className="lec-responsive-width"></iframe>
						</div>
					</div>             
				</div>  
				<div className="lecture-content-txt mt-35">
					<p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium nisl sit amet nisi vehicula iaculis. Praesent nisl tellus, suscipit vel aliquet id, hendrerit in leo. Nulla facilisi. Aenean consectetur malesuada nibh, eu feugiat augue finibus eu. Quisque ac erat nec libero finibus bibendum ac quis libero. Nulla sed tempor leo. Donec vulputate justo arcu, ac ornare neque gravida id. Sed in ligula mattis, commodo quam a, dictum massa. Donec nec neque vestibulum, faucibus quam eget, posuere nisi. Donec tincidunt placerat rhoncus. Integer sollicitudin feugiat dolor id varius. Aenean ut nibh vel erat rutrum lacinia. Nam tristique faucibus elementum. Donec id turpis a sem finibus scelerisque et ut elit. Aliquam quis nisl augue. Donec volutpat leo eget ligula dictum, vitae faucibus massa gravida.</p>
				</div>
			</div>
		</div>
			);
    }
  
};

const mapStateToProps = state => {
    return {        
        course: state.course.courseBy,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        courseByIdRequest:(e) => dispatch (courseByIdRequest(e)),
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouterParams(CourseLesson));;

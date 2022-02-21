import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Layout/footer';
import {COURSE_API_BASE_URL} from "../../config/env";
import authHeader from "../../config/authHeader";
import axios from 'axios';
import {connect} from 'react-redux';
import { fetchCourseRequest, deleteCourseRequest } from "../../actions/course";

class CourseInfo extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }
    
    
    componentDidMount(){
        this.props.fetchCourseRequest(this.props.page);
    } 

    handleClick(data) {
        console.log(data);
        if(data >= 0 && data< this.props.totalPages)
        {   
            this.props.fetchCourseRequest(data);
        }
    }

    handleClickDelete(data) {
        let text = "Are you sure?";
        if (window.confirm(text) == true) {
            this.props.deleteCourseRequest(data);
        } 
        
    }
    render() {
        return (
            <div className="wrapper" >
                <div className="sa4d25">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <h2 className="st_title"><i className="uil uil-book-alt"></i>Courses</h2>
                            </div>
                            <div className="col-md-12">
                                <div className="card_dash1">
                                    <div className="card_dash_left1">
                                        <i className="uil uil-book-alt"></i>
                                        <h1>Jump Into Course Creation</h1>
                                    </div>
                                    <div className="card_dash_right1">
                                        <Link to="/add-course"><button className="create_btn_dash">Create Your Course</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="my_courses_tabs">
                        
                                    <div className="tab-content" id="pills-tabContent">
                                        <div className="tab-pane fade show active" id="pills-my-courses" role="tabpanel">
                                            <div className="table-responsive mt-30">
                                                <div>
                                                    <div className="section3125">
                                                        <div className="explore_search">
                                                            <div className="ui search focus">
                                                                <div className="ui left icon input swdh11">
                                                                    <input className="prompt srch_explore" type="text" placeholder="Search for Courses..." />
                                                                    <i className="uil uil-search-alt icon icon2"></i>
                                                                </div>
                                                            </div>
                                                        </div>							
                                                    </div>							
                                                </div>
                                                <table className="table ucp-table">
                                                    <thead className="thead-s">
                                                        <tr>
                                                            <th className="text-center" scope="col">No.</th>
                                                            <th className="cell-ta" >Thumbnail</th>
                                                            <th className="cell-ta" >Title</th>
                                                            <th className="cell-ta" >Description</th>
                                                            <th className="cell-ta" >Requirement</th>
                                                            <th className="text-center" >Status</th>
                                                            <th className="text-center" >Price</th>
                                                            <th className="text-center" colSpan="2" >Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            this.props.courses.map((course,index) => {
                                                                return (
                                                                    <tr key={index}>
                                                                        <td className="text-center">{index + 1 + this.props.page*10}</td>
                                                                        <td className="text-center"><img src={course.imageVideoDescription} style={{height:"40px", width:"60px"}}/></td>
                                                                        <td className="cell-ta">{course.title}</td>
                                                                        <td className="cell-ta">{course.description}</td>
                                                                        <td className="cell-ta">{course.requirement}</td>
                                                                        <td className="text-center">{course.activate ? <b className="course_active">Active</b>:<b className="course_inactive">Inactive</b>}</td>
                                                                        <td className="text-center">${course.price}</td>
                                                                        <td class="text-center">
                                                                            <a href="#" title="Edit" class="gray-s"><i class="uil uil-edit-alt"></i></a>
                                                                        </td>
                                                                        <td className="text-center"> 
                                                                            <a href="#" title="Delete" className="gray-s"><i className="uil uil-trash-alt" onClick={() => this.handleClickDelete(course.id)}></i></a>
                                                                        </td>
                                                                    </tr>); 
                                                                }
                                                            )
                                                        }
                                                    </tbody>
                                                </table>
                                            </div>
                                            {this.props.totalPages>0?
                                            <div className="step-footer step-tab-pager text-center">
                                                    <div class="ui pagination menu" role="navigation">  
                                                    {this.props.page > 0?   
                                                    <a className="icon item" rel="prev" aria-label="« Previous" onClick={() => this.handleClick(this.props.page-1)}> <i className="left chevron icon"></i> </a>
                                                    :''}   
                                                    {
                                                    [...Array(this.props.totalPages)].map((e, i) => (this.props.page) == i ?<a className="item active"  onClick={() => this.handleClick(i)} key={i}>{i+1}</a>
                                                                                                                            :<a className="item"  onClick={() => this.handleClick(i)} key={i}>{i+1}</a>)         
                                                    }        
                                                    {this.props.page  < (this.props.totalPages-1)?
                                                    <a className="icon item" rel="next" aria-label="Next »" onClick={() => this.handleClick(this.props.page+1)}> <i className="right chevron icon"></i> </a>
                                                    :''}
                                                </div>   
                                            </div>
                                            :''}
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

const mapStateToProps = state => {
    return {        
        courses: state.course.courses,
        page: state.course.page,
        totalPages: state.course.totalPages
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCourseRequest:(e) => dispatch (fetchCourseRequest(e)),
        deleteCourseRequest:(e) => dispatch (deleteCourseRequest(e)),
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(CourseInfo);
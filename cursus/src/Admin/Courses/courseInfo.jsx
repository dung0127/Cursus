import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Layout/footer';
import {COURSE_API_BASE_URL} from "../../config/env";
import authHeader from "../../config/authHeader";
import axios from 'axios';
import {connect} from 'react-redux';
import { fetchCourseRequest, deleteCourseRequest, fetchCourseByDrafRequest } from "../../actions/course";
import Success from "../../Alert/success";
import Error from "../../Alert/error";

class CourseInfo extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }
    
    
    componentDidMount(){
        this.props.fetchCourseRequest(this.props.page);
        this.props.fetchCourseByDrafRequest(this.props.page)
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
        console.log(this.props.coursesByDraf)
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
                        {this.props.messageSuccess=="Success"?
                        <div  id="success" style={{display:"none"}}><Success name={this.props.messageSuccess}/></div>:
                        <div  id="error" style={{display:"none"}}><Error name={this.props.messageSuccess}/></div>}
                        

                        <div className="row">
                            <div className="col-md-12">
                                <div className="my_courses_tabs">
                                    <ul class="nav nav-pills my_crse_nav" id="pills-tab" role="tablist">
                                        <li class="nav-item">
                                            <a class="nav-link active" id="pills-my-courses-tab" data-toggle="pill" href="#pills-my-courses" role="tab" aria-controls="pills-my-courses" aria-selected="false"><i class="uil uil-book-alt"></i>All Courses</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="pills-my-purchases-tab" data-toggle="pill" href="#pills-my-purchases" role="tab" aria-controls="pills-my-purchases" aria-selected="true"><i class="uil uil-download-alt"></i> Draf</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="pills-upcoming-courses-tab" data-toggle="pill" href="#pills-upcoming-courses" role="tab" aria-controls="pills-upcoming-courses" aria-selected="false"><i className="uil uil-upload-alt"></i>Activate </a>
                                        </li>
                                    </ul>
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
                                                            <th className="text-center" >Thumbnail</th>
                                                            <th className="cell-ta" >Title</th>
                                                            <th className="cell-ta" style={{width:"300px"}}>Description</th>
                                                            <th className="cell-ta" >Requirement</th>
                                                            <th className="text-center" >Price</th>
                                                            <th className="text-center" >Status</th>
                                                            <th className="text-center" >Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            this.props.courses.map((course,index) => {
                                                                return (
                                                                    <tr key={index}>
                                                                        <td className="text-center">IT-00{index + 1 + this.props.page*10}</td>
                                                                        <td className="text-center"><img src={course.imageVideoDescription} style={{height:"40px", width:"60px"}}/></td>
                                                                        <td className="cell-ta">{course.title}</td>
                                                                        <td className="cell-ta">{course.description}</td>
                                                                        <td className="cell-ta">{course.requirement}</td>
                                                                        <td className="text-center">${course.price}</td>
                                                                        <td className="text-center">{course.activate ? <b className="course_active">Activate</b>:<b className="course_inactive">Draf</b>}</td>
                                                                        
                                                                        <td className="text-center" > 
                                                                            <Link to={`/course/${course.id}`} params={course.id} title="Detail" className="gray-s"><i class="uil uil-file icon_142"></i></Link>
                                                                            <Link to={`/edit-course/${course.id}`} params={course.id} title="Edit" className="gray-s"><i className="uil uil-edit-alt" ></i></Link>
                                                                            <a href="#" title="Delete" className="gray-s"><i className="uil uil-trash-alt" onClick={() => this.handleClickDelete(course.id)}></i></a>
                                                                        </td>
                                                                    </tr>); 
                                                                }
                                                            )
                                                        }
                                                    </tbody>
                                                </table>
                                                
                                            </div>
                                            {this.props.totalPages>1?
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
                                        <div className="tab-pane fade " id="pills-my-purchases" role="tabpanel">
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
                                                            <th className="text-center" >Thumbnail</th>
                                                            <th className="cell-ta" >Title</th>
                                                            <th className="cell-ta" style={{width:"300px"}}>Description</th>
                                                            <th className="cell-ta" >Requirement</th>
                                                            <th className="text-center" >Price</th>
                                                            <th className="text-center" >Status</th>
                                                            <th className="text-center" >Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            this.props.coursesByDraf.map((draf,index) => {
                                                                return (
                                                                    <tr key={index}>
                                                                        <td className="text-center">IT-00{index + 1 + this.props.page*10}</td>
                                                                        <td className="text-center"><img src={draf.imageVideoDescription} style={{height:"40px", width:"60px"}}/></td>
                                                                        <td className="cell-ta">{draf.title}</td>
                                                                        <td className="cell-ta">{draf.description}</td>
                                                                        <td className="cell-ta">{draf.requirement}</td>
                                                                        <td className="text-center">${draf.price}</td>
                                                                        <td className="text-center">{draf.activate ? <b className="course_active">Activate</b>:<b className="course_inactive">Draf</b>}</td>
                                                                        
                                                                        <td className="text-center" > 
                                                                            <Link to={`/course/${draf.id}`} params={draf.id} title="Detail" className="gray-s"><i class="uil uil-file icon_142"></i></Link>
                                                                            <Link to={`/edit-course/${draf.id}`} params={draf.id} title="Edit" className="gray-s"><i className="uil uil-edit-alt" ></i></Link>
                                                                            <a href="#" title="Delete" className="gray-s"><i className="uil uil-trash-alt" onClick={() => this.handleClickDelete(draf.id)}></i></a>
                                                                        </td>
                                                                    </tr>); 
                                                                }
                                                            )
                                                        }
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade " id="pills-upcoming-courses" role="tabpanel">
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
                                                            <th className="text-center" >Thumbnail</th>
                                                            <th className="cell-ta" >Title</th>
                                                            <th className="cell-ta" style={{width:"300px"}} >Description</th>
                                                            <th className="cell-ta" >Requirement</th>
                                                            <th className="text-center" >Price</th>
                                                            <th className="text-center" >Status</th>
                                                            <th className="text-center">Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            this.props.coursesByActivate.map((activate,index) => {
                                                                return (
                                                                    <tr key={index}>
                                                                        <td className="text-center">IT-00{index + 1 + this.props.page*10}</td>
                                                                        <td className="text-center"><img src={activate.imageVideoDescription} style={{height:"40px", width:"60px"}}/></td>
                                                                        <td className="cell-ta">{activate.title}</td>
                                                                        <td className="cell-ta">{activate.description}</td>
                                                                        <td className="cell-ta">{activate.requirement}</td>
                                                                        <td className="text-center">${activate.price}</td>
                                                                        <td className="text-center">{activate.activate ? <b className="course_active">Activate</b>:<b className="course_inactive">Draf</b>}</td>
                                                                        
                                                                        <td className="text-center" > 
                                                                            <Link to={`/course/${activate.id}`} params={activate.id} title="Detail" className="gray-s"><i class="uil uil-file icon_142"></i></Link>
                                                                            <Link to={`/edit-course/${activate.id}`} params={activate.id} title="Edit" className="gray-s"><i className="uil uil-edit-alt" ></i></Link>
                                                                            <a href="#" title="Delete" className="gray-s"><i className="uil uil-trash-alt" onClick={() => this.handleClickDelete(activate.id)}></i></a>
                                                                        </td>
                                                                    </tr>); 
                                                                }
                                                            )
                                                        }
                                                    </tbody>
                                                </table>
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
        );

    }
}

const mapStateToProps = state => {
    return {        
        courses: state.course.courses,
        page: state.course.page,
        totalPages: state.course.totalPages,
        coursesByDraf : state.course.coursesByDraf,
        coursesByActivate : state.course.coursesByActivate,
        messageSuccess: state.course.messageSuccess
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCourseRequest:(e) => dispatch (fetchCourseRequest(e)),
        deleteCourseRequest:(e) => dispatch (deleteCourseRequest(e)),
        fetchCourseByDrafRequest:(e) =>dispatch (fetchCourseByDrafRequest(e)),
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(CourseInfo);
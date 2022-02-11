import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Layout/footer';
import {COURSE_API_BASE_URL} from "../../config/env";
import authHeader from "../../config/authHeader";
import axios from 'axios';

class CourseInfo extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            courses: [],
            page: 0,
            totalPages: 0,
        }
        this.handleClick=this.handleClick.bind(this);
    }
    
    
    componentDidMount(){
        axios.get(COURSE_API_BASE_URL +'/?pageNumber='+ this.state.page, { headers: authHeader() }).then((res) => {
            this.setState({courses: res.data.data.content, 
                            page: res.data.data.pageable.pageNumber,
                            totalPages: res.data.data.totalPages});   
        });
    } 

    handleClick(data) {
        console.log(data);
        if(data >= 0 && data< this.state.totalPages)
        {   
            axios.get(COURSE_API_BASE_URL +'/?pageNumber='+ data, { headers: authHeader() }).then((res) => {
            this.setState({courses: res.data.data.content, 
                            page: res.data.data.pageable.pageNumber,
                            totalPages: res.data.data.totalPages});   
            });
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
                                                            this.state.courses.map((course,index) => {
                                                                return (
                                                                    <tr key={index}>
                                                                        <td className="text-center">{index + 1 + this.state.page*10}</td>
                                                                        <td className="text-center"><img src={course.imageVideoDescription} style={{height:"40px", width:"60px"}}/></td>
                                                                        <td className="cell-ta">{course.title}</td>
                                                                        <td className="cell-ta">{course.description}</td>
                                                                        <td className="cell-ta">{course.requirement}</td>
                                                                        <td className="text-center">{course.activate ? <b className="course_active">Active</b>:<b className="course_inactive">Inactive</b>}</td>
                                                                        <td className="text-center">${course.price}</td>
                                                                        <td class="text-center">
                                                                            <a href="#" title="Edit" class="gray-s"><i class="uil uil-edit-alt"></i></a>
                                                                        </td>
                                                                        <td class="text-center">
                                                                            <a href="#" title="Delete" class="gray-s"><i class="uil uil-trash-alt"></i></a>
                                                                        </td> 
                                                                    </tr>);
                                                                }
                                                            )
                                                        }
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="step-footer step-tab-pager text-center">
                                                    <div class="ui pagination menu" role="navigation">  
                                                    {this.state.page > 0?   
                                                    <a className="icon item" rel="prev" aria-label="« Previous" onClick={() => this.handleClick(this.state.page-1)}> <i className="left chevron icon"></i> </a>
                                                    :''}   
                                                    {
                                                    [...Array(this.state.totalPages)].map((e, i) => (this.state.page) == i ?<a className="item active"  onClick={() => this.handleClick(i)} key={i}>{i+1}</a>
                                                                                                                            :<a className="item"  onClick={() => this.handleClick(i)} key={i}>{i+1}</a>)         
                                                    }        
                                                    {this.state.page  < (this.state.totalPages-1)?
                                                    <a className="icon item" rel="next" aria-label="Next »" onClick={() => this.handleClick(this.state.page+1)}> <i className="right chevron icon"></i> </a>
                                                    :''}
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
        );

    }
}

export default CourseInfo;
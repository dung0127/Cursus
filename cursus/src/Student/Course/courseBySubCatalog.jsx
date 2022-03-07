import React, { Component } from "react";
import FooterUser from "../Layout/footerUser";
import {connect} from 'react-redux';
import { fetchCourseRequest } from "../../actions/course"
import { withRouterParams } from "../../Admin/Auth/withRouter";
import { fetchSubCatalogByIdRequest, fetchSubCatalogRequest } from "../../actions/subCatalog";
import { fetchCatalogRequest} from "../../actions/catalog";
import {Link} from "react-router-dom"
import moment from 'moment';

class CourseBySubCatalog extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            id : this.props.params.id                  
        }           
        
    }

    componentDidMount(){
        this.props.fetchSubCatalogByIdRequest(this.state.id)
        
    } 

    componentDidUpdate(prevProps){
        if(this.props.params.id!==prevProps.params.id){
            this.props.fetchSubCatalogByIdRequest(this.props.params.id)
        }
    }
    
    render(){
        const {subCatalog} = this.props
        return (
        <div class="wrapper">
            <div class="sa4d25">
                <div class="container-fluid">			
                    <div class="row">
                        <div class="col-xl-12 col-lg-8">
                        
                            <div class="section3125">
                                        {/* <div  id="success" style={{display:"none"}}><Success name="Add to cart"/></div>
                                        <div  id="login" style={{display:"none"}}><Success name="Login Successful"/></div>
                                        <div  id="warning" style={{display:"none"}} ><Warning name="Already exits"/></div>
                                        <div  id="saved" style={{display:"none"}}><Success name={this.props.savedSuccess}/></div> */}

                                {/* <div class="explore_search">
                                    
                                    <div class="ui search focus">
                                        <div class="ui left icon input swdh11">
                                            
                                            <input class="prompt srch_explore" type="text" placeholder="Search for Tuts Videos, Tutors, Tests and more.."/>
                                            <i class="uil uil-search-alt icon icon2"></i>
                                        </div>
                                    </div>
                                </div>							 */}
                            </div>							
                        </div>
                        <div class="col-md-12">
                            <div class="_14d25">
                                <div class="row">
                                    
                                {subCatalog.courses? 
                                    subCatalog.courses.map((course,index) => {
                                            return (
                                                <div class="col-lg-3 col-md-4">
                                                    <div class="fcrse_1 mt-30">
                                                        <Link to={`/course/${course.id}`} params={course.id} class="fcrse_img">
                                                            <img src={course.imageVideoDescription} alt="" style={{height:"125px"}}/>
                                                            <div class="course-overlay">
                                                                <span class="play_btn1"><i class="uil uil-play"></i></span>
                                                                {course.avgRatting>0?
                                                                <div class="crse_reviews">
                                                                    <i class='uil uil-star'></i>{course.avgRatting.toFixed(1)}
                                                                </div>:
                                                                <div class="crse_reviews">
                                                                <i class='uil uil-star'></i>0.0
                                                                </div>}
                                                                <div class="crse_timer">
                                                                    {course.videoDuration}
                                                                </div>
                                                            </div>
                                                        </Link>
                                                        <div class="fcrse_content">
                                                            <div class="eps_dots more_dropdown">
                                                                {/* <Link to={`/course/${course.id}`} params={course.id}><i class="uil uil-ellipsis-v"></i></Link> */}
                                                                {/* <div class="dropdown-content">
                                                                    <span><i class='uil uil-share-alt'></i>Share</span>
                                                                    {course.saved?
                                                                    <span type="button" onClick={()=>this.savedCourse(course.id)}><i className="iconify" data-icon="bi:heart-fill" style={{marginRight:"10px",marginLeft:"5px"}}></i> Unsaved</span>
                                                                    :<span type="button" onClick={()=>this.savedCourse(course.id)}><i className="uil uil-heart"></i>Save</span>
                                                                    }
                                                                    <span><i class='uil uil-ban'></i>Not Interested</span>
                                                                    <span><i class="uil uil-windsock"></i>Report</span>
                                                                </div>																											 */}
                                                            </div>
                                                            <div class="vdtodt">
                                                            {/* <span class="vdt14">109k views</span> */}
                                                            {course.updatedDate?
                                                            <span class="vdt14">Update {moment(course.updatedDate).format('MMM DD, YYYY')}</span>:''}
                                                            
                                                        </div>
                                                            <Link to={`/course/${course.id}`} params={course.id} class="crse14s">{course.title}</Link>
                                                            <Link to={`/course/${course.id}`} params={course.id} class="crse-cate">{course.language}</Link>
                                                            <div class="auth1lnkprce">
                                                                <div class="prce142">${course.price}</div>
                                                            </div>
                                                        </div>
                                                    </div>													
                                                </div>  
                                            )
                                        })
                                    
                                :''}
                                </div>	
                            </div>		
                        </div>		
                    </div>
                    <br></br>
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
                    :'' } 
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
        totalPages: state.user.totalPages,
        catalogs: state.catalog.catalogs,
        subCatalogs: state.subCatalog.subCatalogs,
        subCatalog: state.subCatalog.subCatalog
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCourseRequest:(e) => dispatch (fetchCourseRequest(e)),
        fetchCatalogRequest:() => dispatch (fetchCatalogRequest()),
        fetchSubCatalogRequest:() => dispatch (fetchSubCatalogRequest()),
        fetchSubCatalogByIdRequest:(e) => dispatch (fetchSubCatalogByIdRequest(e))

    };
}

export default (withRouterParams(connect(mapStateToProps,mapDispatchToProps)(CourseBySubCatalog)));

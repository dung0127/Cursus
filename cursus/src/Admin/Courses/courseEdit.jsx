import React, { Component } from 'react';
import Footer from '../Layout/footer';
import axios from 'axios';
import { courseByIdRequest } from '../../actions/course';
import { fetchCatalogRequest } from '../../actions/catalog';
import { fetchSubCatalogRequest } from '../../actions/subCatalog';
import {connect} from 'react-redux';
import authHeader from "../../config/authHeader";
import validator from 'validator';
import {withRouterParams} from '../Auth/withRouter';
import Success from "../../Alert/success";
import Error from "../../Alert/error";
import {Link} from "react-router-dom"
   
class CourseEdit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id : this.props.params.id,  

            addCourse: {
                language:'VN',
                title:'',
                shortDescription:'',
                description:'',
                requirement:'',
                whoThisCourseIsFor:'',
                whatYouWillLearn:'',
                price:'',
                videoDuration:'',
                urlVideoDescription:'',
                imageVideoDescription:'',
                activate:'false',
                },

            image:'',

            video:'',
            
            error: {},

            course:'',

            select:'',
        }
    }

    handleSelect = e => {            
        this.setState({select: e.target.value});  
        console.log(e.target.value)
    }

    // -------------------------  Course  -----------------------------
    formCourse = e => {   
        let formDataCourse = Object.assign({}, this.state.addCourse);  
        if (e.target.files && e.target.files[0]) {
            if (e.target.accept=="image/*"){
                this.setState({
                    image: URL.createObjectURL(e.target.files[0])
                })
                formDataCourse[e.target.name] = 'images/'+e.target.files[0].name
            }
            else{
                this.setState({
                    video: e.target.files[0].name
                  })
                formDataCourse[e.target.name] = e.target.files[0].name
            }
            
            this.setState({addCourse:formDataCourse});  
        }
        else {
        formDataCourse[e.target.name] = e.target.value;        
        this.setState({addCourse:formDataCourse});  
        console.log(formDataCourse)  
        }
    }
    // ---------------------------- Validate --------------------------
    validateStep1 = () => {
        let isValid = true;

        const error = {}

        if(validator.isEmpty(this.state.addCourse.title)){            
            error['title'] = 'The Title field is required.';
            isValid = false;
        }

        if(validator.isEmpty(this.state.addCourse.shortDescription)){            
            error['shortDescription'] = 'The Short Description field is required.';
            isValid = false;
        }

        if(validator.isEmpty(this.state.addCourse.description)){            
            error['description'] = 'The Description field is required.';
            isValid = false;
        }

        if(validator.isEmpty(this.state.addCourse.requirement)){            
            error['requirement'] = 'The field is required.';
            isValid = false;
        }

        if(validator.isEmpty(this.state.addCourse.whatYouWillLearn)){            
            error['whatYouWillLearn'] = 'The field is required.';
            isValid = false;
        }
        if(validator.isEmpty(this.state.addCourse.whoThisCourseIsFor)){            
            error['whoThisCourseIsFor'] = 'The field is required.';
            isValid = false;
        }
        if(validator.isEmpty(this.state.addCourse.price)){            
            error['price'] = 'The field is required.';
            isValid = false;
        }
        if(validator.isEmpty(this.state.addCourse.videoDuration)){            
            error['videoDuration'] = 'The field is required.';
            isValid = false;
        }

        this.setState({
            error: error
        })

        return isValid;
    }

    validateStep2 = () => {
        let isValid = true;

        const error = {}

        if(validator.isEmpty(this.state.addCourse.urlVideoDescription)){            
            error['urlVideoDescription'] = 'The URL field is required.';
            isValid = false;
        }

        if(validator.isEmpty(this.state.addCourse.imageVideoDescription)){            
            error['imageVideoDescription'] = 'The Image field is required.';
            isValid = false;
        }

        this.setState({
            error: error
        })

        return isValid;
    }

    componentDidMount () {
        this.props.courseByIdRequest(this.state.id);
    }
    
    render() {
        return (
            <div className="wrapper">
                <div className="sa4d25">
                    <div className="container">			
                        <div className="row">
                            <div className="col-lg-12">	
                                <h2 className="st_title"><i className="uil uil-analysis"></i> Edit Course</h2>
                            </div>					
                        </div>				
                        <div  id="success" style={{display:"none"}}><Success name="Create Successful"/></div>
                        <div  id="error" style={{display:"none"}}><Error name="Create Course Fail"/></div>
                        <div className="row">
                            <div className="col-12">
                                <div className="step-content">
                                    <div className="step-tab-panel step-tab-info active "> 
                                        <div className="tab-from-content">
                                            <div className="course__form">
                                                <div className="general_info10">
                                                    <div className="row">
                                                        <div className="col-lg-12 col-md-12">															
                                                            <div className="ui search focus mt-30 lbel25">
                                                                <label>Course Title*</label>
                                                                <div className="ui left icon input swdh19">
                                                                    <input className="prompt srch_explore" type="text" placeholder="Course title here" name="title" data-purpose="edit-course-title" maxlength="60" defaultValue={this.props.course.title} onChange={this.formCourse}  />															
                                                                    <div className="badge_num">60</div>
                                                                </div>
                                                                {this.state.error.title && <div className="validation alert alert-warning">{this.state.error.title}</div>}
                                                                <div className="help-block">(Please make this a maximum of 100 characters and unique.)</div>
                                                            </div>									
                                                        </div>
                                                        <div className="col-lg-12 col-md-12">															
                                                            <div className="ui search focus lbel25 mt-30">	
                                                                <label>Short Description*</label>
                                                                <div className="ui form swdh30">
                                                                    <div className="field">
                                                                        <textarea rows="3" name="shortDescription" placeholder="Item description here..."  defaultValue={this.props.course.shortDescription}  onChange={this.formCourse}></textarea>
                                                                    </div>
                                                                    {this.state.error.shortDescription && <div className="validation alert alert-warning">{this.state.error.shortDescription}</div>}
                                                                </div>
                                                                <div className="help-block">220 words</div>
                                                            </div>								
                                                        </div>
                                                        <div className="col-lg-12 col-md-12">
                                                            <div className="course_des_textarea mt-30 lbel25">
                                                                <label>Course Description*</label>
                                                                <div className="course_des_bg">
                                                                    <ul className="course_des_ttle">
                                                                        <li><a href="#"><i className="uil uil-bold"></i></a></li>
                                                                        <li><a href="#"><i className="uil uil-italic"></i></a></li>
                                                                        <li><a href="#"><i className="uil uil-list-ul"></i></a></li>
                                                                        <li><a href="#"><i className="uil uil-left-to-right-text-direction"></i></a></li>
                                                                        <li><a href="#"><i className="uil uil-right-to-left-text-direction"></i></a></li>
                                                                        <li><a href="#"><i className="uil uil-list-ui-alt"></i></a></li>
                                                                        <li><a href="#"><i className="uil uil-link"></i></a></li>
                                                                        <li><a href="#"><i className="uil uil-text-size"></i></a></li>
                                                                        <li><a href="#"><i className="uil uil-text"></i></a></li>
                                                                    </ul>
                                                                    <div className="textarea_dt">															
                                                                        <div className="ui form swdh339">
                                                                            <div className="field">
                                                                                <textarea rows="5" name="description" placeholder="Insert your course description"  defaultValue={this.props.course.description}  onChange={this.formCourse}></textarea>
                                                                            </div>
                                                                        </div>		
                                                                        {this.state.error.description && <div className="validation alert alert-warning">{this.state.error.description}</div>}								
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 col-md-12">															
                                                            <div className="ui search focus lbel25 mt-30">	
                                                                <label>Requirements*</label>
                                                                <div className="ui form swdh30">
                                                                    <div className="field">
                                                                        <textarea rows="3" name="requirement" placeholder="Item description here..."  defaultValue={this.props.course.requirement}  onChange={this.formCourse}></textarea>
                                                                    </div>
                                                                    {this.state.error.requirement && <div className="validation alert alert-warning">{this.state.error.requirement}</div>}
                                                                </div>
                                                                <div className="help-block">220 words</div>
                                                            </div>								
                                                        </div>
                                                        <div className="col-lg-6 col-md-12">															
                                                            <div className="ui search focus lbel25 mt-30">	
                                                                <label>What will students learn in your course?*</label>
                                                                <div className="ui form swdh30">
                                                                    <div className="field">
                                                                        <textarea rows="3" name="whatYouWillLearn" placeholder=""  defaultValue={this.props.course.whatYouWillLearn}  onChange={this.formCourse}></textarea>
                                                                    </div>
                                                                    {this.state.error.whatYouWillLearn && <div className="validation alert alert-warning">{this.state.error.whatYouWillLearn}</div>}
                                                                </div>
                                                                <div className="help-block">Student will gain this skills, knowledge after completing this course. (One per line).</div>
                                                            </div>								
                                                        </div>
                                                        
                                                        <div className="col-lg-6 col-md-12">															
                                                            <div className="ui search focus lbel25 mt-30">	
                                                                <label>Who this course is for?*</label>
                                                                <div className="ui form swdh30">
                                                                    <div className="field">
                                                                        <textarea rows="3" name="whoThisCourseIsFor" placeholder="" defaultValue={this.props.course.whoThisCourseIsFor}   onChange={this.formCourse}></textarea>
                                                                    </div>
                                                                    {this.state.error.whoThisCourseIsFor && <div className="validation alert alert-warning">{this.state.error.whoThisCourseIsFor}</div>}
                                                                </div>
                                                                <div className="help-block">What knowledge, technology, tools required by users to start this course. (One per line).</div>
                                                            </div>								
                                                        </div>
                                                        	
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="license_pricing mt-30">
                                                                <label className="label25">Course thumbnail*</label>
                                                                <div className="row">
                                                                    <div className="col-lg-12 col-md-6 col-sm-6">
                                                                        <div className="loc_group">
                                                                        <div className="thumb-item">
                                                                    {this.state.image?
                                                                    <img src={this.state.image} alt=""/>
                                                                    :<img src={this.props.course.imageVideoDescription} alt=""/>
                                                                    }
                                                                    <div className="thumb-dt">													
                                                                        <div className="upload-btn" >													
                                                                            <input className="uploadBtn-main-input" id="myInput" type="file" name="imageVideoDescription" onChange={this.formCourse} accept="image/*" />
                                                                            <label htmlFor="myInput" >Choose Thumbnail</label>
                                                                        </div>
                                                                        <span className="uploadBtn-main-file">Size: 590x300 pixels. Supports: jpg,jpeg, or png</span>
                                                                    </div>
                                                                </div>
                                                                {this.state.error.imageVideoDescription && <div className="validation alert alert-warning">{this.state.error.imageVideoDescription}</div>}
                                                            
                                                                        </div>
                                                                    </div>
                                                                </div>																		
                                                            </div>
                                                        </div>	
                                                        	
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="license_pricing mt-30">
                                                                <label className="label25">Youtube URL*</label>
                                                                <div className="row">
                                                                    <div className="col-lg-12 col-md-6 col-sm-6">
                                                                        <div className="loc_group">
                                                                            <div className="ui left icon input swdh19">
                                                                                <input className="prompt srch_explore" type="text" placeholder="Youtube Video URL"  defaultValue={this.props.course.urlVideoDescription}  name="urlVideoDescription" onChange={this.formCourse} />															
                                                                            </div>
                                                                            {this.state.error.urlVideoDescription && <div className="validation alert alert-warning">{this.state.error.urlVideoDescription}</div>}
                                                                    
                                                                        </div>
                                                                    </div>
                                                                </div>																		
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6">
                                                            <div className="mt-30 lbel25">
                                                                <label>Course Catalog*</label>
                                                            </div>
                                                            <div className="form_group optgroup">
                                                                <select className="ui fluid dropdown cntry152 prompt srch_explore" name="catalogId" onChange={this.handleSelect}>
                                                                    <option value="">Select Catalog</option>
                                                                    {
                                                                        this.props.catalogs.map((catalog) => {
                                                                            return (
                                                                                <option value={catalog.id}>{catalog.name}</option>
                                                                                
                                                                            );
                                                                        })
                                                                    }
                                                                </select>
                                                            </div>
                                                        </div>	
                                                        <div className="col-lg-4 col-md-6">
                                                            <div className="mt-30 lbel25">
                                                                <label>Course SubCatalog*</label>
                                                            </div>
                                                            <div className="form_group optgroup">
                                                                <select className="ui fluid dropdown cntry152 prompt srch_explore" name="subCatalogId" onChange={this.formCourse}>
                                                                    <option value="">Select SubCatalog</option>
                                                                    {
                                                                        this.props.catalogs.map((cata) => {
                                                                            if (cata.id == this.state.select)
                                                                            return(
                                                                                cata.subCatalogs.map(sub => {
                                                                                    return (
                                                                                        <option value={sub.id}>{sub.name}</option>
                                                                                    )
                                                                                } )
                                                                            )
                                                                        })
                                                                    }
                                                                </select>
                                                            </div>
                                                        </div>	
                                                        <div className="col-lg-4 col-md-6">
                                                            <div className="ui search focus mt-30 lbel25">
                                                                <label>Language*</label>
                                                            </div>
                                                            <div className="form_group optgroup">
                                                                <select className="ui fluid dropdown cntry152 prompt srch_explore" name="language" onChange={this.formCourse}>
                                                                    <option value="VN" active>English</option>
                                                                    <option value="ENG">Vietnamese</option>
                                                                    <option value="FR">French</option>
                                                                    <option value="JP">Japanese</option>
                                                                    
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="ui search focus mt-30 lbel25">
                                                                <label>Duration*</label>
                                                                <div className="ui left icon input swdh19">
                                                                    <input className="prompt srch_explore" type="number" min="0" max="100" placeholder="0" name="videoDuration" defaultValue={this.props.course.videoDuration} onChange={this.formCourse} />
                                                                </div>
                                                                {this.state.error.videoDuration && <div className="validation alert alert-warning">{this.state.error.videoDuration}</div>}
                                                            </div>
                                                        </div>
                                                        
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="license_pricing mt-30">
                                                                <label className="label25">Regular Price*</label>
                                                                <div className="row">
                                                                    <div className="col-lg-12 col-md-6 col-sm-6">
                                                                        <div className="loc_group">
                                                                            <div className="ui left icon input swdh19">
                                                                                <input className="prompt srch_explore" type="text" placeholder="$0" name="price" defaultValue={this.props.course.price} onChange={this.formCourse} />															
                                                                            </div>
                                                                            <span className="slry-dt">USD</span>
                                                                            {this.state.error.price && <div className="validation alert alert-warning">{this.state.error.price}</div>}
                                                                        </div>
                                                                    </div>
                                                                </div>																		
                                                            </div>
                                                        </div>
                                                        
                                                           
                                                        												
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="step-footer step-tab-pager">
                                            <Link to ='/courses'><button data-direction="finish" style={{marginTop:"20px", marginRight:"20px"}}  className="btn btn-default steps_btn" type="button" value={'add'} onClick={()=>this.course(this.state.addCourse)} >Back</button></Link>
                                           
                                            <button data-direction="finish" style={{marginTop:"20px"}}  className="btn btn-default steps_btn" type="button" value={'add'} onClick={()=>this.course(this.state.addCourse)} >Update</button>
                                         
                                            
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
        course: state.course.courseById,
        catalogs: state.catalog.catalogs,
        subCatalogs: state.subCatalog.subCatalogs,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        courseByIdRequest:(e) => dispatch (courseByIdRequest(e)),
        fetchCatalogRequest:() => dispatch (fetchCatalogRequest()),
        fetchSubCatalogRequest:() => dispatch (fetchSubCatalogRequest()),
    };
}

export default withRouterParams(connect(mapStateToProps,mapDispatchToProps)(CourseEdit));
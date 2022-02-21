import React, { Component } from 'react';
import Footer from '../Layout/footer';
import axios from 'axios';
import { fetchCatalogRequest} from "../../actions/catalog";
import {fetchSubCatalogRequest} from "../../actions/subCatalog";
import {connect} from 'react-redux';
import authHeader from "../../config/authHeader";
import $, { data } from 'jquery';
import validator from 'validator';


let lectures = [];
let lessons = [];
    
class CourseAdd extends Component {

    constructor(props) {
        super(props);
        this.state = {
            addCourse: {language:"VN"},

            addLesson: [],
            
            addLecture:[],

            select:'',

            show:'1',

            classStep1:'active',

            image:'',
            video:'',
            
            error: {},

        }
        
       
    }

    handleClick = (num) =>{
        if(num==1){
            this.setState({classStep1:'active',classStep2:'',classStep3:'',classStep4:'',classStep5:'',show: '1'
        })
        }
        if(num==2){
            this.setState({classStep1:'done',classStep2:'active',classStep3:'',classStep4:'', classStep5:'',show: '2'
        })
        }
        if(num==3){
            this.setState({classStep1:'done',classStep2:'done',classStep3:'active',classStep4:'',classStep5:'',show: '3'
        })
        }
        if(num==4){
            this.setState({classStep1:'done',classStep2:'done',classStep3:'done',classStep4:'active',classStep5:'',show: '4'
        })
        }
        if(num==5){
            this.setState({classStep1:'done',classStep2:'done',classStep3:'done',classStep4:'done',classStep5:'active',show: '5'
        })
        }
    }
    
    pageNext = () => {
        
        console.log(this.state.show)
        this.state.show=='1'?
            this.setState({show: '2', classStep1:'done',classStep2:'active',classStep3:'',classStep4:'', classStep5:''
            }):this.state.show=='2'?
            this.setState({classStep1:'done',classStep2:'done',classStep3:'active',classStep4:'',classStep5:'',show: '3'
            }):this.state.show=='3'?
            this.setState({classStep1:'done',classStep2:'done',classStep3:'done',classStep4:'active',classStep5:'',show: '4'
            }):
            this.setState({classStep1:'done',classStep2:'done',classStep3:'done',classStep4:'done',classStep5:'active',show: '5'
            })
        
    }

    pagePrev = () => {
        this.state.show=='5'?
            this.setState({show: '4'
            }):this.state.show=='4'?
            this.setState({show: '3'
            }):this.state.show=='3'?
            this.setState({show: '2'
            }):
            this.setState({show: '1'
            })
    }

    formLecture = e => {   
        let formDataLecture = Object.assign({}, this.state.addLecture); 
        
        console.log(formDataLecture)
        formDataLecture[e.target.name] = e.target.value;        
        this.setState({addLecture:formDataLecture});  
        console.log(formDataLecture)  
    }

    newLecture = (add) => {
        lectures.push(add);
        this.setState({addLecture: []});
    }

    // -------------------------  LESSON  -----------------------------
    formLesson = e => {   
        let formDataLesson = Object.assign({}, this.state.addLesson);    
        console.log(formDataLesson)
        formDataLesson[e.target.name] = e.target.value;        
        this.setState({addLesson:formDataLesson});  
        console.log(formDataLesson)  
    }

    newLesson = (newLesson, newLecture) => {
        newLesson.lectures = newLecture
        console.log(lessons);
        lessons.push(newLesson);

        this.setState({addLesson: []});
        lectures=[];
        this.setState({addLecture: []});
        console.log(lessons);
    }

    // -------------------------  COURSE  -----------------------------
    formCourse = e => {   
        let formDataCourse = Object.assign({}, this.state.addCourse);  
        if (e.target.files && e.target.files[0]) {
            if (e.target.accept=="image/*"){
                this.setState({
                    image: URL.createObjectURL(e.target.files[0])
                })}
            else{
                this.setState({
                    video: e.target.files[0].name
                  })
            }
            formDataCourse[e.target.name] = e.target.files[0].name
            this.setState({addCourse:formDataCourse});  
        }
        else {
        console.log(formDataCourse)
        formDataCourse[e.target.name] = e.target.value;        
        this.setState({addCourse:formDataCourse});  
        console.log(formDataCourse)  
        }
    }
    
    validate = () => {
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
            error['requirement'] = 'The Requirement field is required.';
            isValid = false;
        }
        this.setState({
            error: error
        })

        return isValid;
    }

    handleSelect = e => {            
        this.setState({select: e.target.value});  
        console.log(e.target.value)
    }
    

    submitCourse = (courseAdd, lessonAdd) => {
        
        courseAdd.lessons = lessonAdd
        console.log(courseAdd)
        axios.post('http://localhost:8080/api/course/create', courseAdd , { headers: authHeader(),"content-type": "multipart/form-data" }).then(res=>{
           
            alert (res.data.message) 
            // if(res.data.message=='Success'){
            //     this.props.navigate('/category')
            // }
        })
        
    }

    componentDidMount () {
        this.props.fetchCatalogRequest();
        this.props.fetchSubCatalogRequest();
       
    }
    
    
    render() {
        
        return (
            <div className="wrapper">
                
                <div className="sa4d25">
                    <div className="container">			
                        <div className="row">
                            <div className="col-lg-12">	
                                <h2 className="st_title"><i className="uil uil-analysis"></i> Create New Course</h2>
                            </div>					
                        </div>				
                        <div className="row">
                            <div className="col-12">
                                <div className="course_tabs_1">
                                    <div id="add-course-tab" className="step-app">
                                        <ul className="step-steps">
									<li className={this.state.classStep1} onClick={()=>{this.handleClick(1)}}>
										<a >
											<span className="number"></span>
											<span className="step-name">Basic</span>
										</a>
									</li>
									<li className={this.state.classStep2}  onClick={()=>{this.handleClick(2)}}>
										<a >
											<span className="number"></span>
											<span className="step-name">Media</span>
										</a>
									</li>
									<li className={this.state.classStep3}  onClick={()=>{this.handleClick(3)}}>
										<a >
											<span className="number"></span>
											<span className="step-name">Curriculum</span>
										</a>
									</li>
									<li className={this.state.classStep4}  onClick={()=>{this.handleClick(4)}}>
										<a >
											<span className="number"></span>
											<span className="step-name">Price</span>
										</a>
									</li>
									<li className={this.state.classStep5}  onClick={()=>{this.handleClick(5)}}>
										<a >
											<span className="number"></span>
											<span className="step-name">Publish</span>
										</a>
									</li>
								        </ul>
                                        <div className="step-content">
                                            {this.state.show=='1'?
                                            <div className="step-tab-panel step-tab-info active " id="tab_step1"> 
                                                <div className="tab-from-content">
                                                    <div className="title-icon">
                                                        <h3 className="title"><i className="uil uil-info-circle"></i>Basic Information</h3>
                                                    </div>
                                                    <div className="course__form">
                                                        <div className="general_info10">
                                                            <div className="row">
                                                                <div className="col-lg-12 col-md-12">															
                                                                    <div className="ui search focus mt-30 lbel25">
                                                                        <label>Course Title*</label>
                                                                        <div className="ui left icon input swdh19">
                                                                            <input className="prompt srch_explore" type="text" placeholder="Course title here" name="title" data-purpose="edit-course-title" maxlength="60" onChange={this.formCourse}  />															
                                                                            <div className="badge_num">60</div>
                                                                        </div>
                                                                        <div className="help-block">(Please make this a maximum of 100 characters and unique.)</div>
                                                                    </div>									
                                                                </div>
                                                                <div className="col-lg-12 col-md-12">															
                                                                    <div className="ui search focus lbel25 mt-30">	
                                                                        <label>Short Description*</label>
                                                                        <div className="ui form swdh30">
                                                                            <div className="field">
                                                                                <textarea rows="3" name="shortDescription" placeholder="Item description here..." onChange={this.formCourse}></textarea>
                                                                            </div>
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
                                                                                        <textarea rows="5" name="description" placeholder="Insert your course description" onChange={this.formCourse}></textarea>
                                                                                    </div>
                                                                                </div>										
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-12 col-md-12">															
                                                                    <div className="ui search focus lbel25 mt-30">	
                                                                        <label>Requirements*</label>
                                                                        <div className="ui form swdh30">
                                                                            <div className="field">
                                                                                <textarea rows="3" name="requirement" placeholder="Item description here..." onChange={this.formCourse}></textarea>
                                                                            </div>
                                                                        </div>
                                                                        <div className="help-block">220 words</div>
                                                                    </div>								
                                                                </div>
                                                                <div className="col-lg-6 col-md-12">															
                                                                    <div className="ui search focus lbel25 mt-30">	
                                                                        <label>What will students learn in your course?*</label>
                                                                        <div className="ui form swdh30">
                                                                            <div className="field">
                                                                                <textarea rows="3" name="whatYouWillLearn" placeholder="" onChange={this.formCourse}></textarea>
                                                                            </div>
                                                                        </div>
                                                                        <div className="help-block">Student will gain this skills, knowledge after completing this course. (One per line).</div>
                                                                    </div>								
                                                                </div>
                                                                
                                                                <div className="col-lg-6 col-md-12">															
                                                                    <div className="ui search focus lbel25 mt-30">	
                                                                        <label>Who this course is for?*</label>
                                                                        <div className="ui form swdh30">
                                                                            <div className="field">
                                                                                <textarea rows="3" name="whoThisCourseIsFor" placeholder="" onChange={this.formCourse}></textarea>
                                                                            </div>
                                                                        </div>
                                                                        <div className="help-block">What knowledge, technology, tools required by users to start this course. (One per line).</div>
                                                                    </div>								
                                                                </div>
                                                                <div className="col-lg-6 col-md-6">
                                                                    <div className="mt-30 lbel25">
                                                                        <label>Course Catalog*</label>
                                                                    </div>
                                                                    <div class="form_group optgroup">
                                                                        <select class="ui hj145 dropdown cntry152 prompt srch_explore" name="catalogId" onChange={this.handleSelect}>
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
                                                                <div className="col-lg-6 col-md-6">
                                                                    <div className="mt-30 lbel25">
                                                                        <label>Course SubCatalog*</label>
                                                                    </div>
                                                                    <div class="form_group optgroup">
                                                                        <select class="ui hj145 dropdown cntry152 prompt srch_explore" name="subCatalogId" onChange={this.formCourse}>
                                                                            <option value="">Select Catalog</option>
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
                                                                <div class="col-lg-6 col-md-6">
                                                                    <div class="ui search focus mt-30 lbel25">
                                                                        <label>Duration*</label>
                                                                        <div class="ui left icon input swdh19">
                                                                            <input class="prompt srch_explore" type="number" min="0" max="100" placeholder="0" name="videoDuration" onChange={this.formCourse} />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-6 col-md-6">
                                                                    <div className="ui search focus mt-30 lbel25">
                                                                        <label>Language*</label>
                                                                    </div>
                                                                    <div class="form_group optgroup ">
                                                                        <select class="ui hj145 dropdown cntry152 prompt srch_explore" name="language" onChange={this.formCourse}>
                                                                            <option value="VN" active>English</option>
                                                                            <option value="ENG">Vietnamese</option>
                                                                            <option value="FR">French</option>
                                                                            <option value="JP">Japanese</option>
                                                                            
                                                                        </select>
                                                                    </div>
                                                                </div>															
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            :this.state.show=='2'?
                                            <div className="step-tab-panel step-tab-gallery active " id="tab_step2">
                                                <div className="tab-from-content">
                                                    <div className="title-icon">
                                                        <h3 className="title"><i className="uil uil-image"></i>Media</h3>
                                                    </div>
                                                    <div className="lecture-video-dt mb-30">
                                                        <span className="video-info">Intro Course overview provider type. (.mp4, YouTube, Vimeo etc.)</span>
                                                        <div className="video-category">
                                                            <label><input type="radio" name="colorRadio" value="youtube"/><span>YouTube</span></label>
                                                            <label ><input type="radio" name="colorRadio" value="mp4" /><span>HTML5(mp4)</span></label>
                                                            <div className="youtube intro-box" style={{display: "block"}}>
                                                                <div className="new-section">
                                                                    <div className="ui search focus mt-30 lbel25">
                                                                        <label>Youtube URL*</label>
                                                                        <div className="ui left icon input swdh19">
                                                                            <input className="prompt srch_explore" type="text" placeholder="Youtube Video URL" name="urlVideoDescription" onChange={this.formCourse} />															
                                                                        </div>
                                                                    </div>
                                                                </div>														
                                                            </div>
                                                            <div className="mp4 intro-box">
                                                                <div className="row">
                                                                    <div className="col-lg-5 col-md-12">
                                                                        <div className="upload-file-dt mt-30">
                                                                            <div className="upload-btn">													
                                                                                <input className="uploadBtn-main-input" type="file" id="myVideo" name="urlVideoDescription" onChange={this.formCourse} accept="video/*" />
                                                                                {this.state.video?
                                                                                <label htmlFor="myVideo" title="Zip">{this.state.video}</label>
                                                                                :<label htmlFor="myVideo" title="Zip">UPLOAD VIDEO</label>}
                                                                            </div>
                                                                            <span className="uploadBtn-main-file">File Format: .mp4</span>
                                                                            <span className="uploaded-id"></span>
                                                                        </div>
                                                                    </div>														
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="thumbnail-into">
                                                        <div className="row">
                                                            <div className="col-lg-5 col-md-6">
                                                                <label className="label25 text-left">Course thumbnail*</label>
                                                                <div className="thumb-item">
                                                                    {this.state.image?
                                                                    <img src={this.state.image} alt=""/>
                                                                    :<img src="images/thumbnail-demo.jpg" alt=""/>
                                                                    }
                                                                    <div className="thumb-dt">													
                                                                        <div className="upload-btn" >													
                                                                            <input className="uploadBtn-main-input" id="myInput" type="file" name="imageVideoDescription" onChange={this.formCourse} accept="image/*" />
                                                                            <label htmlFor="myInput" >Choose Thumbnail</label>
                                                                        </div>
                                                                        <span className="uploadBtn-main-file">Size: 590x300 pixels. Supports: jpg,jpeg, or png</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            :this.state.show=='3'?
                                            <div className="step-tab-panel step-tab-location active " id="tab_step3">
                                                <div className="tab-from-content">
                                                    <div className="title-icon">
                                                        <h3 className="title"><i className="uil uil-notebooks"></i>Curriculum</h3>
                                                    </div>
                                                    <div className="curriculum-section">
                                                        <div className="row">
                                                            <div class="col-lg-12">
                                                                <div class="extra_info">
                                                                    <h4 class="part__title">New Lesson </h4>
                                                                </div>
                                                                <div class="view_info10">
                                                                    <div class="row">
                                                                        <div class="col-lg-12 col-md-12">
                                                                            <div class="ui search focus mt-30 lbel25">
                                                                                <label>Lesson Title*</label>
                                                                                <div class="ui left icon input swdh19">
                                                                                    <input class="prompt srch_explore" type="text" placeholder="Insert your course content title." name="title" data-purpose="edit-course-title" maxlength="60" onChange={this.formLesson} />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <form action="" method="post" enctype="multipart/form-data" id="lecturefrom" class="row">
                                                                            <div class="col-lg-12 col-md-12">
                                                                                <div class="lecture_title">
                                                                                    <h4>New Lecture</h4>
                                                                                </div>
                                                                            </div>

                                                                            <div class="col-lg-4 col-md-12">
                                                                                <div class="ui search focus mt-30 lbel25">
                                                                                    <label>Lecture Title*</label>
                                                                                    <div class="ui left icon input swdh19">
                                                                                        <input class="prompt srch_explore" type="text" placeholder="Insert your lecture title." name="title" data-purpose="edit-course-title" maxlength="60" onChange={this.formLecture}/>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-lg-4 col-md-6">
                                                                                <div class="ui search focus mt-30 lbel25">
                                                                                    <label>Sort*</label>
                                                                                    <div class="ui left icon input swdh19">
                                                                                        <input class="prompt srch_explore" type="number" min="0" max="100" placeholder="0" name="sort" onChange={this.formLecture} />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-lg-4 col-md-6">
                                                                                <div class="ui search focus mt-30 lbel25">
                                                                                    <label>Duration*</label>
                                                                                    <div class="ui left icon input swdh19">
                                                                                        <input class="prompt srch_explore" type="number" min="0" max="100" placeholder="0" name="videoDuration" onChange={this.formLecture} />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-lg-7 col-md-12">
                                                                                <div class="ui search focus mt-30 lbel25">
                                                                                    <label>Youtube URL*</label>
                                                                                    <div class="ui left icon input swdh19 swdh95">
                                                                                        <input class="prompt srch_explore" type="text" placeholder="Youtube video URL" name="videoUrl" onChange={this.formLecture}/>
                                                                                       
                                                                                    </div>
                                                                                </div>
                                                                            {/* </div>
                                                                            <div className="col-lg-3 col-md-6">
                                                                                <div className="mt-30 lbel25">
                                                                                    <label>Preview*</label>
                                                                                </div>
                                                                                <div className= "optgroup form_group">
                                                                                
                                                                                    <select class="ui hj145 dropdown cntry152 prompt srch_explore" name="preview" onChange={this.formLecture}>
                                                                                        <option value="">Select </option>
                                                                                        <option value="1">No</option>
                                                                                        <option value="0">Yes</option>
                                                                                    </select>
                                                                                </div>*/}
                                                                            </div>	 
                                                                            <div className="col-lg-3 col-md-3">
                                                                                <div className="mt-30 lbel25">
                                                                                        <label>Preview*</label>
                                                                                </div>
                                                                                <div class="preview-dt">
                                                                                    <label className="switch">
                                                                                        <input type="checkbox" name="preview_op" value="1" onChange={this.formCourse}/>
                                                                                        <span></span>
                                                                                    </label>
                                                                                </div>
                                                                            </div>
                                                                            
                                                                            <div class="col-lg-2 col-md-3">
                                                                                <button class="part_btn_save prt-sv" type="button" value={'add'} onClick={()=>this.newLecture(this.state.addLecture)}>Save
                                                                                    Lecture</button>
                                                                            </div>
                                                                        </form>
                                                                        
                                                                        <div class="col-lg-12 col-md-12">
                                                                            <div class="table-responsive mt-50 mb-0">
                                                                                <table class="table ucp-table">
                                                                                    <thead class="thead-s">
                                                                                        <tr>
                                                                                            <th class="text-center" scope="col">
                                                                                                Lecture</th>
                                                                                            <th class="cell-ta">Title</th>
                                                                                            <th class="text-center" scope="col">
                                                                                                Sort</th>
                                                                                            <th class="text-center" scope="col">
                                                                                                Duration</th>
                                                                                            <th class="text-center" scope="col">
                                                                                                Video URL</th>
                                                                                            <th class="text-center" scope="col">
                                                                                                Action</th>
                                                                                        </tr>
                                                                                    </thead>
                                                                                    <tbody id="tbodylecture">
                                                                                            {lectures.map((lecture,index) => {
                                                                                                return (
                                                                                                    <tr>
                                                                                                        <td class="text-center">{index+1}</td>
                                                                                                        <td class="cell-ta">{lecture.title}</td>
                                                                                                        <td class="text-center">{lecture.sort}</td>
                                                                                                        <td class="text-center">{lecture.videoDuration}</td>
                                                                                                        <td class="text-center">{lecture.videoUrl}</td>
                                                                                                        <td class="text-center">{lecture.preview}</td>
                                                                                                        <td className="text-center"> 
                                                                                                            <a href="#" title="Delete" className="gray-s"><i className="uil uil-trash-alt"></i></a>
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                    
                                                                                                )
                                                                                            })}

                                                                                    </tbody>
                                                                                </table>
                                                                                
                                                                            </div>
                                                                            
                                                                        </div>
                                                                        <div class="col-lg-12 col-md-12">
                                                                            <div class="save_content">
                                                                                <button class="save_content_btn" type="button" value={'add'} onClick={()=>this.newLesson(this.state.addLesson,lectures)}>Save Lesson</button>
                                                                            </div> 
                                                                            <div class="table-responsive mt-30">
                                                                                    <table class="table ucp-table" id="content-table">
                                                                                        <thead class="thead-s">
                                                                                            <tr>
                                                                                                <th class="text-center" scope="col">Lesson</th>
                                                                                                <th class="cell-ta">Title</th>
                                                                                                <th class="text-center" scope="col">Lectures</th>
                                                                                                <th class="text-center" scope="col">Action</th>
                                                                                            </tr>
                                                                                        </thead>
                                                                                        <tbody>
                                                                                            {lessons.map((less,i) => {
                                                                                                let dem =0;
                                                                                                return (
                                                                                                    <tr>
                                                                                                        <td class="text-center">{i+1}</td>
                                                                                                        <td class="cell-ta">{less.title}</td>
                                                                                                        {less.lectures.map((lec,index) => {
                                                                                                            dem=dem+1;
                                                                                                            })}
                                                                                                        
                                                                                                        <td class="text-center">{dem}</td>
                                                                                                        <td className="text-center"> 
                                                                                                            <a href="#" title="Delete" className="gray-s"><i className="uil uil-trash-alt"></i></a>
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                    
                                                                                                )
                                                                                            })}
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
                                            </div>
                                            :this.state.show=='4'?
                                            <div className="step-tab-panel step-tab-amenities active" id="tab_step4">
                                                <div className="tab-from-content">
                                                    <div className="title-icon">
                                                        <h3 className="title"><i className="uil uil-usd-square"></i>Price</h3>
                                                    </div>
                                                <div className="course__form">
                                                        <div className="price-block">
                                                            <div className="row">
                                                                <div className="col-md-12">
                                                                    <div className="course-main-tabs">
                                                                        <div className="nav nav-pills flex-column flex-sm-row nav-tabs" role="tablist">
                                                                            <a className="flex-sm-fill text-sm-center nav-link active" data-toggle="tab"  role="tab" aria-selected="false"><i className="fas fa-cart-arrow-down mr-2"></i>Paid</a>
                                                                        </div>
                                                                        <div className="tab-content">
                                                                            {/* <div className="tab-pane fade show active" id="nav-free" role="tabpanel">
                                                                                <div className="price-require-dt">
                                                                                    <div className="cogs-toggle center_d">
                                                                                        <label className="switch">
                                                                                            <input type="checkbox" id="require_login"  />
                                                                                            <span></span>
                                                                                        </label>
                                                                                        <label  className="lbl-quiz">Require Log In</label>
                                                                                    </div>
                                                                                    <div className="cogs-toggle center_d mt-3">
                                                                                        <label className="switch">
                                                                                            <input type="checkbox" id="require_enroll"  />
                                                                                            <span></span>
                                                                                        </label>
                                                                                        <label className="lbl-quiz">Require Enroll</label>
                                                                                    </div>
                                                                                    <p>If the course is free, if student require to enroll your course, if not required enroll, if students required sign in to your website to take this course.</p>
                                                                                </div>
                                                                            </div> */}
                                                                            <div className="tab-pane fade show active" id="nav-paid" role="tabpanel">
                                                                                <div className="license_pricing mt-30">
                                                                                    <label className="label25">Regular Price*</label>
                                                                                    <div className="row">
                                                                                        <div className="col-lg-4 col-md-6 col-sm-6">
                                                                                            <div className="loc_group">
                                                                                                <div className="ui left icon input swdh19">
                                                                                                    <input className="prompt srch_explore" type="text" placeholder="$0" name="price" onChange={this.formCourse} />															
                                                                                                </div>
                                                                                                <span className="slry-dt">USD</span>
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
                                            </div>
                                            :
                                            <div className="step-tab-panel step-tab-location active" id="tab_step5">
                                                <div className="tab-from-content">
                                                    <div className="title-icon">
                                                        <h3 className="title"><i className="uil uil-upload"></i>Submit</h3>
                                                    </div>
                                                </div>
                                                <div className="publish-block">
                                                    <i className="far fa-edit"></i>
                                                    <p>Your course is in a draft state. Students cannot view, purchase or enroll in this course. For students that are already enrolled, this course will not appear on their student Dashboard.</p>
                                                </div>
                                            </div>
                                            }
                                        </div>
                                        <div className="step-footer step-tab-pager">
                                            {this.state.show>1?
                                            <button data-direction="prev" className="btn btn-default steps_btn" onClick={this.pagePrev} >PREVIOUS</button>
                                            :''}
                                            {this.state.show<5?
                                            <button data-direction="next" className="btn btn-default steps_btn" onClick={this.pageNext}>Next</button>
                                            :
                                            <button data-direction="finish" className="btn btn-default steps_btn" type="button" value={'Add'} onClick={()=>this.submitCourse(this.state.addCourse,lessons)} >Submit for Review</button>
                                            }
                                            
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
        catalogs: state.catalog.catalogs,
        subCatalogs: state.subCatalog.subCatalogs,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCatalogRequest:() => dispatch (fetchCatalogRequest()),
        fetchSubCatalogRequest:() => dispatch (fetchSubCatalogRequest()),
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(CourseAdd);
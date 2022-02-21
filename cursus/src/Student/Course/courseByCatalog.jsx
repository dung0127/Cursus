import React, { Component } from "react";
import FooterUser from "../Layout/footerUser";
import {connect} from 'react-redux';
import { fetchCourseRequest } from "../../actions/course"
import { withRouterParams } from "../../Admin/Auth/withRouter";
import { fetchSubCatalogRequest } from "../../actions/subCatalog";
import { fetchCatalogRequest} from "../../actions/catalog";

class CourseByCatalog extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            id : this.props.params.id                  
        }           
        
    }

    componentDidMount(){
        console.log('Employee Id ::: '+this.state.id)
    } 

    
    render(){
      return (
        <div class="wrapper">
            
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
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCourseRequest:(e) => dispatch (fetchCourseRequest(e)),
        fetchCatalogRequest:() => dispatch (fetchCatalogRequest()),
        fetchSubCatalogRequest:() => dispatch (fetchSubCatalogRequest()),

    };
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouterParams(CourseByCatalog));

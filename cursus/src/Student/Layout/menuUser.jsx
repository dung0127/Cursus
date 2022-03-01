import React from "react";
import {Link} from "react-router-dom"
import {connect} from 'react-redux'
import { fetchCatalogRequest} from "../../actions/catalog"
import {fetchSubCatalogByIdRequest} from "../../actions/subCatalog"

class MenuUser extends React.Component {
    componentDidMount(){
        this.props.fetchCatalogRequest();
        
    }

    
    render() {
        return(
            <nav className="vertical_nav">
                <div className="left_section menu_left" id="js-menu" >
                    <div className="left_section">
                        <ul>
                            <li className="menu--item">
                                <Link to= "/index" className="menu--link" title="Home">
                                    <i className='uil uil-home-alt menu--icon'></i>
                                    <span className="menu--label">Home</span>
                                </Link>
                            </li>
                            <li className="menu--item">
                                <Link to="/course" className="menu--link" title="Explore">
                                    <i className='uil uil-search menu--icon'></i>
                                    <span className="menu--label">Explore</span>
                                </Link>
                            </li>
                            {localStorage.getItem("isLogin")?
                            <li className="menu--item">
                                <Link to="detail" className="menu--link" title="Profile">
                                    <i className='uil uil-clipboard-alt menu--icon'></i>
                                    <span className="menu--label">Profile</span>
                                </Link>
                            </li>
                            :''}
                            <li className="menu--item menu--item__has_sub_menu">
                                <label className="menu--link" title="Categories">
                                    <i className='uil uil-layers menu--icon'></i>
                                    <span className="menu--label">Categories</span>
                                </label>
                                <ul className="sub_menu">
                                    {this.props.catalogs.map((catalog,i) => {
                                        return (
                                            
                                    <li className="menu--item menu--item__has_sub_menuu" key={i}>
                                        <label className="menu--linkk" title="Categories">
                                            <span className="menu--labell">{catalog.name}</span>
                                        </label>
                                        
                                        <ul className="sub_menuu">
                                            {catalog.subCatalogs.map((subCatalog,index) => {
                                            return (
                                                <li className="sub_menu--itemm" key={index}>
                                                    <Link to={`/courses/${subCatalog.name}/${subCatalog.id}`}  params={subCatalog.id}  className="sub_menu--linkk">{subCatalog.name}
                                                    </Link>
                                                </li>
                                            )})}
                                            
                                        </ul>
                                    </li>
                                    )})}
                                    {/* <li className="menu--item menu--item__has_sub_menuu">
                                        <label className="menu--linkk" title="Categories">
                                            
                                            <span className="menu--labell">TEST</span>
                                        </label>
                                        <ul className="sub_menuu">
                                            {this.props.catalogs.map((catalog,index) => {
                                            return (
                                                <li className="sub_menu--itemm">
                                                    <Link to={`/course/${catalog.id}`} params={{id: catalog.id}} className="sub_menu--linkk">{catalog.name}
                                                    </Link>
                                                </li>
                                            )})}
                                            
                                        </ul>
                                    </li>
                                     */}
                                </ul>
                            </li>
                            <li className="menu--item">
                                <Link to='saved-course' className="menu--link" title="Saved Courses">
                                <i className="uil uil-heart-alt menu--icon"></i>
                                <span className="menu--label">Saved Courses</span>
                                </Link>
                            </li>
                            
                        </ul>
                    </div>
                    <div className="left_section pt-2">
                        <ul>
                            <li className="menu--item">
                                <Link to ="/help" className="menu--link" title="Help">
                                    <i className='uil uil-question-circle menu--icon'></i>
                                    <span className="menu--label">Help</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="left_footer">
                        <ul>
                            <li><a href="about_us.html">About</a></li>
                            <li><a href="press.html">Press</a></li>
                            <li><a href="contact_us.html">Contact Us</a></li>
                            <li><a href="coming_soon.html">Developers</a></li>
                            <li><a href="terms_of_use.html">Copyright</a></li>
                            <li><a href="terms_of_use.html">Privacy Policy</a></li>
                            <li><a href="terms_of_use.html">Terms</a></li>
                        </ul>
                        <div className="left_footer_content">
                            <p>© 2020 <strong>Cursus</strong>. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </nav>
            
        );
    }
};

const mapStateToProps = state => {
    return {        
        catalogs: state.catalog.catalogs,
        subCatalog: state.subCatalog.subCatalog
    }
}

const mapDispatchToProps = dispatch => {
    return {
        
        fetchCatalogRequest:() => dispatch (fetchCatalogRequest()),
        fetchSubCatalogByIdRequest:(e) => dispatch (fetchSubCatalogByIdRequest(e))
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(MenuUser)
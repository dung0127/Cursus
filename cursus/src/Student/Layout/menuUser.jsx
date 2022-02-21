import React from "react";
import {Link} from "react-router-dom"
import {connect} from 'react-redux'
import { fetchCatalogRequest} from "../../actions/catalog"

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
                            <li className="menu--item menu--item__has_sub_menu">
                                <label className="menu--link" title="Categories">
                                    <i className='uil uil-layers menu--icon'></i>
                                    <span className="menu--label">Categories</span>
                                </label>
                                <ul className="sub_menu">
                                    {this.props.catalogs.map((catalog,index) => {
                                    return (
                                        <li className="sub_menu--item">
                                            <Link to={`/course/${catalog.id}`} params={{id: catalog.id}} className="sub_menu--link">{catalog.name}</Link>
                                        </li>
                                    )})}
                                    
                                </ul>
                            </li>
                            <li className="menu--item">
                                <a href="saved_courses.html" className="menu--link" title="Saved Courses">
                                <i className="uil uil-heart-alt menu--icon"></i>
                                <span className="menu--label">Saved Courses</span>
                                </a>
                            </li>
                            <li className="menu--item  menu--item__has_sub_menu">
                                <label className="menu--link" title="Pages">
                                <i className='uil uil-file menu--icon'></i>
                                <span className="menu--label">Pages</span>
                                </label>
                                <ul className="sub_menu">
                                    <li className="sub_menu--item">
                                        <a href="about_us.html" className="sub_menu--link">About</a>
                                    </li>
                                    <li className="sub_menu--item">
                                        <a href="sign_in.html" className="sub_menu--link">Sign In</a>
                                    </li>
                                    <li className="sub_menu--item">
                                        <a href="sign_up.html" className="sub_menu--link">Sign Up</a>
                                    </li>
                                    <li className="sub_menu--item">
                                        <a href="sign_up_steps.html" className="sub_menu--link">Sign Up Steps</a>
                                    </li>
                                    <li className="sub_menu--item">
                                        <a href="membership.html" className="sub_menu--link">Paid Membership</a>
                                    </li>
                                    <li className="sub_menu--item">
                                        <a href="course_detail_view.html" className="sub_menu--link">Course Detail View</a>
                                    </li>
                                    <li className="sub_menu--item">
                                        <a href="checkout_membership.html" className="sub_menu--link">Checkout</a>
                                    </li>
                                    <li className="sub_menu--item">
                                        <a href="invoice.html" className="sub_menu--link">Invoice</a>
                                    </li>
                                    <li className="sub_menu--item">
                                        <a href="career.html" className="sub_menu--link">Career</a>
                                    </li>
                                    <li className="sub_menu--item">
                                        <a href="apply_job.html" className="sub_menu--link">Job Apply</a>
                                    </li>
                                    <li className="sub_menu--item">
                                        <a href="our_blog.html" className="sub_menu--link">Our Blog</a>
                                    </li>
                                    <li className="sub_menu--item">
                                        <a href="blog_single_view.html" className="sub_menu--link">Blog Detail View</a>
                                    </li>
                                    <li className="sub_menu--item">
                                        <a href="company_details.html" className="sub_menu--link">Company Details</a>
                                    </li>
                                    <li className="sub_menu--item">
                                        <a href="press.html" className="sub_menu--link">Press</a>
                                    </li>
                                    <li className="sub_menu--item">
                                        <a href="live_output.html" className="sub_menu--link">Live Stream View</a>
                                    </li>
                                    <li className="sub_menu--item">
                                        <a href="add_streaming.html" className="sub_menu--link">Add live Stream</a>
                                    </li>
                                    <li className="sub_menu--item">
                                        <a href="search_result.html" className="sub_menu--link">Search Result</a>
                                    </li>
                                    <li className="sub_menu--item">
                                        <a href="thank_you.html" className="sub_menu--link">Thank You</a>
                                    </li>
                                    <li className="sub_menu--item">
                                        <a href="coming_soon.html" className="sub_menu--link">Coming Soon</a>
                                    </li>
                                    <li className="sub_menu--item">
                                        <a href="error_404.html" className="sub_menu--link">Error 404</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="left_section pt-2">
                        <ul>
                            <li className="menu--item">
                                <a href="setting.html" className="menu--link" title="Setting">
                                    <i className='uil uil-cog menu--icon'></i>
                                    <span className="menu--label">Setting</span>
                                </a>
                            </li>
                            <li className="menu--item">
                                <a href="help.html" className="menu--link" title="Help">
                                    <i className='uil uil-question-circle menu--icon'></i>
                                    <span className="menu--label">Help</span>
                                </a>
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
    }
}

const mapDispatchToProps = dispatch => {
    return {
        
        fetchCatalogRequest:() => dispatch (fetchCatalogRequest()),
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(MenuUser)
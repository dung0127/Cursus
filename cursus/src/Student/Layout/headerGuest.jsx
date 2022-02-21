import React from "react";
import {Link} from "react-router-dom"
import { fetchCourseRequest } from "../../actions/course";
import {connect}  from "react-redux"

class HeaderGuest extends React.Component {
    constructor(){
        super()
       
    }

    componentDidMount(){
        this.props.fetchCourseRequest(0);
    }
    render() {
        return (
            <header className="header clearfix">
                <button type="button" id="toggleMenu" className="toggle_menu">
                <i className='uil uil-bars'></i>
                </button>
                <button id="collapse_menu" className="collapse_menu">
                    <i className="uil uil-bars collapse_menu--icon "></i>
                    <span className="collapse_menu--label"></span>
                </button>
                <div className="main_logo" id="logo">
                    <a href="index.html"><img src="images/logo.svg" alt="" /></a>
                    <a href="index.html"><img className="logo-inverse" src="images/ct_logo.svg" alt=""/></a>
                </div>
                <div className="header_right">
                    <ul>
                        <li className="ui dropdown">
                            <a href="#" className="opts_account" title="Account">
                                <img src="images/hd_dp.jpg" alt=""/>
                            </a>
                            <div className="menu dropdown_account">
                                <div className="channel_my">
                                    <div className="profile_link">
                                        <img src="images/hd_dp.jpg" alt=""/>
                                        <div className="pd_content">
                                            <div className="rhte85">
                                                <h6>Guest</h6>
                                                <div className="mef78" title="Verify">
                                                    <i className='uil uil-check-circle'></i>
                                                </div>
                                            </div>
                                            <span>Please Login to your account</span>
                                        </div>							
                                    </div>						
                                </div>
                                <div className="night_mode_switch__btn">
                                    <a href="#" id="night-mode" className="btn-night-mode">
                                        <i className="uil uil-moon"></i> Night mode
                                        <span className="btn-night-mode-switch">
                                            <span className="uk-switch-button"></span>
                                        </span>
                                    </a>
                                </div>
                                <a href='/login' className="item channel_item">Sign In </a>
                                <a href='/sign-up' className="item channel_item">Sign Up </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </header>
        );
    } 
};
 
const mapDispatchToProps = dispatch => {
    return {
     
        fetchCourseRequest:(e) => dispatch (fetchCourseRequest(e))
    };
}

export default connect(null,mapDispatchToProps)(HeaderGuest)
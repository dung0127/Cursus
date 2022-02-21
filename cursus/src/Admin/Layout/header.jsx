import React from "react";
import {login, logout} from "../../actions/auth"
import {connect}  from "react-redux"
import { Link } from "react-router-dom"
import {fetchDetailUserRequest} from "../../actions/detail"
import {withRouter} from '../Auth/withRouter'
import { fetchCourseRequest } from "../../actions/course";

class Header extends React.Component {
    constructor(){
        super()
       
    }

    componentDidMount(){
        this.props.fetchDetailUserRequest();
        this.props.fetchCourseRequest(0);
    }

    // logout = () => {
    //     localStorage.removeItem("accessToken")
    //     alert("logout")
    //     window.location.reload();
    // }

    // loadData = () => {
    //     var myHeaders = new Headers();
    //     myHeaders.append("Authorization", "Bearer " + localStorage.getItem("accessToken"));

    //     axios.get('http://localhost:8080/api/users/?pageNumber='+ this.state.page).then((res) => {
    //         this.setState({users: res.data.data.content, 
    //                         page: res.data.data.pageable.pageNumber,
    //                         totalPages: res.data.data.totalPages});   
    //     });

    // }
    render() {
        const { cartItems } = this.props;
        return(
            <header className="header  d-flex">
                <button type="button" id="toggleMenu" className="toggle_menu">
                <i className='uil uil-bars'></i>
                </button>
                <button id="collapse_menu" className="collapse_menu">
                    <i className="uil uil-bars collapse_menu--icon "></i>
                    <span className="collapse_menu--label"></span>
                </button>
                <div className="main_logo" id="logo">
                    <a href="index.html"><img src="/images/logo.svg" alt=""/></a>
                    <a href="index.html"><img className="logo-inverse" src="images/ct_logo.svg" alt=""/></a>
                </div>
                <div className="header_right">
                    <ul>
                        <li>
                            <Link to="/cart" class="option_links" title="cart"><i class='uil uil-shopping-cart-alt'></i><span class="noti_count">{cartItems.length}</span></Link>
				        </li>
                        <li className="ui dropdown">
                            <a href="#" className="opts_account" title="Account">
                                <img src={this.props.user.avatarImage} alt=""/>
                            </a>
                            <div className="menu dropdown_account">
                                <div className="channel_my">
                                    <div className="profile_link">
                                        <img src={this.props.user.avatarImage} alt=""/>
                                        
                                        <div className="pd_content">
                                            <div className="rhte85">
                                                <h6>{this.props.user.username}</h6>
                                                <div className="mef78" title="Verify">
                                                    <i className='uil uil-check-circle'></i>
                                                </div>
                                            </div>
                                            <span>{this.props.user.email}</span>
                                        </div>		
                                    </div>
                                </div>
                                <div className="night_mode_switch__btn">
                                    <a href="#" id="night-mode" className="btn-night-mode">
                                        <i className="uil uil-moon"></i> Night
                                        <span className="btn-night-mode-switch">
                                            <span className="uk-switch-button"></span>
                                        </span>
                                    </a>
                                </div>
                                
                                <Link to='/detail' className="item channel_item" >View Profile</Link>
                                <Link to='/change-password' className="item channel_item" >Change Password</Link>	
                                	
                                <a href="help.html" className="item channel_item">Help</a>
                                <Link to='/' className="item channel_item" onClick={this.props.logout}>Sign Out</Link>
                            </div>
                        </li> 
                    </ul>
                </div>
            </header>
        );
    }
};

const mapStateToProps = state => {
    return {        
        username: state.auth.username,
        token: state.auth.token,
        user: state.detail.user,
        cartItems: state.cart.items,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => {
            dispatch(logout())
            localStorage.removeItem("isLogin");
            localStorage.removeItem("token");
            localStorage.removeItem("role");
            this.props.navigate('/index');
            window.location.reload();
        },
        fetchCourseRequest:(e) => dispatch (fetchCourseRequest(e)),
        fetchDetailUserRequest:() => dispatch (fetchDetailUserRequest()),
        
    };
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Header))
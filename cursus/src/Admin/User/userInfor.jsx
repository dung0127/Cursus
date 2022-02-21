import React from "react";
import Footer from "../Layout/footer";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUserRequest, deleteUserRequest,searchUserRequest } from "../../actions/user";

class UserInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchUser:''
        }
    }

    componentDidMount(){
        this.props.fetchUserRequest(this.props.page);
    } 

    handleClick(data) {
        console.log(data);
        if(data >= 0 && data< this.props.totalPages)
        {   
            this.props.fetchUserRequest(data);
        }
    }

    handleClickDelete(data) {
        let text = "Are you sure?";
        if (window.confirm(text) == true) {
            this.props.deleteUserRequest(data);
        } 
        
    }

    handleInputSearchChange = e => {   
        let value = e.target.value       
        this.setState({searchUser:value});  
    }

    searchUser = (searchUser) => {
        this.props.searchUserRequest(searchUser);
    }

    render() {
        
        return(
            <div className="wrapper">
                <div className="sa4d25">
                    <div className="container-fluid">			
                        <div className="row">
                            <div className="col-lg-12">	
                                <h2 className="st_title"><i className='uil uil-user'></i> Users</h2>
                            </div>			
                            <div className="col-md-12">
                                <div className="card_dash1">
                                    <div className="card_dash_left1">
                                        <i className='uil uil-user'></i>
                                        <h1>Jump Into Admin Creation</h1>
                                    </div>
                                    <div className="card_dash_right1">
                                        <Link to="/add-user"><button className="create_btn_dash">Create Account</button></Link>
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
                                                <div>
                                                    <div className="section3125">
                                                        <div className="explore_search">
                                                            <div className="ui search focus">
                                                                <div className="ui left icon input swdh11">
                                                                    <input className="prompt srch_explore" type="text" placeholder="Search for Users..." onChange={this.handleInputSearchChange} onKeyPress={e=> e.key==='Enter' && this.searchUser(this.state.searchUser)}/>
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
                                                            <th class="cell-ta" scope="col">Username</th>
                                                            <th class="cell-ta" scope="col">Name</th>
                                                            <th class="cell-ta" scope="col">Address</th>
                                                            <th class="cell-ta" scope="col">Email</th>
                                                            <th class="cell-ta" scope="col">Phone</th>
                                                            <th className="text-center" scope="col">Role</th>
                                                            <th className="text-center" scope="col">Status</th>
                                                            <th className="text-center" scope="col">Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            this.props.users.map((user,index) => {
                                                                return (
                                                                    <tr key={index}>
                                                                        <td className="text-center">{index + 1 + this.props.page*10}</td>
                                                                        <td class="cell-ta">{user.username}</td>
                                                                        <td class="cell-ta">{user.fullname}</td>
                                                                        <td class="cell-ta">{user.address}</td>
                                                                        <td class="cell-ta">{user.email}</td>
                                                                        <td class="cell-ta">{user.phone}</td>
                                                                        <td className="text-center">{user.role.name=='ROLE_ADMIN'?'ADMIN':'USER'}</td>
                                                                        <td className="text-center">{user.enabled ? <b className="course_active">Active</b>:<b className="course_inactive">Inactive</b>}</td>
                                                                        <td className="text-center"> 
                                                                            <a href="#" title="Delete" className="gray-s"><i className="uil uil-trash-alt" onClick={() => this.handleClickDelete(user.id)}></i></a>
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
    };
}

const mapStateToProps = state => {
    return {        
        users: state.user.users,
        page: state.user.page,
        totalPages: state.user.totalPages
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUserRequest:(e) => dispatch (fetchUserRequest(e)),
        deleteUserRequest:(e) => dispatch (deleteUserRequest(e)),
        searchUserRequest:(e) => dispatch (searchUserRequest(e)),
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(UserInfo);
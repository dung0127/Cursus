import React from 'react'
import Footer from '../Layout/footer';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchOrderRequest, searchOrderRequest } from '../../actions/payment';
import $ from "jquery";
import moment from 'moment';


class Order extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            searchOrder:''
        }
                       
    }

    componentDidMount(){
        this.props.fetchOrderRequest(this.props.page);
    } 

    handleInputSearchChange = e => {   
        let value = e.target.value       
        this.setState({searchOrder:value}); 
        console.log(value) 
    }

    searchOrder = (search) => {

        this.props.searchOrderRequest(search)
    }

    render() {
        
        return(
            <div className="wrapper">
                <div className="sa4d25">
                    <div className="container-fluid">			
                        <div className="row">
                            <div className="col-lg-12">	
                                <h2 className="st_title"><i class='uil uil-shopping-cart-alt'></i> Orders</h2>
                            </div>			
                            
                        </div>
                        {/* <div  id="success" style={{display:"none"}}><Success name="Update Successful"/></div>
                        <div  id="error" style={{display:"none"}}><Error name={this.state.alert}/></div> */}
                        
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
                                                                    <input className="prompt srch_explore" type="text" placeholder="Search for Orders..." onChange={this.handleInputSearchChange} onKeyPress={e=> e.key==='Enter' && this.searchOrder(this.state.searchOrder)}/>
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
                                                            <th class="cell-ta" scope="col">Order Number</th>
                                                            <th class="cell-ta" scope="col">Username</th>
                                                            <th class="text-center" scope="col">Total Amount</th>
                                                            <th class="text-center" scope="col">Status</th>
                                                            <th class="cell-ta" scope="col">Date Order</th>
                                                            <th className="text-center" scope="col">Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            this.props.orders.map((order,index) => {
                                                                return (
                                                                    <tr key={index}>
                                                                        <td className="text-center">{index + 1 + this.props.page*10}</td>
                                                                        <td class="cell-ta">#{order.orderNumber}</td>
                                                                        <td class="cell-ta">{order.user.username}</td>
                                                                        <td class="text-center">${order.totalAmount}</td>
                                                                        <td className="text-center">{order.statusOrder?<b className="course_active">Completed</b>:''}</td>
                                                                        <td class="cell-ta">{moment(order.dateOrder).format('MMM DD, YYYY')}</td>
                                                                        {/* <td className="text-center">{user.role.name=='ROLE_ADMIN'?'ADMIN':'USER'}</td>
                                                                        <td className="text-center">{user.enabled ? <b className="course_active">Active</b>:<b className="course_inactive">Inactive</b>}</td> */}
                                                                        <td className="text-center"> 
                                                                            <Link to={`/order/${order.orderNumber}`} params={order.orderNumber}  title="Detail" className="gray-s"><i class="uil uil-file icon_142"></i></Link>

                                                                        </td>
                                                                    </tr>);
                                                                }
                                                            )
                                                        } 
                                                    </tbody>
                                                </table>
                                            </div>
                                            {this.props.totalPages > 1? 
                                            <div className="step-footer step-tab-pager text-center">
                                                    <div class="ui pagination menu" role="navigation">  
                                                    {this.props.page > 0?   
                                                    <a className="icon item" rel="prev" aria-label="?? Previous" onClick={() => this.handleClick(this.props.page-1)}> <i className="left chevron icon"></i> </a>
                                                    :''}   
                                                    {
                                                    [...Array(this.props.totalPages)].map((e, i) => (this.props.page) == i ?<a className="item active"  onClick={() => this.handleClick(i)} key={i}>{i+1}</a>
                                                                                                                            :<a className="item"  onClick={() => this.handleClick(i)} key={i}>{i+1}</a>)         
                                                    }        
                                                    {this.props.page  < (this.props.totalPages-1)?
                                                    <a className="icon item" rel="next" aria-label="Next ??" onClick={() => this.handleClick(this.props.page+1)}> <i className="right chevron icon"></i> </a>
                                                    :''}
                                                </div>   
                                            </div>
                                            :''}
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
        orders: state.payment.orders,
        page: state.payment.page,
        totalPages: state.payment.totalPages
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchOrderRequest:(e) => dispatch (fetchOrderRequest(e)),
        searchOrderRequest:(e) => dispatch (searchOrderRequest(e))
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Order);
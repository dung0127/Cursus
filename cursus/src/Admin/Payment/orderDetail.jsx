import React from 'react'
import Footer from '../Layout/footer';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchOrderRequest, fetchOrderByIdRequest } from '../../actions/payment';
import $ from "jquery";
import {withRouterParams} from "../Auth/withRouter"
import sum from "../../Student/Cart/sum"
import moment from 'moment';

class OrderDetail extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.params.id
        }
                       
    }

    componentDidMount(){
        this.props.fetchOrderByIdRequest(this.state.id);
    } 
    render() { 
        const { cartItems, orderById } = this.props;
        return (
            <div className="wrapper">		
                <div className="sa4d25">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">	
                                <h2 className="st_title"><i class='uil uil-shopping-cart-alt'></i>Order <b>#{orderById.orderNumber}</b> - {moment(orderById.dateOrder).format('MMM DD, YYYY')} </h2>
                            </div>			
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="my_courses_tabs">
                                <div className="col-lg-12">
                                    <div className="membership_chk_bg">
                                        <div className="checkout_title">
                                            <div className='col-lg-12'>Purchase Date: {moment(orderById.dateOrder).format('MMM DD, YYYY')}</div>
                                        
                                        <div className='col-lg-12'> Username: {orderById.user&&orderById.user.username}.<br/></div>
                                        <div className='col-lg-12'>Full Name: {orderById.user&&orderById.user.fullname}<br/></div>
                                        <div className='col-lg-12'>Address: {orderById.user&&orderById.user.address}<br/> </div>
                                        
                                        </div>
                                    </div>		
							</div>
                            <div  className="col-lg-12">
                                <div  className="my_courses_tabs mp-30">
                                    <div  className="table-responsive ">
                                        <table  className="table ucp-table" id="content-table">
                                            <thead  className="thead-s">
                                                <tr>
                                                    <th scope="col"  className="text-center">Item No.</th>
                                                    <th scope="col"  className="cell-ta">Item</th>
                                                    <th scope="col"  className="cell-ta">Purchase Date</th>
                                                    <th scope="col"  className="cell-ta">Quantity</th>
                                                    <th scope="col"  className="cell-ta">Price</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    orderById.orderDetails&&orderById.orderDetails.map((order,index) => {
                                                        return (
                                                            <tr key={index}>
                                                                <td  className="text-center">{index + 1 + this.props.page*10}</td>
                                                                <td  className="cell-ta">{order.course.title}</td>
                                                                <td  className="cell-ta">{moment(orderById.dateOrder).format('MMM DD, YYYY')}</td>
                                                                <td  className="cell-ta">1</td>
                                                                <td  className="cell-ta">${order.course.price}</td>
                                                            </tr>);
                                                        }
                                                        
                                                    )
                                                } 
                                                <tr>
                                                    <td scope="col" colSpan={3}></td>
                                                    <td scope="col" className="cell-ta"><h4>Total Amount</h4></td>
                                                    <td scope="col" className="cell-ta">${orderById.totalAmount}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>	
                                </div>
                            </div>   
                            <li><Link to='/orders'><button className="studio-link-btn btn500">Back</button></Link></li>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
               
                <Footer/>
            </div>
        )
    };
}

const mapStateToProps = state => {
    return {        
        orders: state.payment.orders,
        page: state.payment.page,
        totalPages: state.payment.totalPages,
        orderById: state.payment.order
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchOrderRequest:(e) => dispatch (fetchOrderRequest(e)),
        fetchOrderByIdRequest:(e) => dispatch (fetchOrderByIdRequest(e)),
    };
}

export default withRouterParams(connect(mapStateToProps,mapDispatchToProps)(OrderDetail));
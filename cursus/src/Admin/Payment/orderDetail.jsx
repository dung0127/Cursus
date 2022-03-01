import React from 'react'
import Footer from '../Layout/footer';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchOrderRequest, fetchOrderByIdRequest } from '../../actions/payment';
import $ from "jquery";
import {withRouterParams} from "../Auth/withRouter"

class OrderDetail extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.params.id
        }
                       
    }

    componentDidMount(){
        this.props.fetchOrderRequest(this.props.page);
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
                                <h2 className="st_title"><i className='uil uil-user'></i> Orders <b>#{this.state.id}</b> Detail</h2>
                            </div>			
                            
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="my_courses_tabs">
                                <div className="col-lg-12">
								<div className="membership_chk_bg">
									<div className="checkout_title">
										<h4>Billing Details #{orderById.orderNumber}</h4>
										<img src="/images/line.svg" alt="" />
									</div>
									<div className="col-lg-12">
                                        <div className="address_text">
                                        {orderById.user.username}.<br/>
                                        {orderById.user.fullname}<br/>
                                        {orderById.user.addrress}<br/>
                                        {orderById.dateOrder}  
                                        </div>        
									</div>
								</div>
								<div className="membership_chk_bg">
										<div className="checkout_title">
											<h4>Order Details</h4>
											<img src="/images/line.svg" alt=""/>
										</div>
										
										<div className="order_dt_section">
											{/* {cartItems.map((item) => (
												
											<div className="order_title">
												
												<h4><Link to={`/course/${item.id}`} params={item.id} className="hf_img">
													<img className="cart_img" style={{ width:"100px"}} src={item.imageVideoDescription} alt=""/>
												</Link>{item.title}</h4>
												<div className="order_price">${item.price}</div>
											</div>
											))} */}
											<div className="order_title">
												<h6>Discount</h6>
												<div className="order_price">$0</div>
											</div>
											<div className="order_title">
												<h3>Total</h3>
												{/* <div className="order_price">{sum.formatCurrency(
                                                    cartItems.reduce((a, c) => a + c.price , 0)
                                                    )}</div> */}
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
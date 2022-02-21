import React from "react";
import FooterUser from "../Layout/footerUser"
import {connect} from 'react-redux';
import { fetchCourseRequest } from "../../actions/course";
import {fetchDetailUserRequest} from "../../actions/detail";
import OwlCarousel from 'react-owl-carousel';
import {Link} from "react-router-dom";
import { addToCart,removeFromCart } from "../../actions/cart";
import sum from "../Cart/sum"

class Checkout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            course:'',
        }
    }

    componentDidMount(){
        this.props.fetchCourseRequest(0);
		this.props.fetchDetailUserRequest();
    } 

    render(){
        const { cartItems, user } = this.props;
        return (
            <div className="wrapper">		
                <div className="_215b15">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">						
                                <div className="title125">						
                                    <div className="titleleft">					
                                        <div className="ttl121">
                                            <h2>Checkout</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="title126">	
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb4d25">
					<div className="container">			
						<div className="row">
							<div className="col-lg-8">
								<div className="membership_chk_bg">
									<div className="checkout_title">
										<h4>Billing Details</h4>
										<img src="images/line.svg" alt="" />
									</div>
									<div className="panel-group" id="accordion"  aria-multiselectable="true">
										<div className="panel panel-default">
											<div className="panel-heading" role="tab" id="address1">
												<div className="panel-title">
													<a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseaddress1" aria-expanded="false" aria-controls="collapseaddress1">
														Edit Address
													</a>
												</div>
											</div>
											<div id="collapseaddress1" className="panel-collapse collapse" role="tabpanel" aria-labelledby="address1">
												<div className="panel-body">
													<form>
														<div className="row">
															<div className="col-lg-12">													
																<div className="ui search focus mt-30 lbel25">	
																	<label>Full Name*</label>
																	<div className="ui left icon input swdh11 swdh19">
																		<input className="prompt srch_explore" type="text" name="academyname" defaultValue={user.fullname} id="id_academy" required="" maxlength="64" placeholder="Academy Name"/>															
																	</div>
																	<div className="help-block">If you want your invoices addressed to a academy. Leave blank to use your full name.</div>
																</div>
															</div>	
															<div className="col-lg-12">
																<div className="ui search focus mt-30 lbel25">
																	<label>Address*</label>
																	<div className="ui left icon input swdh11 swdh19">
																		<input className="prompt srch_explore" type="text" name="addressname"  defaultValue={user.address} id="id_address1" required="" maxlength="300" placeholder="Address Line 1"/>															
																	</div>
																</div>
															</div>
															<div className="col-lg-6">
																<div className="ui search focus mt-30 lbel25">
																	<label>Zip/Postal Code*</label>
																	<div className="ui left icon input swdh11 swdh19">
																		<input className="prompt srch_explore" type="text" name="zip" value="" id="id_zip" required="" maxlength="64" placeholder="Zip / Postal Code"/>															
																	</div>
																</div>
															</div>
															<div className="col-lg-6">
																<div className="ui search focus mt-30 lbel25">
																	<label>Phone Number*</label>
																	<div className="ui left icon input swdh11 swdh19">
																		<input className="prompt srch_explore" type="text" name="phone" defaultValue={`+${user.phone}`} id="id_phone" required="" maxlength="12" placeholder="Phone Number"/>															
																	</div>
																</div>
															</div>
															<div className="col-lg-6">
																<button className="save_address_btn" type="submit">Save Changes</button>
															</div>												
														</div>
													</form>
												</div>
											</div>
										</div>
									</div>
									<div className="address_text">
										Full Name: {user.fullname}<br/>
										Billing Address: {user.address}<br/>Phone: {`+${user.phone}`}<br/> 
										ZIpcode: India
									</div>
								</div>
								<div className="membership_chk_bg">
									<div className="checkout_title">
										<h4>Select Payment Method</h4>
										<img src="images/line.svg" alt=""/>
									</div>
									<div className="checkout-tabs">
										<ul className="nav nav-tabs" id="myTab" role="tablist">
											<li className="nav-item">
												<a href="#credit-method-tab" id="credit-tab" className="nav-link active" data-toggle="tab"><i className="uil uil-card-atm check_icon5"></i>Credit/Debit Card</a>
											</li>
											<li className="nav-item">
												<a href="#bank-method-tab" id="bank-tab" className="nav-link" data-toggle="tab"><i className="uil uil-university check_icon5"></i>Bank Transfer</a>
											</li>
											<li className="nav-item">
												<a href="#payapl-method-tab" id="payapl-tab" className="nav-link" data-toggle="tab"><i className="uil uil-paypal check_icon5"></i>Paypal</a>
											</li>
										</ul>									
									</div>
									<div className="tab-content" id="myTabContent">
										<div className="tab-pane fade show active" id="credit-method-tab" role="tabpanel" aria-labelledby="credit-tab">
											<form>
												<div className="row">
													<div className="col-md-6">	
														<div className="ui search focus mt-30 lbel25">
															<label>Holder Name</label>
															<div className="ui left icon input swdh11 swdh19">
																<input className="prompt srch_explore" type="text" name="holder[name]" value="" id="id_holdername" required="" maxlength="64" placeholder="Enter Holder Name"/>															
															</div>
														</div>										
													</div>
													<div className="col-md-6">	
														<div className="ui search focus mt-30 lbel25">
															<label>Card Number</label>
															<div className="ui left icon input swdh11 swdh19">														
																<input className="prompt srch_explore" type="text" name="card[number]" maxlength="16" placeholder="Card #"/>									
															</div>
														</div>												
													</div>
													<div className="col-md-4">
														<div className="lbel25 mt-30">
															<label>Expiration Month</label>
															<select className="ui hj145 dropdown cntry152 prompt srch_explore" name="card[expire-month]">
																<option value="">Month</option>
																<option value="1">January</option>
																<option value="2">February</option>
																<option value="3">March</option>
																<option value="4">April</option>
																<option value="5">May</option>
																<option value="6">June</option>
																<option value="7">July</option>
																<option value="8">August</option>
																<option value="9">September</option>
																<option value="10">October</option>
																<option value="11">November</option>
																<option value="12">December</option>
															</select>
														</div>
													</div>
													<div className="col-md-4">
														<div className="ui search focus mt-30 lbel25">
															<label>Expiration Year</label>
															<div className="ui left icon input swdh11 swdh19">	
																<input className="prompt srch_explore" type="text" name="card[expire-year]" maxlength="4" placeholder="Year"/>
															</div>
														</div>
													</div>
													<div className="col-md-4">
														<div className="ui search focus mt-30 lbel25">
															<label>Expiration Year</label>
															<div className="ui left icon input swdh11 swdh19">	
																<input className="prompt srch_explore"  type="text" name="card[cvc]" maxlength="3" placeholder="CVC"/>
															</div>
														</div>
													</div>
												</div>
											</form>
										</div>
										<div className="tab-pane fade" id="bank-method-tab" role="tabpanel" aria-labelledby="bank-tab">
											<form>
												<div className="row">
													<div className="col-md-6">	
														<div className="ui search focus mt-30 lbel25">
															<label>Account Holder Name</label>
															<div className="ui left icon input swdh11 swdh19">
																<input className="prompt srch_explore" type="text" name="account[holdername}" value="" required="" maxlength="64" placeholder="Enter Your Full Name"/>															
															</div>
														</div>										
													</div>
													<div className="col-md-6">	
														<div className="ui search focus mt-30 lbel25">
															<label>Account Number</label>
															<div className="ui left icon input swdh11 swdh19">														
																<input className="prompt srch_explore" type="text" name="Account[number]" maxlength="10" placeholder="Enter Account Number"/>									
															</div>
														</div>												
													</div>
													<div className="col-md-6">
														<div className="lbel25 mt-30">
															<label>Bank Name</label>
															<select className="ui hj145 dropdown cntry152 prompt srch_explore" name="Bank[name]">
																<option value="">State Bank of India</option>
																<option value="1">Indian Bank</option>
																<option value="2">ICICI Bank</option>
																<option value="3">HDFC Bank</option>
																<option value="4">Yes Bank</option>
																<option value="5">Oriental Bank</option>
																<option value="6">Punjab National Bank</option>
															</select>
														</div>
													</div>
													<div className="col-md-6">
														<div className="ui search focus mt-30 lbel25">
															<label>IFSC Code</label>
															<div className="ui left icon input swdh11 swdh19">	
																<input className="prompt srch_explore" type="text" name="IFSC[code]" maxlength="10" placeholder="Enter IFSC Code"/>
															</div>
														</div>
													</div>
												</div>
											</form>
										</div>
										<div className="tab-pane fade" id="payapl-method-tab" role="tabpanel" aria-labelledby="payapl-tab">
											<div className="row">
												<div className="col-md-12">	
													<p className="t-body">After payment via PayPal's secure checkout, we will send you a link to download your files.</p>
													<div className="media h-mt2">
														<div className="media__item -align-center">
															<p className="t2-body h-m0">PayPal accepts</p>
														</div>
														<div className="media__body">
															<ul id="paypal-gateway" className="financial-institutes">
																<li className="financial-institutes__logo">
																<img alt="Visa" title="Visa" src="images/membership/pyicon-1.svg"/>
																</li>
																<li className="financial-institutes__logo">
																<img alt="MasterCard" title="MasterCard" src="images/membership/pyicon-2.svg"/>
																</li>
																<li className="financial-institutes__logo">
																<img alt="American Express" title="American Express" src="images/membership/pyicon-3.svg"/>
																</li>
																<li className="financial-institutes__logo">
																<img alt="Discover" title="Discover" src="images/membership/pyicon-4.svg"/>
																</li>
																<li className="financial-institutes__logo">
																<img alt="China UnionPay" title="China UnionPay" src="images/membership/pyicon-5.svg"/>
																</li>
															</ul>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="chckout_order_dt">
										<div className="checkout_title">
											<h4>Order Details</h4>
											<img src="images/line.svg" alt=""/>
										</div>
										
										<div className="order_dt_section">
											{cartItems.map((item) => (
											<div className="order_title">
												<h4>{item.title}</h4>
												<div className="order_price">${item.price}</div>
											</div>
											))}
											<div className="order_title">
												<h6>Discount</h6>
												<div className="order_price">$0</div>
											</div>
											<div className="order_title">
												<h3>Total</h3>
												<div className="order_price">{sum.formatCurrency(
                                                    cartItems.reduce((a, c) => a + c.price , 0)
                                                    )}</div>
											</div>
											<button className="chckot_btn" type="submit">Confirm Checkout</button>
										</div>
										
									</div>
								</div>									
							</div>
							<div className="col-lg-4">
								<div className="membership_chk_bg rght1528">
										<div className="checkout_title">
											<h4>Order Summary</h4>
											<img src="images/line.svg" alt=""/>
										</div>
										<div className="order_dt_section">
											<div className="order_title">
												<h4>Orignal Price</h4>
												<div className="order_price">{sum.formatCurrency(
                                                    cartItems.reduce((a, c) => a + c.price , 0)
                                                    )}</div>
											</div>
											<div className="order_title">
												<h6>Discount Price</h6>
												<div className="order_price">$0</div>
											</div>
											<div className="order_title">
												<h2>Total</h2>
												<div className="order_price5">{sum.formatCurrency(
                                                    cartItems.reduce((a, c) => a + c.price , 0)
                                                    )}</div>
											</div>
											<div className="scr_text"><i className="uil uil-lock-alt"></i>Secure checkout</div>
										</div>
								
											
									
								</div>
							</div>								
						</div>				
					</div>
				</div>
                <FooterUser/>
            </div>
      );
    }
  
};

const mapStateToProps = state => {
    return {        
        courses: state.course.courses,
        page: state.course.page,
        totalPages: state.course.totalPages,
        user: state.detail.user,
        cartItems: state.cart.items,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCourseRequest:(e) => dispatch (fetchCourseRequest(e)),
        fetchDetailUserRequest:() => dispatch (fetchDetailUserRequest()),
        addToCart:(e,p) => dispatch (addToCart(e,p)),
        removeFromCart:(e,p) => dispatch (removeFromCart(e,p)),
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Checkout);

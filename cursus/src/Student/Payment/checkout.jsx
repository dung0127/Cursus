import React from "react";
import FooterUser from "../Layout/footerUser"
import {connect} from 'react-redux';
import { fetchCourseRequest } from "../../actions/course";
import {fetchDetailUserRequest} from "../../actions/detail";
import OwlCarousel from 'react-owl-carousel';
import {Link} from "react-router-dom";
import { addToCart,removeFromCart } from "../../actions/cart";
import sum from "../Cart/sum"
import { fetchPaymentRequest } from "../../actions/payment";
import Success from "../../Alert/success"
import Error from "../../Alert/error"
import validator from "validator";
import {withRouter} from "../../Admin/Auth/withRouter"

class Checkout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            course:'',
			checkout:{
				billingAddress:'',
				nameHolder:'',
				cardNumber:'',
				expirationDate:'',
				zipcode:'',
				cvv:'',
			},
			error:{},
        }
    }

    componentDidMount(){
		this.props.fetchDetailUserRequest();
    } 

	formCheckout = e => {   
        let formData = Object.assign({}, this.state.checkout);    
        formData[e.target.name] = e.target.value;        
        this.setState({checkout:formData});  
        console.log(formData)  
    }

	validate = () => {
        let isValid = true;

        const error = {}

        if(validator.isEmpty(this.state.checkout.billingAddress)){            
            error['billingAddress'] = 'Country select is required.';
            isValid = false;
        }

        if(validator.isEmpty(this.state.checkout.nameHolder)){            
            error['nameHolder'] = 'The Name Holder field is required';
            isValid = false;
        }

        if(validator.isEmpty(this.state.checkout.cardNumber)){            
            error['cardNumber'] = 'The Card Number field is required.';
            isValid = false;
        }

        if(validator.isEmpty(this.state.checkout.expirationDate)){            
            error['expirationDate'] = 'The Expiration Date field is required.';
            isValid = false;
        }

        if(validator.isEmpty(this.state.checkout.zipcode)){            
            error['zipcode'] = 'The field is required.';
            isValid = false;
        }
        if(validator.isEmpty(this.state.checkout.cvv)){            
            error['cvv'] = 'The field is required.';
            isValid = false;
        }

		if(this.props.cartItems.length<=0){
			error['cart'] = 'Shopping Cart is empty! Go to shopping now';
            isValid = false;
		}

        this.setState({
            error: error
        })

        return isValid;
    }

	checkoutCart = (items, info) => {
		if(this.validate()){
			const cartId = [...new Set(items.map(item=>item.id))];
			info.courseIds=cartId;
			console.log(info)
			this.props.fetchPaymentRequest(info)
			setTimeout(()=>{
				this.props.navigate('/course')
				window.location.reload();
			},3000);
		}
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
								{this.props.message=="Success"?
									<div  id="success" style={{display:"none"}}><Success name="Order Successful"/></div>:
									<div  id="success" style={{display:"none"}}><Error name={this.props.message}/></div>
								}
            
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
									<div className="col-lg-12">
										<div className="mt-30 lbel25">	
											<label>Country*</label>
										</div>
										<select className="ui fluid dropdown focus cntry152" name="billingAddress" onChange={this.formCheckout}>			
												<option className="default text" selected disabled hidden >Select Country</option>
												<option className="item" value="af">Afghanistan</option>
												<option className="item" value="ax">Aland Islands</option>
												<option className="item" value="al">Albania</option>
												<option className="item" value="ax">Aland Islands</option>
												<option className="item" value="al">English</option>
												<option className="item" value="af">Japan</option>
												<option className="item" value="af">Vietnam</option>
											
										</select>
										{this.state.error.billingAddress && <div className="validation alert alert-warning">{this.state.error.billingAddress}</div>}
                                                                       
									</div>
								</div>
								<div className="membership_chk_bg">
									<div className="checkout_title">
										<h4>Select Payment Method</h4>
										<img src="images/line.svg" alt=""/>
									</div>
									<div className="checkout-tabs">
										<ul className="nav nav-tabs" id="myTab" role="tablist">
											<li className="nav-item" >
												<a href="#credit-method-tab" id="credit-tab" className="nav-link active" data-toggle="tab"><i className="uil uil-card-atm check_icon5"></i>Credit/Debit Card</a>
											</li>
											{/* <li className="nav-item">
												<a href="#bank-method-tab" id="bank-tab" className="nav-link" data-toggle="tab"><i className="uil uil-university check_icon5"></i>Bank Transfer</a>
											</li> */}
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
															<div className="ui input swdh11 swdh19">
																<input className="prompt srch_explore" type="text" name="nameHolder" onChange={this.formCheckout} maxlength="64" placeholder="Enter Holder Name"/>															
															</div>
															{this.state.error.nameHolder && <div className="validation alert alert-warning">{this.state.error.nameHolder}</div>}
                                                                       
														</div>										
													</div>
													<div className="col-md-6">	
														<div className="ui search focus mt-30 lbel25">
															<label>Card Number</label>
															<div className="ui input swdh11 swdh19">														
																<input className="prompt srch_explore" type="text" name="cardNumber" maxlength="16" placeholder="Card #" onChange={this.formCheckout}/>									
															</div>
															{this.state.error.cardNumber && <div className="validation alert alert-warning">{this.state.error.cardNumber}</div>}
                                                                       
														</div>												
													</div>
													<div className="col-md-4">
														<div className="ui search focus mt-30 lbel25">
															<label>Expiration Date</label>
															<div className="ui input swdh11 swdh19">	
																<input className="prompt srch_explore" type="month" name="expirationDate" maxlength="4" placeholder="Expiration Date" onChange={this.formCheckout}/>
															</div>
															{this.state.error.expirationDate && <div className="validation alert alert-warning">{this.state.error.expirationDate}</div>}
                                                                       
														</div>
													</div>
													<div className="col-md-4">
														<div className="ui search focus mt-30 lbel25">
															<label>Zip/Postal Code</label>
															<div className="ui input swdh11 swdh19">	
																<input className="prompt srch_explore"  type="text" name="zipcode" maxlength="3" placeholder="Zip code" onChange={this.formCheckout}/>
															</div>
															{this.state.error.zipcode && <div className="validation alert alert-warning">{this.state.error.zipcode}</div>}
                                                                       
														</div>
													</div>
													<div className="col-md-4">
														<div className="ui search focus mt-30 lbel25">
															<label>Security Code</label>
															<div className="ui input swdh11 swdh19">	
																<input className="prompt srch_explore"  type="text" name="cvv" maxlength="3" placeholder="Security code" onChange={this.formCheckout}/>
															</div>
															{this.state.error.cvv && <div className="validation alert alert-warning">{this.state.error.cvv}</div>}
                                                                       
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
												
												<h4><Link to={`/course/${item.id}`} params={item.id} className="hf_img">
													<img className="cart_img" style={{ width:"100px"}} src={item.imageVideoDescription} alt=""/>
												</Link>{item.title}</h4>
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
											
										</div>
										<div className="order_dt_section">
											{this.state.error.cart && <div className="validation alert alert-warning">Shopping Cart is empty! Go to shopping <Link to='/course'>NOW</Link></div>}
                                                              
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
											<button className="chck-btn22" type="button" onClick={()=>this.checkoutCart(cartItems, this.state.checkout)}>Complete Payment</button>
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
        user: state.detail.user,
        cartItems: state.cart.items,
		message: state.payment.messageSuccess
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchDetailUserRequest:() => dispatch (fetchDetailUserRequest()),
		fetchPaymentRequest:(e) => dispatch (fetchPaymentRequest(e))
    };
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Checkout));

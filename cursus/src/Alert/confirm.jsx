import React from "react";
import $ from "jquery"

// $("#test").delay(5000).fadeOut();


class Confirm extends React.Component {

	constructor(){
        super()
       
    }
    
    render() {
        return (
            <div className="alert_wrapper"  >
				<div className="alert_backdrop"></div>
				    <div className="alert_inner">
					
					<div className="alert_item alert_success active">
						
						<div className="data" style={{width:"150px"}}>
							{/* <p className="title"><span>Success</span>
							</p> */}
							
                            <span style={{fontSize:"16px",width:"200px", textAlign:"center"}}> {this.props.name?this.props.name:''}</span>
							<div style={{ paddingTop:"20px"}} ><span style={{padding:"10px", paddingTop:"20px"}}><button type="button" class="btn btn-success"  data-confirmmodal-but="ok">Ok</button></span>
                            <span style={{padding:"10px", paddingRight:"10px"}} ><button type="button" className="btn btn-error" style={{padding:"20px, 20px"}} data-confirmmodal-but="cancel">Cancel</button></span></div>
						</div>
                        
						{/* <div className="icon close">
							<i className="fas fa-times"></i>
						</div> */}
					</div>
				</div>
			</div>
        );
    }
}

export default Confirm;
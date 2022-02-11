import React from "react";
import {connect} from 'react-redux';
import { fetchCatalogRequest, searchCatalogRequest,updateCatalogRequest} from "../../actions/catalog";

class Catalog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            catalogs: [],
            editCatalog: {
                id:'',
                name:'',
                description:'',
            },
            searchCatalog:'',
        }
    }

    getCatalog = (catalogId, name, desscsription) => {
        this.setState({editCatalog : {
            id:catalogId,
            name:name,
            description:desscsription,
        }}); 
    }

    handleInputEditCatalogChange = e => {   
        let formData = Object.assign({}, this.state.editCatalog);    
        console.log(formData)
        formData[e.target.name] = e.target.value;        
        this.setState({editCatalog:formData});  
        console.log(formData)  
    }

    updateCatalog = (editCatalog) => {
        this.props.updateCatalogRequest(editCatalog);
    }

    handleInputSearchCatalogChange = e => {   
        let value = e.target.value       
        this.setState({searchCatalog:value});  
    }

    searchCatalog = (searchCatalog) => {
        this.props.searchCatalogRequest(searchCatalog)
    }

    componentDidMount(){
        this.props.fetchCatalogRequest();
    } 

    render(){
        console.log('hi',this.props.updateSuccess)
        return (
            <div className="tab-pane fade show active" id="pills-my-courses" role="tabpanel">
                <div className="table-responsive mt-30">
                    <div>
                        <div className="section3125">
                            <div className="explore_search">
                                <div className="ui search focus">
                                    <div className="ui left icon input swdh11">
                                        <input className="prompt srch_explore" type="text" placeholder="Search for Catalogs..." onChange={this.handleInputSearchCatalogChange} onKeyPress={e=> e.key==='Enter' && this.searchCatalog(this.state.searchCatalog)}/>
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
                                <th cclass="cell-ta" scope="col">Name</th>
                                <th class="cell-ta" scope="col">Description</th>
                                <th class="cell-ta" scope="col">Subcatalog</th>
                                <th className="text-center" scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.catalogs.map((catalog,index) => {
                                    return (
                                        <tr key={index}>
                                            <td className="text-center">{index + 1}</td>
                                            <td class="cell-ta">{catalog.name}</td>
                                            <td class="cell-ta">{catalog.description}</td>
                                            <td class="cell-ta">
                                            {catalog.subCatalogs.map(sub => {
                                                return (
                                                    <div>{sub.name}</div>
                                                )
                                            } )}
                                            </td>
                                            <td className="text-center"> 
                                                <a  title="Edit" className="gray-s" data-toggle="modal" data-target={'#id'+catalog.id} onClick={() => this.getCatalog(catalog.id, catalog.name, catalog.description)}><i className="uil uil-edit-alt"></i></a>
                                            </td>
                                            <div class="modal fade"  tabindex="-1" id={'id'+catalog.id} aria-hidden="true">
                                                <div class="modal-dialog modal-lg">
                                                    <div class="modal-content">
                                                        <div class="modal-header">
                                                            <h5 class="modal-title">Edit Catalog</h5>
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                        </div>
                                                        <div class="modal-body">
                                                            <div class="new-section-block">
                                                                <div class="row">
                                                                    <div class="col-md-12">
                                                                        <div class="new-section">
                                                                            <div class="form_group">
                                                                            <input class="form_input_1" type="hidden" name="id" value={catalog.id}/>
                                                                                <label class="label25">Catalog Name*</label>
                                                                                <input class="form_input_1" type="text" name="name" defaultValue={catalog.name} onChange={this.handleInputEditCatalogChange}/>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="new-section-block">
                                                                <div class="row">
                                                                    <div class="col-md-12">
                                                                        <div class="new-section">
                                                                            <div class="form_group">
                                                                                <label class="label25">Description</label>
                                                                                <div class="ui form swdh30">
                                                                                    <div class="field">
                                                                                        <textarea rows="3" name="description" defaultValue={catalog.description} onChange={this.handleInputEditCatalogChange}></textarea>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="help-block">220 words</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" class="main-btn cancel" data-dismiss="modal">Close</button>
                                                            <button type="button" class="main-btn" value={'edit'} onClick={()=>this.updateCatalog(this.state.editCatalog)}>Update</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </tr>);
                                    }
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {        
        catalogs: state.catalog.catalogs,
        updateSuccess: state.catalog.updateSuccess
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCatalogRequest:() => dispatch (fetchCatalogRequest()),
        searchCatalogRequest:(e) => dispatch (searchCatalogRequest(e)),
        updateCatalogRequest:(e) => dispatch (updateCatalogRequest(e))
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Catalog);
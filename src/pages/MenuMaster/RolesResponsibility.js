import React from 'react'
import BreadCrumb from '../../Components/Common/BreadCrumb';
import UiContent from '../../Components/Common/UiContent';
import PreviewCardHeader from '../../Components/Common/PreviewCardHeader'
import { Link } from 'react-router-dom';
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Col,
    Input,
    Label,
    Container,
    ListGroup,
    ListGroupItem,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Row,
  } from "reactstrap";
const RolesResponsibility = () => {
  return (
    <>
        <UiContent />
      <div className="page-content">
        
        <Container fluid={true}>
          <BreadCrumb title="Form Validation" pageTitle="Forms" /> 
          <Row>
            <Col lg={12}>
              <Card>
                <PreviewCardHeader title="Roles Assign Detail" />
                <CardBody>
                 

                  <div className="live-preview">
                    <form className="row g-3">
                      <Col md={4}>
                        <Label for="validationDefault01" className="form-label">Location </Label>
                        <select className="form-select" id="validationDefault04" required>
                          <option >--select--</option>
                          <option>abc</option>
                          <option>def</option>
                          <option>ghi</option>
                        </select>
                      </Col>
                      <Col md={4}>
                        <Label for="validationDefault02" className="form-label">Department Group</Label>
                        <select className="form-select" id="validationDefault04" required>
                          <option >--select--</option>
                          <option>abc</option>
                          <option>def</option>
                          <option>ghi</option>
                        </select>
                      </Col>
                      <Col md={4}>
                        <Label for="validationDefaultUsername" className="form-label">Department Types</Label>
                        
                        <select className="form-select" id="validationDefault04" required>
                          <option >--select--</option>
                          <option>abc</option>
                          <option>def</option>
                          <option>ghi</option>
                        </select>
                       
                      </Col>
                      <Col md={4}>
                        <Label for="validationDefault03" className="form-label">User Roles</Label>
                        <select className="form-select" id="validationDefault04" required>
                          <option >--select--</option>
                          <option>abc</option>
                          <option>def</option>
                          <option>ghi</option>
                        </select>
                      </Col>
                      <Col md={4}>
                        <Label for="validationDefault04" className="form-label">Users Name</Label>
                        <select className="form-select" id="validationDefault04" required>
                          <option>--select--</option>
                          <option>abc</option>
                          <option>def</option>
                          <option>ghi</option>
                        </select>
                      </Col>
                      
                      
                      <Col xs={12}>
                        <button className="btn btn-primary float-end" type="submit" >Submit form</button>
                      </Col>
                    </form>
                  </div>
                  <div className="d-none code-view">
                    <pre className="language-markup" style={{ "height": "352px" }}>
                      <code>
                        {/* <BrowserDefaults /> */}
                      </code>
                    </pre>
                  </div>

                 
                  


                  <div className="table-responsive table-card mt-4">
                                            <table className="table align-middle table-nowrap table-striped-columns mb-0">
                                                {/* <thead className="table-light">
                                                    <tr>
                                                        <th scope="col" style={{ width: "46px" }}>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" value="" id="cardtableCheck" />
                                                                <label className="form-check-label" htmlFor="cardtableCheck"></label>
                                                            </div>
                                                        </th>
                                                        <th scope="col">ID</th>
                                                        <th scope="col">Name</th>
                                                        <th scope="col">Date</th>
                                                        <th scope="col">Total</th>
                                                        <th scope="col">Status</th>
                                                        <th scope="col" style={{ width: "150px" }}>Action</th>
                                                    </tr>
                                                </thead> */}
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <div className="form-check " style={{marginLeft:'180px'}}>
                                                                <input className="form-check-input" type="checkbox" value="" id="cardtableCheck01" checked={true} style={{marginRight:'10px'}} />
                                                                <label className="form-check-label" htmlFor="cardtableCheck01">Set Up</label>
                                                            </div>
                                                        </td>
                                                        
                                                    </tr>
                                                     
                                                    <tr>
                                                        <td>
                                                            <div className="form-check" style={{marginLeft:'210px'}}>
                                                                <input className="form-check-input" type="checkbox" value="" id="cardtableCheck01" checked={true} style={{marginRight:'10px'}} />
                                                                <label className="form-check-label" htmlFor="cardtableCheck01">Menu Master</label>
                                                            </div>
                                                        </td>
                                                        
                                                    </tr>

                                                    <tr>
                                                        <td>
                                                            <div className="form-check" style={{marginLeft:'210px'}}>
                                                                <input className="form-check-input" type="checkbox" value="" id="cardtableCheck01" checked={true} style={{marginRight:'10px'}}/>
                                                                <label className="form-check-label" htmlFor="cardtableCheck01">Roles Responsibility</label>
                                                            </div>
                                                        </td>
                                                        
                                                    </tr>

                                                    <tr>
                                                        <td>
                                                            <div className="form-check" style={{marginLeft:'210px'}}>
                                                                <input className="form-check-input" type="checkbox" value="" id="cardtableCheck01" checked={true} style={{marginRight:'10px'}} />
                                                                <label className="form-check-label" htmlFor="cardtableCheck01">Admin User</label>
                                                            </div>
                                                        </td>
                                                        
                                                    </tr>

                                                    <tr>
                                                        <td>
                                                            <div className="form-check" style={{marginLeft:'180px'}}>
                                                                <input className="form-check-input" type="checkbox" value="" id="cardtableCheck01" checked={true}  style={{marginRight:'10px'}}/>
                                                                <label className="form-check-label" htmlFor="cardtableCheck01">Master</label>
                                                            </div>
                                                        </td>
                                                        
                                                    </tr>

                                                    <tr>
                                                        <td>
                                                            <div className="form-check" style={{marginLeft:'210px'}}>
                                                                <input className="form-check-input" type="checkbox" value="" id="cardtableCheck01" checked={true} style={{marginRight:'10px'}}/>
                                                                <label className="form-check-label" htmlFor="cardtableCheck01">Manage Document Master</label>
                                                            </div>
                                                        </td>
                                                        
                                                    </tr>

                                                    <tr>
                                                        <td>
                                                            <div className="form-check" style={{marginLeft:'210px'}}>
                                                                <input className="form-check-input" type="checkbox" value="" id="cardtableCheck01" checked={true} style={{marginRight:'10px'}}/>
                                                                <label className="form-check-label" htmlFor="cardtableCheck01">Department Master</label>
                                                            </div>
                                                        </td>
                                                        
                                                    </tr>

                                                    <tr>
                                                        <td>
                                                            <div className="form-check" style={{marginLeft:'210px'}}>
                                                                <input className="form-check-input" type="checkbox" value="" id="cardtableCheck01"  checked={true} style={{marginRight:'10px'}}/>
                                                                <label className="form-check-label" htmlFor="cardtableCheck01">Location Master</label>
                                                            </div>
                                                        </td>
                                                        
                                                    </tr>

                                                    <tr>
                                                        <td>
                                                            <div className="form-check" style={{marginLeft:'210px'}}>
                                                                <input className="form-check-input" type="checkbox" value="" id="cardtableCheck01" checked={true}  style={{marginRight:'10px'}} />
                                                                <label className="form-check-label" htmlFor="cardtableCheck01">Employee Master</label>
                                                            </div>
                                                        </td>
                                                        
                                                    </tr>

                                                    <tr>
                                                        <td>
                                                            <div className="form-check" style={{marginLeft:'180px'}}>
                                                                <input className="form-check-input" type="checkbox" value="" id="cardtableCheck01" checked={true} style={{marginRight:'10px'}}/>
                                                                <label className="form-check-label" htmlFor="cardtableCheck01">CRM Master</label>
                                                            </div>
                                                        </td>
                                                        
                                                    </tr> 
                                                    
                                                </tbody>
                                            </table>
                                        </div>


                </CardBody>
              </Card>
            </Col>
          </Row>

            

          
          


        </Container> 
      </div>
    </>
  )
}

export default RolesResponsibility

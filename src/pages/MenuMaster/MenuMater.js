import React, { useEffect } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from "reactstrap";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import { Link } from "react-router-dom";
import List from "list.js";
const MenuMater = () => {
  useEffect(() => {
    // pagination list

    new List("pagination-list", {
      valueNames: ["pagi-list"],
      page: 3,
      pagination: true,
    });
  });
  return (
    <>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Listjs" pageTitle="Tables" />
          <Row>
            <Col lg={12}>
              <Card>
                <CardHeader>
                  <div className="d-flex align-items-center flex-wrap gap-2">
                    <div className="flex-grow-1">
                      <h3>Menu Master</h3>
                    </div>
                    <div>
                    <Link to="/add-menu" className="btn btn-info add-btn">
                      <button className="btn btn-info add-btn">
                        <i className="ri-add-fill me-1 align-bottom"></i> Add
                        Menu
                      </button>
                      </Link>
                    </div>
                  </div>
                </CardHeader>

                <CardBody>
                  <div id="customerList">
                    <Row className="g-4 mb-3">
                      <Col className="col-sm-auto">
                        {/* <div>
                                        
                                            <Button color="success" className="add-btn me-1"  id="create-btn"><i className="ri-add-line align-bottom me-1"></i> Add</Button>
                                            <Button className="btn btn-soft-danger"
                                            
                                            ><i className="ri-delete-bin-2-line"></i></Button>
                                        </div> */}
                      </Col>
                      <Col className="col-sm">
                        <div className="d-flex justify-content-sm-end">
                          <div className="search-box ms-2">
                            <input
                              type="text"
                              className="form-control search"
                              placeholder="Search..."
                            />
                            <i className="ri-search-line search-icon"></i>
                          </div>
                        </div>
                      </Col>
                    </Row>

                    <div className="table-responsive table-card mt-3 mb-1">
                      <table
                        className="table align-middle table-nowrap"
                        id="customerTable"
                      >
                        <thead className="table-light">
                          <tr>
                            <th scope="col" style={{ width: "50px" }}>
                              {/* <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" id="checkAll" value="option" />
                                                    </div> */}
                            </th>
                            <th className="" data-sort="customer_name">
                              ID
                            </th>
                            <th className="" data-sort="email">
                              Name
                            </th>
                            <th className="" data-sort="phone">
                              Menu Group
                            </th>

                            <th className="" data-sort="status">
                              Status
                            </th>
                            <th className="" data-sort="action">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody className="list form-check-all">
                          <tr>
                            <th scope="row">
                              {/* <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" name="chk_child" value="option1" />
                                                    </div> */}
                            </th>
                            <td className="id" style={{ display: "none" }}>
                              <Link to="#" className="fw-medium link-primary">
                                #VZ2101
                              </Link>
                            </td>
                            <td className="customer_name">1</td>
                            <td className="email">abcdef</td>
                            <td className="phone">menu group</td>

                            <td className="status">
                              <span className="badge badge-soft-success text-uppercase">
                                Active
                              </span>
                            </td>
                            <td>
                              <div className="d-flex gap-2">
                                <div className="edit">
                                  <button
                                    className="btn btn-sm btn-success edit-item-btn"
                                    data-bs-toggle="modal"
                                    data-bs-target="#showModal"
                                  >
                                    Edit
                                  </button>
                                </div>
                                <div className="remove">
                                  <button
                                    className="btn btn-sm btn-danger remove-item-btn"
                                    data-bs-toggle="modal"
                                    data-bs-target="#deleteRecordModal"
                                  >
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <th scope="row">
                              {/* <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" name="chk_child" value="option1" />
                                                    </div> */}
                            </th>
                            <td className="id" style={{ display: "none" }}>
                              <Link to="#" className="fw-medium link-primary">
                                #VZ2101
                              </Link>
                            </td>
                            <td className="customer_name">1</td>
                            <td className="email">abcdef</td>
                            <td className="phone">menu group</td>

                            <td className="status">
                              <span className="badge badge-soft-success text-uppercase">
                                Active
                              </span>
                            </td>
                            <td>
                              <div className="d-flex gap-2">
                                <div className="edit">
                                  <button
                                    className="btn btn-sm btn-success edit-item-btn"
                                    data-bs-toggle="modal"
                                    data-bs-target="#showModal"
                                  >
                                    Edit
                                  </button>
                                </div>
                                <div className="remove">
                                  <button
                                    className="btn btn-sm btn-danger remove-item-btn"
                                    data-bs-toggle="modal"
                                    data-bs-target="#deleteRecordModal"
                                  >
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <th scope="row">
                              {/* <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" name="chk_child" value="option1" />
                                                    </div> */}
                            </th>
                            <td className="id" style={{ display: "none" }}>
                              <Link to="#" className="fw-medium link-primary">
                                #VZ2101
                              </Link>
                            </td>
                            <td className="customer_name">1</td>
                            <td className="email">abcdef</td>
                            <td className="phone">menu group</td>

                            <td className="status">
                              <span className="badge badge-soft-success text-uppercase">
                                Active
                              </span>
                            </td>
                            <td>
                              <div className="d-flex gap-2">
                                <div className="edit">
                                  <button
                                    className="btn btn-sm btn-success edit-item-btn"
                                    data-bs-toggle="modal"
                                    data-bs-target="#showModal"
                                  >
                                    Edit
                                  </button>
                                </div>
                                <div className="remove">
                                  <button
                                    className="btn btn-sm btn-danger remove-item-btn"
                                    data-bs-toggle="modal"
                                    data-bs-target="#deleteRecordModal"
                                  >
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="d-flex justify-content-end">
                      <div className="pagination-wrap hstack gap-2">
                        <Link
                          className="page-item pagination-prev disabled"
                          to="#"
                        >
                          Previous
                        </Link>
                        <ul className="pagination listjs-pagination mb-0"></ul>
                        <Link className="page-item pagination-next" to="#">
                          Next
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default MenuMater;

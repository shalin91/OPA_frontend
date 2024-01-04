import React, { useContext, useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import UiContent from "../../Components/Common/UiContent";
import {
  Card,
  CardHeader,
  Col,
  Container,
  Input,
  Row,
  Label,
} from "reactstrap";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import { TagsInput } from "react-tag-input-component";
import SignContext from "../../contextAPI/Context/SignContext";
const AddEmployee = () => {
  return (
    <>
      <UiContent />
      <div className="page-content">
        <Container fluid>
          <BreadCrumb
            grandParent="Setup"
            parent="Company Master"
            child="Add-Company"
          />
          <Row>
            <Col lg={12}>
              <Formik
                // validationSchema={schema}
                initialValues={
                  {
                    //   checkupName: "",
                    //   checkupNumber: "",
                    //   checkupDate: "",
                    //   checkupType: "",
                  }
                }
                onSubmit={(values, { resetForm }) => {
                  //   addCheckupDetails(values);
                  //   resetForm();
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                }) => (
                  <div className="login">
                    <div className="form">
                      {/* Passing handleSubmit parameter tohtml form onSubmit property */}
                      <form noValidate onSubmit={handleSubmit}>
                        {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}

                        <Card>
                          <CardHeader>
                            <Row className="g-1 m-1">
                              <Col className="col-sm">
                                <div className="d-flex justify-content-sm-between">
                                  <h2 className="card-title mb-0 justify-content-sm-start">
                                    <strong>Employee Details</strong>
                                  </h2>
                                </div>
                              </Col>
                            </Row>
                          </CardHeader>
                          <div className="card-body">
                            <div className="live-preview">
                              <Row className="align-items-center g-3">
                                <Col sm={4}>
                                  <div className="mb-3">
                                    <label
                                      className="form-label"
                                      htmlFor="product-orders-input"
                                    >
                                      Location
                                    </label>
                                    <div className="">
                                      <select
                                        className="form-select"
                                        name="checkupTpe"
                                        onBlur={handleBlur}
                                        value={values.checkupTpe}
                                        onChange={handleChange}
                                      >
                                        <option value="">--select--</option>
                                        <option value="abc">abc</option>
                                        <option value="def">def</option>
                                        <option value="fgh">fgh</option>
                                      </select>
                                    </div>
                                  </div>
                                </Col>
                                <Col sm={4}>
                                  <div className="mb-3">
                                    <label
                                      className="form-label"
                                      htmlFor="product-orders-input"
                                    >
                                      Department Group
                                    </label>
                                    <div className="">
                                      <select
                                        className="form-select"
                                        name="checkupType"
                                        onBlur={handleBlur}
                                        value={values.checkupType}
                                        onChange={handleChange}
                                      >
                                        <option value="">--select--</option>
                                        <option value="abc">abc</option>
                                        <option value="def">def</option>
                                        <option value="fgh">fgh</option>
                                      </select>
                                    </div>
                                  </div>
                                </Col>
                                <Col sm={4}>
                                  <div className="mb-3">
                                    <label
                                      className="form-label"
                                      htmlFor="product-orders-input"
                                    >
                                      Department Type
                                    </label>
                                    <div className="">
                                      <select
                                        className="form-select"
                                        name="heckupType"
                                        onBlur={handleBlur}
                                        value={values.heckupType}
                                        onChange={handleChange}
                                      >
                                        <option value="">--select--</option>
                                        <option value="abc">abc</option>
                                        <option value="def">def</option>
                                        <option value="fgh">fgh</option>
                                      </select>
                                    </div>
                                  </div>
                                </Col>
                                <Col sm={4}>
                                  <div className="mb-3">
                                    <label
                                      className="form-label"
                                      htmlFor="product-orders-input"
                                    >
                                      Employee Roles
                                    </label>
                                    <div className="">
                                      <select
                                        className="form-select"
                                        name="checkuTpe"
                                        onBlur={handleBlur}
                                        value={values.checkuTpe}
                                        onChange={handleChange}
                                      >
                                        <option value="">--select--</option>
                                        <option value="abc">abc</option>
                                        <option value="def">def</option>
                                        <option value="fgh">fgh</option>
                                      </select>
                                    </div>
                                  </div>
                                </Col>
                                <Col sm={4}>
                                  <div className="mb-3">
                                    <label
                                      className="form-label"
                                      htmlFor="product-orders-input"
                                    >
                                      Employee Name
                                    </label>
                                    <div className="">
                                      <select
                                        className="form-select"
                                        name="cheTpe"
                                        onBlur={handleBlur}
                                        value={values.cheTpe}
                                        onChange={handleChange}
                                      >
                                        <option value="">--select--</option>
                                        <option value="abc">abc</option>
                                        <option value="def">def</option>
                                        <option value="fgh">fgh</option>
                                      </select>
                                    </div>
                                  </div>
                                </Col>
                                <Col sm={4}></Col>
                                <Col sm={2}>
                                  <div className="mt-3">
                                    <Input
                                      type="checkbox"
                                      id="isActive"
                                      label="Is Active"
                                      name="active"
                                      checked={values.active}
                                      onChange={handleChange}
                                    />
                                    <label className="me-2">Is Active</label>
                                  </div>
                                </Col>
                              </Row>
                            </div>
                          </div>
                          <div className="text-end mb-3 me-3">
                            <button
                              className="btn btn-success w-sm"
                              type="submit"
                            >
                              Submit
                            </button>
                          </div>
                        </Card>
                      </form>
                    </div>
                  </div>
                )}
              </Formik>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default AddEmployee;

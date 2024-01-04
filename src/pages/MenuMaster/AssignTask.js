import React, { useContext, useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import UiContent from "../../Components/Common/UiContent";
import Select from "react-select";
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
const SingleOptions = [
    { value: "Choices 1", label: "Choices 1" },
    { value: "Choices 2", label: "Choices 2" },
    { value: "Choices 3", label: "Choices 3" },
    { value: "Choices 4", label: "Choices 4" },
  ];
const AssignTask = () => {
    const [selectedSingle, setSelectedSingle] = useState(null);
    const [selectedGroup, setSelectedGroup] = useState(null);
    const [selectedGroup2, setSelectedGroup2] = useState(null);
    const [selectedNoSortingGroup, setSelectedNoSortingGroup] = useState(null);
    const [selectedMulti, setselectedMulti] = useState(null);
    const [selectedMulti2, setselectedMulti2] = useState(null);
    const [selectedMulti3, setselectedMulti3] = useState(null);
  
    function handleSelectSingle(selectedSingle) {
      setSelectedSingle(selectedSingle);
    }
  
    function handleSelectGroups(selectedGroup) {
      setSelectedGroup(selectedGroup);
    }
  
    function handleSelectGroups2(selectedGroup2) {
      setSelectedGroup2(selectedGroup2);
    }
  
    function handleSelectNoSortingGroup(selectedNoSortingGroup) {
      setSelectedNoSortingGroup(selectedNoSortingGroup);
    }
  
    function handleMulti(selectedMulti) {
      setselectedMulti(selectedMulti);
    }
  
    function handleMulti2(selectedMulti2) {
      setselectedMulti2(selectedMulti2);
    }
  
    function handleMulti3(selectedMulti3) {
      setselectedMulti3(selectedMulti3);
    }
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
                                    <strong>Assigns Task Details</strong>
                                  </h2>
                                </div>
                              </Col>
                            </Row>
                          </CardHeader>
                          <div className="card-body">
                            <div className="live-preview">
                              <Row className="align-items-center g-3">
                              <Col sm={4}>
                                  <label
                                    className="form-label mt-3"
                                    htmlFor="product-orders-input"
                                  >
                                    Document Name
                                  </label>
                                  <div className="">
                                    <Input
                                      type="text"
                                      
                                      className="form-control"
                                      id="product-orders-input"
                                      name="checkupNumber"
                                      aria-label="orders"
                                      ar
                                      ia-describedby="product-orders-addon"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.checkupNumber}
                                    />
                                  </div>

                                  <p className="error text-danger">
                                    {/* {errors.checkupNumber &&
                                      touched.checkupNumber &&
                                      errors.checkupNumber} */}
                                  </p>
                                </Col>
                                <Col sm={4}>
                                  <label
                                    className="form-label mt-3"
                                    htmlFor="product-orders-input"
                                  >
                                   Document Darpartment Types
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
                                      <option value="">abc</option>
                                      <option value="">def</option>
                                      <option value="">fgh</option>
                                    </select>
                                  </div>
                                  <p className="error text-danger">
                                    {errors.checkupType &&
                                      touched.checkupType &&
                                      errors.checkupType}
                                  </p>
                                </Col>
                                <Col sm={4}>
                                  <label
                                    className="form-label mt-3"
                                    htmlFor="product-orders-input"
                                  >
                                   Task Types
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
                                      <option value="">abc</option>
                                      <option value="">def</option>
                                      <option value="">fgh</option>
                                    </select>
                                  </div>
                                  <p className="error text-danger">
                                    {errors.checkupType &&
                                      touched.checkupType &&
                                      errors.checkupType}
                                  </p>
                                </Col>
                                <Col sm={4}>
                                  <label
                                    className="form-label mt-3"
                                    htmlFor="product-orders-input"
                                  >
                                    Form Link
                                  </label>
                                  <div className="">
                                    <Input
                                      type="text"
                                      
                                      className="form-control"
                                      id="product-orders-input"
                                      name="checkupNumber"
                                      aria-label="orders"
                                      ar
                                      ia-describedby="product-orders-addon"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.checkupNumber}
                                    />
                                  </div>

                                  <p className="error text-danger">
                                    {/* {errors.checkupNumber &&
                                      touched.checkupNumber &&
                                      errors.checkupNumber} */}
                                  </p>
                                </Col>
                                <Col sm={4}>
                                  <label
                                    className="form-label mt-3"
                                    htmlFor="product-orders-input"
                                  >
                                   Document  Types
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
                                      <option value="">abc</option>
                                      <option value="">def</option>
                                      <option value="">fgh</option>
                                    </select>
                                  </div>
                                  <p className="error text-danger">
                                    {errors.checkupType &&
                                      touched.checkupType &&
                                      errors.checkupType}
                                  </p>
                                </Col>
                                
                                <Col sm={4}>
                                <div >
                            <Label htmlFor="formFile" className="form-label">
                              Upload Document
                            </Label>
                            <Input
                              className="form-control"
                              type="file"
                              id="formFile"
                            />
                          </div>
                                </Col>

                                <Col sm={4} className="mb-5">
                                  <label
                                    className="form-label mt-3"
                                    htmlFor="product-orders-input"
                                  >
                                    Document Link
                                  </label>
                                  <div className="">
                                    <Input
                                      type="text"
                                      
                                      className="form-control"
                                      id="product-orders-input"
                                      name="checkupNumber"
                                      aria-label="orders"
                                      ar
                                      ia-describedby="product-orders-addon"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.checkupNumber}
                                    />
                                  </div>

                                  <p className="error text-danger">
                                    {/* {errors.checkupNumber &&
                                      touched.checkupNumber &&
                                      errors.checkupNumber} */}
                                  </p>
                                </Col>
                                <Col sm={8}>
                                  <div>
                                    <Label
                                      htmlFor="exampleFormControlTextarea5"
                                      className="form-label"
                                    >
                                      Document Description
                                    </Label>
                                    <textarea
                                      className="form-control"
                                      id="exampleFormControlTextarea5"
                                      rows="4"
                                    ></textarea>
                                  </div>
                                </Col>
                                {/* <Col sm={2}>
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
                               </Col> */}

                              </Row>
                            </div>
                          </div>

                          
                          
                        </Card>
                      </form>
                    </div>
                  </div>
                )}
              </Formik>
            </Col>
          </Row>
 
           {/* new one */}
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
                                    <strong> Task Access</strong>
                                  </h2>
                                </div>
                              </Col>
                            </Row>
                          </CardHeader>
                          <div className="card-body">
                            <div className="live-preview">
                              <Row className="align-items-center g-3">
                              
                              <Col lg={4}>
                                  <div className="mb-3">
                                    <Label
                                      htmlFor="choices-multiple-default"
                                      className="form-label text-muted"
                                    >
                                      Location
                                    </Label>
                                    <Select
                                      value={selectedMulti}
                                      isMulti={true}
                                      onChange={() => {
                                        handleMulti();
                                      }}
                                      options={SingleOptions}
                                    />
                                  </div>
                                </Col>
                                <Col lg={4}>
                                  <div className="mb-3">
                                    <Label
                                      htmlFor="choices-multiple-default"
                                      className="form-label text-muted"
                                    >
                                      Department Group
                                    </Label>
                                    <Select
                                      value={selectedMulti}
                                      isMulti={true}
                                      onChange={() => {
                                        handleMulti();
                                      }}
                                      options={SingleOptions}
                                    />
                                  </div>
                                </Col>
                                <Col lg={4}>
                                  <div className="mb-3">
                                    <Label
                                      htmlFor="choices-multiple-default"
                                      className="form-label text-muted"
                                    >
                                      Department Type
                                    </Label>
                                    <Select
                                      value={selectedMulti}
                                      isMulti={true}
                                      onChange={() => {
                                        handleMulti();
                                      }}
                                      options={SingleOptions}
                                    />
                                  </div>
                                </Col>
                                <Col lg={6}>
                                  <div className="mb-3">
                                    <Label
                                      htmlFor="choices-multiple-default"
                                      className="form-label text-muted"
                                    >
                                      Employess Roles
                                    </Label>
                                    <Select
                                      value={selectedMulti}
                                      isMulti={true}
                                      onChange={() => {
                                        handleMulti();
                                      }}
                                      options={SingleOptions}
                                    />
                                  </div>
                                </Col>
                                <Col lg={6}>
                                  <div className="mb-3">
                                    <Label
                                      htmlFor="choices-multiple-default"
                                      className="form-label text-muted"
                                    >
                                      Employees Access
                                    </Label>
                                    <Select
                                      value={selectedMulti}
                                      isMulti={true}
                                      onChange={() => {
                                        handleMulti();
                                      }}
                                      options={SingleOptions}
                                    />
                                  </div>
                                </Col>
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

export default AssignTask;


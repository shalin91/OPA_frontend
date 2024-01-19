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
const AddTask = () => {
  const [departmenttype, setdepartmentype] = useState(null);
  const { GetallDepartmentType,addTask } = useContext(SignContext);
  const getalldtype = async () => {
    const response = await GetallDepartmentType();
    // console.log(response);
    setdepartmentype(response.data);
  };
  const addDetails = async (values) => {
    const response = await addTask(values);

    console.log(response);
  };
  useEffect(() => {
    getalldtype();
  }, []);
  useEffect(() => {
    console.log(departmenttype);
  }, [departmenttype]);
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
                    departmentType:"",
                    taskName:"",
                    taskType:"",
                    accessLocation:"",
                    detail:"",
                    isActive: true,
                  }
                }
                onSubmit={(values, { resetForm }) => {
                    addDetails(values);
                    resetForm();
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
                                    <strong>Task Details</strong>
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
                                    Department Types
                                  </label>
                                  <div className="">
                                    <select
                                      className="form-select"
                                      name="departmentType"
                                      onBlur={handleBlur}
                                      value={values.departmentType}
                                      onChange={handleChange}
                                    >
                                      <option value="">--select--</option>
                                      {departmenttype &&
                                      departmenttype.length > 0 ? (
                                        departmenttype.map((type) => (
                                          <option key={type} value={type._id}>
                                            {type.name}
                                          </option>
                                        ))
                                      ) : (
                                        <option value="" disabled>
                                          No locations available
                                        </option>
                                      )}
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
                                    Task name
                                  </label>
                                  <div className="">
                                    <Input
                                      type="text"
                                      row="5"
                                      className="form-control"
                                      id="product-orders-input"
                                      name="taskName"
                                      aria-label="orders"
                                      ar
                                      ia-describedby="product-orders-addon"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.taskName}
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
                                    Task Types
                                  </label>
                                  <div className="">
                                    <select
                                      className="form-select"
                                      name="taskType"
                                      onBlur={handleBlur}
                                      value={values.taskType}
                                      onChange={handleChange}
                                    >
                                      <option value="">--select--</option>
                                      <option value="Form">Form</option>
                                      <option value="Data">Data</option>
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
                                    Access Location
                                  </label>
                                  <div className="">
                                    <select
                                      className="form-select"
                                      name="accessLocation"
                                      onBlur={handleBlur}
                                      value={values.accessLocation}
                                      onChange={handleChange}
                                    >
                                      <option value="">--select--</option>
                                      <option value="Yes">Yes</option>
                                      <option value="No">No</option>
                                    </select>
                                  </div>
                                  <p className="error text-danger">
                                    {errors.checkupType &&
                                      touched.checkupType &&
                                      errors.checkupType}
                                  </p>
                                </Col>

                                <Col sm={8}>
                                  <div>
                                    <Label
                                      htmlFor="exampleFormControlTextarea5"
                                      className="form-label"
                                    >
                                      Details
                                    </Label>
                                    <textarea
                                      className="form-control"
                                      id="exampleFormControlTextarea5"
                                      rows="4"
                                      name="detail"
                                      value={values.detail}
                                      onChange={handleChange}
                                    ></textarea>
                                  </div>
                                </Col>
                                <Col sm={2}>
                                  <div className="mt-3">
                                    <Input
                                      type="checkbox"
                                      id="isActive"
                                      label="Is Active"
                                      name="isActive"
                                      checked={values.isActive}
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

export default AddTask;

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

const AddCommunity = () => {
  const { GetallDepartmentGroup,GetallLocation,GetallDepartmentType } = useContext(SignContext);
 
  const [selectedMulti, setselectedMulti] = useState(null);
  const [selectedMulti1, setselectedMulti1] = useState(null);
  const [selectedMulti2, setselectedMulti2] = useState(null);
  const [selectedMulti3, setselectedMulti3] = useState(null);
  const [selectedMulti4, setselectedMulti4] = useState(null);
  const [dep, setdep] = useState(null);
  const [loc,setloc]=useState(null);
  const [dtype,setdtype]=useState(null);
  const [departmentype,setdepartmenttype]=useState([]);
  const [uniqueDepartmentTypes, setUniqueDepartmentTypes] = useState({});

  const uniqueValuesSet = new Set();
  const getdepgroup = async () => {
    const response = await GetallDepartmentGroup();

    const names = response.data.map((item) => ({
      value: item._id,
      label: item.name,
      id: item._id,
    }));
    setdep(names);
  };
  const getdeptype = async () => {
    const response = await GetallDepartmentType();
    //  console.log("res>>",response);
    const names = response.data.map((item) => ({
      value: item._id,
      label: item.name,
      id: item.departmentGroup._id,
    }));
    setdtype(names);
  };
  const getloc = async () => {
    const response = await GetallLocation();

    const names = response.data.map((item) => ({
      value: item._id,
      label: item.name,
      id: item._id,
    }));
    setloc(names);
  };
  function handleMulti(selectedMulti) {
    
    setselectedMulti(selectedMulti);
    let uniqueValuesSet = new Set();
    
    let uniqueDepartmentTypes=[];
    
    for (let i = 0; i < selectedMulti.length; i++) {
      
      const selectId=selectedMulti[i].id;
      
        for (let j = 0; j < dtype.length; j++) {
          const departtype=dtype[j];
          if ((departtype && departtype.id === selectId)) {
            
            let combinedkey=`${departtype.label}`;
            
            
            if (!uniqueValuesSet.has(departtype.label)) {
              combinedkey="";
              // uniqueIdsSet.add(departtype.id);
              uniqueDepartmentTypes.push({
                value: departtype.id,
                label: departtype.label,
                // id: departmentType.id,
              });
              
              setdepartmenttype(uniqueDepartmentTypes);
              // uniqueValuesSet.push(departtype.id,departtype.label)
            }
          }
          

         
        }
        
         console.log(uniqueValuesSet);
         console.log("vaishal>>>",departmentype)
      
    }
    setdepartmenttype(uniqueDepartmentTypes);
    
  }
   


  




  function handleMulti1(selectedMulti1) {
    setselectedMulti1(selectedMulti1);
    console.log(selectedMulti1);
  }
  function handleMulti2(selectedMulti2) {
    setselectedMulti2(selectedMulti2);
    console.log(selectedMulti2);
  }
   function handleMulti3(selectedMulti3) {
    setselectedMulti3(selectedMulti3);
    console.log(selectedMulti3);
  } 
  function handleMulti4(selectedMulti4) {
    setselectedMulti4(selectedMulti4);
    console.log(selectedMulti4);
  }
  useEffect(() => {
    getdepgroup();
    getloc();
    getdeptype();
  }, []);
  useEffect(() => {
    console.log(dep);
  }, [dep]);
  useEffect(() => {
    console.log("departmenttype>>",dtype);
  }, [dtype]);
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
                    // location:"",
                    // departmentGroup: "",
                    // departmentType: "",
                    // employeeRole: "",
                    // EmployeeAccess: "",
                  }
                }
                onSubmit={(values, { resetForm }) => {
                  //   addCheckupDetails(values);
                  // addCommunityName1(values);
                  // resetForm();
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
                      <form noValidate onSubmit={handleSubmit}>
                        <Card>
                          <CardHeader>
                            <Row className="g-1 m-1">
                              <Col className="col-sm">
                                <div className="d-flex justify-content-sm-between">
                                  <h2 className="card-title mb-0 justify-content-sm-start">
                                    <strong>Community Updates Details</strong>
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
                                    Community Updates Name
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
                                    Upload Image
                                  </label>
                                  <div className="">
                                    <Input
                                      className="form-control"
                                      type="file"
                                      id="formFile"
                                    />
                                  </div>

                                  <p className="error text-danger">
                                    {/* {errors.checkupNumber &&
                                      touched.checkupNumber &&
                                      errors.checkupNumber} */}
                                  </p>
                                </Col>
                                <Col sm={4}></Col>
                                <Col sm={12}>
                                  <div>
                                    <Label
                                      htmlFor="exampleFormControlTextarea5"
                                      className="form-label"
                                    >
                                      Community Updates Message
                                    </Label>
                                    <textarea
                                      className="form-control"
                                      id="exampleFormControlTextarea5"
                                      rows="4"
                                    ></textarea>
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

          {/* //second row */}
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
                                    <strong>
                                      Assign Community Updates Message
                                    </strong>
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
                                      value={selectedMulti2}
                                      isMulti={true}
                                      onChange={() => {
                                        handleMulti2();
                                      }}
                                      options={loc}
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
                                      onChange={(selectedOptions) => {
                                        handleMulti(selectedOptions);
                                      }}
                                      options={dep}
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
                                      value={selectedMulti1}
                                      isMulti={true}
                                      onChange={(selectedOptions) => {
                                        handleMulti1(selectedOptions);
                                      }}
                                      options={departmentype}
                                    />
                                  </div>
                                </Col>
                                <Col lg={4}>
                                  <div className="mb-3">
                                    <Label
                                      htmlFor="choices-multiple-default"
                                      className="form-label text-muted"
                                    >
                                      Employess Roles
                                    </Label>
                                    <Select
                                      value={selectedMulti3}
                                      isMulti={true}
                                      onChange={(selectedOptions) => {
                                        handleMulti3(selectedOptions);
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
                                      Employees Access
                                    </Label>
                                    <Select
                                      value={selectedMulti4}
                                      isMulti={true}
                                      onChange={(selectedOptions) => {
                                        handleMulti4(selectedOptions);
                                      }}
                                      options={SingleOptions}
                                    />
                                  </div>
                                </Col>
                                {/* <Col sm={4}></Col> */}
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

export default AddCommunity;
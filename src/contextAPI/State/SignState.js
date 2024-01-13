import axios from "axios";
import SignContext from "../Context/SignContext";
import React from "react";

export const SignState = (props) => {
  // const url = `http://localhost:5000`;
  const url = `${process.env.REACT_APP_BASE_URL}`;

  //Register User
  const registerUser = async (UserInfo) => {
    const formData = new FormData();
    try {
      console.log(formData);
      formData.append("name", UserInfo.name);
      formData.append("email", UserInfo.email);
      formData.append("password", UserInfo.password);
      formData.append("confirmPassword", UserInfo.confirmPassword);
      formData.append("roles", UserInfo.roles);
      formData.append("active", UserInfo.active);
      formData.append("photo", UserInfo.photo);

      const response = await axios.post(`${url}/api/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response;
    } catch (error) {
      console.error("Error during API call:", error);
    }
  };

  // try {
  //   if (UserInfo.password !== UserInfo.confirmPassword) {
  //     return {
  //       success: false,
  //       msg: "Password and confirm password do not match",
  //     };
  //   }
  //   const response = await axios.post(`${url}/api/register`, UserInfo);
  //   return response;
  // } catch (error) {
  //   return ({ success: false, msg: "server Error" })
  // }

  //Login User
  const loginUser = async (UserInfo) => {
    try {
      const response = await axios.post(`${url}/api/login`, UserInfo);
      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  //Forgot Password
  const forgotPassword = async (UserInfo) => {
    try {
      const response = await axios.post(`${url}/api/forgotpassword`, UserInfo);

      return response;
    } catch (error) {
      return { success: false, msg: "server Error" };
    }
  };

  //Reset Password
  const resetPassword = async (resetToken, password) => {
    try {
      const response = await axios.put(
        `${url}/api/users/resetpassword/${resetToken}`,
        { password: password }
      );
      return response.data;
    } catch (error) {
      return { success: false, msg: "server Error" };
    }
  };

  // Update Password
  const changePassword = async (UserInfo, Token) => {
    try {
      const response = await axios.post(`${url}/api/updatepassword`, {
        ...UserInfo,
        token: Token,
      });
      return response;
    } catch (error) {
      return { success: false, msg: "server Error" };
    }
  };

  // Get LoggedInUser
  const getLoggedInUser = async (Token) => {
    try {
      const response = await axios.post(`${url}/api/getloggedinuser`, {
        token: Token,
      });
      return response;
    } catch (error) {
      console.error("Error during API call:", error);
    }
  };

  // Get Specific user
  const getSpecificUser = async (id, role) => {
    try {
      const response = await axios.post(`${url}/api/getspecificuser`, {
        id: id,
        roles: [role],
      });
      return response;
    } catch (error) {
      console.error("Error during API call:", error);
    }
  };

  // GetUsers
  const getUsers = async () => {
    try {
      const response = await axios.post(`${url}/api/getusers`);
      return response;
    } catch (error) {
      return { success: false, msg: "server Error" };
    }
  };

  // Update User
  const updateUser = async (userInfo, photo) => {
    try {
      const formData = new FormData();
      formData.append("name", userInfo.name);
      formData.append("roles", userInfo.roles);
      formData.append("active", userInfo.active);
      formData.append("id", userInfo._id);
      if (photo) {
        formData.append("photo", photo);
      }

      const response = await axios.post(`${url}/api/updateuser`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response;
    } catch (error) {
      console.error("Error during API call:", error);
    }
  };

  // delete user
  const deleteUser = async (userId) => {
    try {
      const response = await axios.post(`${url}/api/deleteuser`, {
        id: userId,
      });
      return response;
    } catch (error) {
      return { success: false, msg: "server Error" };
    }
  };

  // Get roles
  const GetRoles = async () => {
    try {
      const response = await axios.post(`${url}/api/getroles`, {});
      return response;
    } catch (error) {
      return { success: false, msg: "server Error" };
    }
  };

  // GetrolesSpecificpermissions
  const GetRoleSpecificPermission = async (role) => {
    try {
      const response = await axios.post(`${url}/api/getrolespecificpermisson`, {
        role: role,
      });
      return response.data;
    } catch (error) {
      return { success: false, msg: "server Error" };
    }
  };

  // integration by vaishal

  //opa integration begins.........

  const addDepGroup = async (depGrpData) => {
    try {
      const response = await axios.post(
        `${url}/departmentgroup/adddepartmentgroup`,
        depGrpData
      );
      return response;
    } catch (error) {
      return { success: false, msg: "server Error" };
    }
  };
  const addDepType = async (depGrpData) => {
    try {
      const response = await axios.post(
        `${url}/departmenttype/adddepartmenttype`,
        depGrpData
      );
      return response;
    } catch (error) {
      return { success: false, msg: "server Error" };
    }
  };
  const deletegrp = async (id) => {
    try {
      const response = await axios.post(
        `${url}/departmentgroup/deletedepartmentgroup/${id}`
      );
      return response;
    } catch (error) {
      return { success: false, msg: "server Error" };
    }
  };

  const deletetype = async (id) => {
    try {
      const response = await axios.post(
        `${url}/departmenttype/deletedepartmenttype/${id}`
      );
      return response;
    } catch (error) {
      return { success: false, msg: "server Error" };
    }
  };
  const addLocation = async (depGrpData) => {
    try {
      const response = await axios.post(
        `${url}/location/addlocation`,
        depGrpData
      );
      return response;
    } catch (error) {
      return { success: false, msg: "server Error" };
    }
  };

  const addEmployeeRole = async (depGrpData) => {
    try {
      const response = await axios.post(
        `${url}/employeerole/adddemployeerole`,
        depGrpData
      );
      return response;
    } catch (error) {
      return { success: false, msg: "server Error" };
    }
  };

  const GetallDepartmentGroup = async () => {
    try {
      const response = await axios.get(
        `${url}/departmentgroup/getdepartments`,
        {}
      );
      return response;
    } catch (error) {
      return { success: false, msg: "server Error" };
    }
  };
  const GetallDepartmentType = async () => {
    try {
      const response = await axios.get(
        `${url}/departmenttype/getdepartmentstypes`,
        {}
      );
      return response;
    } catch (error) {
      return { success: false, msg: "server Error" };
    }
  };

  const GetDepTypeById = async (id) => {
    try {
      const response = await axios.get(
        `${url}/departmenttype/departmenttypebygroup/${id}`,
        {}
      );
      return response;
    } catch (error) {
      console.error("Error during API call:", error);
    }
  };

  const GetDepTypeByIdForEditing = async (id) => {
    try {
      const response = await axios.get(
        `${url}/departmenttype/getdepartmenttypebyid/${id}`,
        {}
      );
      return response;
    } catch (error) {
      console.error("Error during API call:", error);
    }
  };
  const GetEmployeeRoleByIdForEditing = async (id) => {
    try {
      const response = await axios.get(
        `${url}/employeerole/getemployeerolebyid/${id}`,
        {}
      );
      return response;
    } catch (error) {
      console.error("Error during API call:", error);
    }
  };
  const EditDepGrp = async (id) => {
    try {
      const response = await axios.post(
        `${url}/departmentgroup/getdepartmentbyid/${id}`
      );
      return response;
    } catch (error) {
      console.error("Error during API call:", error);
    }
  };

  const setEditDepGrpValues = async (id, name, isActive) => {
    try {
      const response = await axios.post(
        `${url}/departmentgroup/editdepartmentgroup/${id}`,
        { name, isActive }
      );
      return response;
    } catch (error) {
      console.error("Error during API call:", error);
    }
  };

  const setEditLocationValues = async (id, name, isActive) => {
    try {
      const response = await axios.post(
        `${url}/location/editlocation/${id}`,
        { name, isActive }
      );
      return response;
    } catch (error) {
      console.error("Error during API call:", error);
    }
  };
  const setEditDepTypeValues = async (id, departmentGroup, name, isActive) => {
    try {
      const response = await axios.post(
        `${url}/departmenttype/editdepartmenttype/${id}`,
        { departmentGroup, name, isActive }
      );
      return response;
    } catch (error) {
      console.error("Error during API call:", error);
    }
  };
  const setEditEmployeeRoleValues = async (id, departmentGroup, departmentType,EmployeeRole ,isActive) => {
    try {
      const response = await axios.post(
        `${url}/employeerole/editemployeerole/${id}`,
        { departmentGroup, departmentType,EmployeeRole ,isActive }
      );
      return response;
    } catch (error) {
      console.error("Error during API call:", error);
    }
  };
  const GetallEmployeeRole = async () => {
    try {
      const response = await axios.get(
        `${url}/employeerole/getemployeeroles`,
        {}
      );
      return response;
    } catch (error) {
      return { success: false, msg: "server Error" };
    }
  };

  const GetallLocation = async () => {
    try {
      const response = await axios.get(`${url}/location/getlocations`, {});
      return response;
    } catch (error) {
      return { success: false, msg: "server Error" };
    }
  };
  const DeleteLocation = async (id) => {
    try {
      const response = await axios.post(
        `${url}/location/deletelocationbyid/${id}`,
        {}
      );
      return response;
    } catch (error) {
      return { success: false, msg: "server Error" };
    }
  };
  const DeleteEmployeeRole = async (id) => {
    try {
      const response = await axios.post(
        `${url}/employeerole/deleteemployerole/${id}`,
        {}
      );
      return response;
    } catch (error) {
      return { success: false, msg: "server Error" };
    }
  };
  const GetLocationById=async(id)=>{
    try {
      const response = await axios.post(
        `${url}/location/getlocationbyid/${id}`,
        {}
      );
      return response;
    } catch (error) {
      return { success: false, msg: "server Error" };
    }
  }
  return (
    <SignContext.Provider
      value={{
        registerUser,
        loginUser,
        forgotPassword,
        resetPassword,
        changePassword,
        getLoggedInUser,
        getSpecificUser,
        getUsers,
        updateUser,
        deleteUser,
        GetRoles,
        GetRoleSpecificPermission,
        addDepGroup,
        GetallDepartmentGroup,
        addDepType,
        GetDepTypeById,
        addEmployeeRole,
        addLocation,
        deletegrp,
        GetallDepartmentType,
        deletetype,
        EditDepGrp,
        setEditDepGrpValues,
        GetDepTypeByIdForEditing,
        setEditDepTypeValues,
        GetallEmployeeRole,
        GetallLocation,
        DeleteLocation,
        GetLocationById,
        setEditLocationValues,
        DeleteEmployeeRole,
        GetEmployeeRoleByIdForEditing,
        setEditEmployeeRoleValues
      }}
    >
      {props.children}
    </SignContext.Provider>
  );
};

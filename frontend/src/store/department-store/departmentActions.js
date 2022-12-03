import DepartmentAPI from "../api/departmentApi";
import ActionTypes from "./departmentTypes";

export const addDepartment = (department) => {
  return {
    type: ActionTypes.ADD_DEPARTMENT,
    payload: DepartmentAPI.addDepartment(department),
  };
};

export const getAllDepartments = () => {
  return {
    type: ActionTypes.GET_DEPARTMENTS,
    payload: DepartmentAPI.getAllDepartments(),
  };
};

export const getDepartmentById = (departmentID) => {
  return {
    type: ActionTypes.GET_DEPARTMENT,
    payload: DepartmentAPI.getDepartmentById(departmentID),
  };
};

export const updateDepartmentById = (department) => {
  return {
    type: ActionTypes.UPDATE_DEPARTMENT,
    payload: DepartmentAPI.updateDepartmentById(department),
  };
};

export const deleteDepartmentByID = (departmentID) => {
  return {
    type: ActionTypes.DELETE_DEPARTMENT,
    payload: DepartmentAPI.deleteDepartmentByID(departmentID),
  };
};
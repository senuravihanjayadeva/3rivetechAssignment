import EmployeeAPI from "../api/employeeApi";
import ActionTypes from "./employeeTypes";

export const addEmployee = (employee) => {
  return {
    type: ActionTypes.ADD_EMPLOYEE,
    payload: EmployeeAPI.addEmployee(employee),
  };
};

export const getAllEmployee = () => {
  return {
    type: ActionTypes.GET_EMPLOYEES,
    payload: EmployeeAPI.getAllEmployee(),
  };
};

export const getEmployeeById = (employeeID) => {
  return {
    type: ActionTypes.GET_EMPLOYEE,
    payload: EmployeeAPI.getEmployeeById(employeeID),
  };
};

export const updateEmployeeById = (employee) => {
  return {
    type: ActionTypes.UPDATE_EMPLOYEE,
    payload: EmployeeAPI.updateEmployeeById(employee),
  };
};

export const deleteEmployeeByID = (employeeID) => {
  return {
    type: ActionTypes.DELETE_EMPLOYEE,
    payload: EmployeeAPI.deleteEmployeeByID(employeeID),
  };
};
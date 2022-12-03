import axios from "axios";

const BASE_URL = process.env.REACT_APP_BACKEND_API;

class EmployeeAPI {
  static addEmployee(employee) {
    return axios.post(`${BASE_URL}/api/employee/`, employee);
  }

  static getAllEmployee() {
    return axios.get(`${BASE_URL}/api/employee/`);
  }

  static getEmployeeById(employeeID) {
    return axios.get(`${BASE_URL}/api/employee/${employeeID}`);
  }

  static updateEmployeeById(employee) {
    return axios.put(`${BASE_URL}/api/employee/`, employee);
  }

  static deleteEmployeeByID(employeeID) {
    return axios.delete(`${BASE_URL}/api/employee/${employeeID}`).then(()=>{
      return employeeID;
    });
  }
}

export default EmployeeAPI;

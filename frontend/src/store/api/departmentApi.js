import axios from "axios";

const BASE_URL = process.env.REACT_APP_BACKEND_API;

class DepartmentAPI {
  static addDepartment(department) {
    return axios.post(`${BASE_URL}/api/department/`, department);
  }

  static getAllDepartments() {
    return axios.get(`${BASE_URL}/api/department/`);
  }

  static getDepartmentById(departmentID) {
    return axios.get(`${BASE_URL}/api/department/${departmentID}`);
  }

  static updateDepartmentById(department) {
    return axios.put(`${BASE_URL}/api/department/`,department);
  }

  static deleteDepartmentByID(departmentID) {
    return axios.get(`${BASE_URL}/api/department/${departmentID}`);
  }
}

export default DepartmentAPI;

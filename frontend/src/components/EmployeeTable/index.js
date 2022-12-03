import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllEmployee,
  deleteEmployeeByID,
  getEmployeeById
} from "../../store/employee-store/employeeActions";
import EmployeeEditModal from "../EmployeeEditModal";

const EmployeeTable = () => {
  const dispatch = useDispatch();
  const employeeState = useSelector((state) => state.employeeReducer);

  useEffect(() => {
    if (!employeeState.employees.length) {
      dispatch(getAllEmployee());
    }
  }, [employeeState.employees]);

  const onClickDelete = (employeeID) => {
    dispatch(deleteEmployeeByID(employeeID));
  };

  const onClickGetEmployeeById = (employeeID) => {
    dispatch(getEmployeeById(employeeID));
  }

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Employee ID</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {employeeState.employees.length &&
            employeeState.employees.map((employee, index) => {
              return (
                <tr key={employee.employeeID}>
                  <th scope="row">{++index}</th>
                  <td>{employee.employeeID}</td>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      onClick={()=>{
                        onClickGetEmployeeById(employee.employeeID)
                      }}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        onClickDelete(employee.employeeID);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <EmployeeEditModal />
      </div>
    </>
  );
};

export default EmployeeTable;

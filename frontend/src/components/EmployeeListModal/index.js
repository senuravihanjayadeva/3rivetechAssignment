import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const EmployeeListModal = () => {
  const departmentState = useSelector((state) => state.departmentReducer);
  const [employees, setEmployees] = useState("");

  useEffect(() => {
    if (departmentState.department) {
      setEmployees(departmentState.department.employees);
    }
  }, [departmentState.department]);

  return (
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Employee List
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div className="modal-body">
          <div className="mb-3">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Employee ID</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                </tr>
              </thead>
              <tbody>
                {employees.length &&
                  employees.map((employee, index) => {
                    return (
                      <tr key={employee.employeeID}>
                        <th scope="row">{++index}</th>
                        <td>{employee.employeeID}</td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeListModal;

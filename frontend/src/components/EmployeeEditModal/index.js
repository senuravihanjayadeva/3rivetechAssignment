import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateEmployeeById } from "../../store/employee-store/employeeActions";

const EmployeeEditModal = () => {
  const dispatch = useDispatch();
  const employeeState = useSelector((state) => state.employeeReducer);
  const [employeeID, setEmployeeID] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(()=>{
    if(employeeState.employee){
      setEmployeeID(employeeState.employee.employeeID);
      setFirstName(employeeState.employee.firstName);
      setLastName(employeeState.employee.lastName);
    }
  },[employeeState.employee]);

  const onClickUpdateEmployee = () => {
    const employee = {
      employeeID,
      firstName,
      lastName
    };
    dispatch(updateEmployeeById(employee));
    alert("Employee Updated")
  };

  return (
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Edit Employee
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
            <label htmlFor="inputEmployeeId" className="form-label">
              Employee ID
            </label>
            <input
              type="text"
              className="form-control"
              id="inputEmployeeId"
              value={employeeID}
              onChange={(e) => {
                setEmployeeID(e.target.value);
              }}
              readOnly
            />
          </div>
          <div className="mb-3">
            <label htmlFor="inputFirstName" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="inputFirstName"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="inputLastName" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="inputLastName"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
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
          <button type="button" className="btn btn-primary" onClick={onClickUpdateEmployee}>
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeEditModal;

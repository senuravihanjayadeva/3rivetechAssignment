import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateDepartmentById } from "../../store/department-store/departmentActions";

const DeapartmentEditModal = () => {
  const dispatch = useDispatch();
  const departmentState = useSelector((state) => state.departmentReducer);
  const [departmentID, setDepartmentID] = useState("");
  const [name, setName] = useState("");
  const [employees, setEmployees] = useState("");

  useEffect(()=>{
    if(departmentState.department){
      setDepartmentID(departmentState.department.departmentID);
      setName(departmentState.department.name);
      setEmployees(departmentState.department.employees);
    }
  },[departmentState.department]);

  const onClickUpdateDepartment = () => {
    const department = {
      departmentID,
      name,
      employees
    };
    dispatch(updateDepartmentById(department));
    alert("Department Updated")
  };

  return (
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Edit Department
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
            <label htmlFor="inputDepartmentId" className="form-label">
              Department ID
            </label>
            <input
              type="text"
              className="form-control"
              id="inputDepartmentId"
              value={departmentID}
              onChange={(e) => {
                setDepartmentID(e.target.value);
              }}
              readOnly
            />
          </div>
          <div className="mb-3">
            <label htmlFor="inputDepartmentName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="inputDepartmentName"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
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
          <button type="button" className="btn btn-primary" onClick={onClickUpdateDepartment}>
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeapartmentEditModal;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEmployee } from "../../store/employee-store/employeeActions";
import { getAllDepartments } from "../../store/department-store/departmentActions";

const EmployeeForm = () => {
  const dispatch = useDispatch();
  const departmentState = useSelector((state) => state.departmentReducer);
  const [employeeID, setEmployeeID] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [departmentID, setDepartmentID] = useState("");

  useEffect(()=>{
    dispatch(getAllDepartments());
  },[])

  const onClickAddEmployee = () => {
    const employee = {
      employeeID,
      firstName,
      lastName,
      department: {
        departmentID
      }
    };
    dispatch(addEmployee(employee));
    setEmployeeID("");
    setFirstName("");
    setLastName("");
  };

  return (
    <div>
      <div>
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
        <div className="mb-3">
          <select class="form-select" aria-label="Default select example" onChange={(e) => {
              setDepartmentID(e.target.value);
            }}>
            <option selected>Open this select Department</option>
            {departmentState.departments && departmentState.departments.map((department)=>{
              return (
                <option value={department.departmentID}>{department.name}</option>
              )
            })}
          </select>
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={onClickAddEmployee}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default EmployeeForm;

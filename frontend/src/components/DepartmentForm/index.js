import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addDepartment } from "../../store/department-store/departmentActions";

const DepartmentForm = () => {
  const dispatch = useDispatch();
  const [departmentID, setDepartmentID] = useState("");
  const [name, setName] = useState("");

  const onClickAddDepartment = () => {
    const department = {
      departmentID,
      name,
    };
    dispatch(addDepartment(department));
    setDepartmentID("");
    setName("");
  };

  return (
    <div>
      <div>
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
        <button
          type="submit"
          className="btn btn-primary"
          onClick={onClickAddDepartment}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default DepartmentForm;

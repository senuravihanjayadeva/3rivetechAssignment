import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllDepartments,
  deleteDepartmentByID,
} from "../../store/department-store/departmentActions";

const DepartmentTable = () => {
  const dispatch = useDispatch();
  const departmentState = useSelector((state) => state.departmentReducer);

  useEffect(() => {
    if (!departmentState.departments.length) {
      dispatch(getAllDepartments());
    }
  }, departmentState.departments);

  const onClickDelete = (departmentID) => {
    dispatch(deleteDepartmentByID(departmentID));
  };

  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Department ID</th>
          <th scope="col">Department Name</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {departmentState.departments.length &&
          departmentState.departments.map((department, index) => {
            return (
              <tr>
                <th scope="row">{++index}</th>
                <td>{department.departmentID}</td>
                <td>{department.name}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      onClickDelete(department.departmentID);
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
  );
};

export default DepartmentTable;

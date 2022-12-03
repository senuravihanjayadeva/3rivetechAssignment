import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllDepartments,
  deleteDepartmentByID,
  getDepartmentById
} from "../../store/department-store/departmentActions";
import DeapartmentEditModal from "../DepartmentEditModal";

const DepartmentTable = () => {
  const dispatch = useDispatch();
  const departmentState = useSelector((state) => state.departmentReducer);

  useEffect(() => {
    if (!departmentState.departments.length) {
      dispatch(getAllDepartments());
    }
  }, [departmentState.departments]);

  const onClickDelete = (departmentID) => {
    dispatch(deleteDepartmentByID(departmentID));
  };

  const onClickGetDepartmentById = (departmentID) => {
    dispatch(getDepartmentById(departmentID));
  }

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Department ID</th>
            <th scope="col">Department Name</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {departmentState.departments.length &&
            departmentState.departments.map((department, index) => {
              return (
                <tr key={department.departmentID}>
                  <th scope="row">{++index}</th>
                  <td>{department.departmentID}</td>
                  <td>{department.name}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      onClick={()=>{
                        onClickGetDepartmentById(department.departmentID)
                      }}
                    >
                      Edit
                    </button>
                  </td>
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
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <DeapartmentEditModal />
      </div>
    </>
  );
};

export default DepartmentTable;

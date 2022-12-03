import React from "react";
import { DepartmentForm, DepartmentTable } from "../../components";
const DepartmentComponent = () => {
  return (
    <div className="p-5">
      <h1 className="text-center">Departments</h1>
      <div className="row">
        <div className="col-4">
          <DepartmentForm/>
        </div>
        <div className="col-8">
          <DepartmentTable/>
        </div>
      </div>
    </div>
  );
};

export default DepartmentComponent;

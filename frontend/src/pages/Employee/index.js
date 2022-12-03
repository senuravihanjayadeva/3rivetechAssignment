import React from "react";
import {EmployeeForm, EmployeeTable} from "../../components";

const EmployeeComponent = () => {
  return (
    <div className="p-5">
      <h1 className="text-center">Employees</h1>
      <div className="row">
        <div className="col-4">
          <EmployeeForm/>
        </div>
        <div className="col-8">
          <EmployeeTable/>
        </div>
      </div>
    </div>
  );
};

export default EmployeeComponent;

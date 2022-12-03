import { combineReducers } from "redux";
import departmentReducer from "./department-store/departmentReducer";
import employeeReducer from "./employee-store/employeeReducer";

const reducers = combineReducers({
  departmentReducer,
  employeeReducer,
});

export default reducers;

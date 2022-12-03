import ActionTypes from "./employeeTypes";

const initialState = {
  employee: null,
  employees: [],
  updatedEmployee: null,
  loading: false,
  error: null,
};

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${ActionTypes.ADD_EMPLOYEE}_PENDING`:
      return { ...state, loading: true };
    case `${ActionTypes.GET_EMPLOYEES}_PENDING`:
      return { ...state, loading: true };
    case `${ActionTypes.GET_EMPLOYEE}_PENDING`:
      return { ...state, loading: true };
    case `${ActionTypes.UPDATE_EMPLOYEE}_PENDING`:
      return { ...state, loading: true };
    case `${ActionTypes.DELETE_EMPLOYEE}_PENDING`:
      return { ...state, loading: true };

    case `${ActionTypes.ADD_EMPLOYEE}_FULFILLED`:
      return {
        ...state,
        loading: false,
        employee: action.payload.data,
        employees: [...state.employees, action.payload.data],
      };
    case `${ActionTypes.GET_EMPLOYEE}_FULFILLED`:
      return { ...state, loading: false, employee: action.payload.data };
    case `${ActionTypes.GET_EMPLOYEES}_FULFILLED`:
      return { ...state, loading: false, employees: action.payload.data };
    case `${ActionTypes.UPDATE_EMPLOYEE}_FULFILLED`:
      return {
        ...state,
        loading: false,
        updatedEmployee: action.payload.data,
        employees: state.employees.map((x) =>
          x.employeeID === action.payload.data.employeeID ? action.payload.data : x
        ),
      };
    case `${ActionTypes.DELETE_EMPLOYEE}_FULFILLED`:
      return {
        ...state,
        loading: false,
        employees: state.employees.filter(
          (x) => x.employeeID !== action.payload
        ),
      };

    case `${ActionTypes.ADD_EMPLOYEE}_REJECTED`:
    case `${ActionTypes.GET_EMPLOYEE}_REJECTED`:
    case `${ActionTypes.GET_EMPLOYEES}_REJECTED`:
    case `${ActionTypes.UPDATE_EMPLOYEE}_REJECTED`:
    case `${ActionTypes.DELETE_EMPLOYEE}_REJECTED`:
      return {
        ...state,
        loading: false,
        error: action.payload.response.data,
        state: initialState,
      };

    default:
      return state;
  }
};

export default employeeReducer;

import ActionTypes from "./departmentTypes";

const initialState = {
  department: null,
  departments: [],
  updatedDepartment: null,
  loading: false,
  error: null,
};

const departmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${ActionTypes.ADD_DEPARTMENT}_PENDING`:
      return { ...state, loading: true };
    case `${ActionTypes.GET_DEPARTMENTS}_PENDING`:
      return { ...state, loading: true };
    case `${ActionTypes.GET_DEPARTMENT}_PENDING`:
      return { ...state, loading: true };
    case `${ActionTypes.UPDATE_DEPARTMENT}_PENDING`:
      return { ...state, loading: true };
    case `${ActionTypes.DELETE_DEPARTMENT}_PENDING`:
      return { ...state, loading: true };

    case `${ActionTypes.ADD_DEPARTMENT}_FULFILLED`:
      return {
        ...state,
        loading: false,
        department: action.payload.data,
        departments: [...state.departments, action.payload.data],
      };
    case `${ActionTypes.GET_DEPARTMENT}_FULFILLED`:
      return { ...state, loading: false, department: action.payload.data };
    case `${ActionTypes.GET_DEPARTMENTS}_FULFILLED`:
      return { ...state, loading: false, departments: action.payload.data };
    case `${ActionTypes.UPDATE_DEPARTMENT}_FULFILLED`:
      return {
        ...state,
        loading: false,
        updatedDepartment: action.payload,
        departments: state.departments.map((x) =>
          x.departmentID === action.payload.departmentID ? action.payload : x
        ),
      };
    case `${ActionTypes.DELETE_DEPARTMENT}_FULFILLED`:
      console.log(action.payload)
      return {
        ...state,
        loading: false,
        departments: state.departments.filter(
          (x) => x.departmentID !== action.payload
        ),
      };

    case `${ActionTypes.ADD_DEPARTMENT}_REJECTED`:
    case `${ActionTypes.GET_DEPARTMENT}_REJECTED`:
    case `${ActionTypes.GET_DEPARTMENTS}_REJECTED`:
    case `${ActionTypes.UPDATE_DEPARTMENT}_REJECTED`:
    case `${ActionTypes.DELETE_DEPARTMENT}_REJECTED`:
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

export default departmentReducer;

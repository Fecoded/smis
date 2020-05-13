import {
  USER_LOADED,
  STAFF_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  STAFF_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from '../action/types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };
    case STAFF_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem('token', payload);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };
    case STAFF_SUCCESS:
      localStorage.setItem('token', payload);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        loading: false,
      };
    default:
      return state;
  }
}

import { calendarApi } from '../__fake-api__/calendar-api';
import { slice } from '../slices/user';

export const getUser = () => async (dispatch) => {
  dispatch(slice.actions.getUser());
};

export const createUser = (params) => async (dispatch) => {
  console.log("dispacth",params, dispatch);
  dispatch(slice.actions.createUser(params));
};

export const updateUser = (params) => async (dispatch) => {

  dispatch(slice.actions.updateUser(params));
};

export const deleteUser = (params) => async (dispatch) => {
  dispatch(slice.actions.deleteUser(params));
};

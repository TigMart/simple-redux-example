import { loadUser } from "./userAPI";

export const userReducer = (state = {}, action) => {
  if (action.type === "edit-user-name") {
    return {
      ...state,
      name: action.payload.name,
    };
  }
  return state;
};

export const iniialUser = {
  name: "John Smith",
};

export const getUser = (state) => {
  return state.user.name;
};

export const editUser = (newName) => {
  return {
    type: "edit-user-name",
    payload: {
      name: newName,
    },
  };
};

export function loadUserThunk() {
  return (dispatch, getState) => {
    return loadUser().then((loadedUser) => {
      dispatch(editUser(loadedUser.name));
    });
  };
}

import { USER_LOGIN } from "../actions/Types";

const initialState = {
  user: null,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default UserReducer;

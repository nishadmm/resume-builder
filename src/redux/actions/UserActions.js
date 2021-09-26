import { USER_LOGIN } from "./Types";

// Set User
export const setCurrentUser = (user) => {
  return { type: USER_LOGIN, payload: user };
};

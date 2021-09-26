import { combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";
import UserReducer from "./UserReducer";
import FormReducers from "./FormReducers";

export default combineReducers({
  form: reduxFormReducer,
  user: UserReducer,
  formData: FormReducers,
});

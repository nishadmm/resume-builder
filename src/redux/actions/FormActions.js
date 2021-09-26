import {
  SUBMIT_FORM,
  SET_SHOW_SKILL_INPUT,
  ADD_NEW_SKILL,
  LOGS_ERROR,
  ADD_RESUME_DATA,
  SHOW_ALERT_MESSAGE,
} from "./Types";
import { getUserResumeFromDB } from "../../firebase/Firebase.utilis";

// Submit Resume Form -  Resume Data Stored to FireStore
export const submitForm = (values, userID) => async (dispatch) => {
  try {
    const resumeDataFromDB = await getUserResumeFromDB(values, userID);
    resumeDataFromDB.onSnapshot((snapshot) => {
      dispatch({ type: SUBMIT_FORM, payload: snapshot.data() });
    });
  } catch (error) {
    dispatch({ type: LOGS_ERROR, payload: error });
  }
};

// Set Skill Input Showing
export const setShowSkillInput = (value) => {
  return { type: SET_SHOW_SKILL_INPUT, payload: value };
};

// Handle Add Skill
export const addNewSkill = (skill) => {
  return { type: ADD_NEW_SKILL, payload: skill };
};

// Add Resume data from FireStore
export const addResumeData = (userID) => async (dispatch) => {
  try {
    const resumeDataFromDB = await getUserResumeFromDB(null, userID);
    resumeDataFromDB.onSnapshot((snapshot) => {
      dispatch({ type: ADD_RESUME_DATA, payload: snapshot.data() });
    });
  } catch (error) {
    dispatch({ type: LOGS_ERROR, payload: error });
  }
};

// Handle Add Skill
export const showAlertMessage = (message) => {
  return { type: SHOW_ALERT_MESSAGE, payload: message };
};

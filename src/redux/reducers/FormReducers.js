import {
  SUBMIT_FORM,
  SET_SHOW_SKILL_INPUT,
  ADD_NEW_SKILL,
  LOGS_ERROR,
  ADD_RESUME_DATA,
  SHOW_ALERT_MESSAGE,
} from "../actions/Types";

const initialState = {
  showResume: false,
  skills: [],
  showSkillInput: false,
  resumeData: null,
  error: null,
  alertMessage: null,
  skillsOptions: [
    "PHP",
    "Javascript",
    "React",
    "Python",
    "Java",
    "C++",
    "Degital Marketing",
    "Accounting",
    "Driving",
    "Leadership",
    "Problem solving",
    "Project management",
    "PhotoShop",
    "NodeJs",
    "ExpressJs",
    "Django",
    "Flask",
    "React Native",
    "VueJS",
    "Angular",
    "NextJs",
  ],
};

const FormReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_FORM: //Resume Form Submission
      return {
        ...state,
        resumeData: action.payload,
      };
    case SET_SHOW_SKILL_INPUT: // Skill Add input Open & Close
      return {
        ...state,
        showSkillInput: action.payload,
      };
    case ADD_NEW_SKILL: // Add new Skil
      return {
        ...state,
        skills: [...state.skills, action.payload],
      };
    case LOGS_ERROR: // Error Logs
      return {
        ...state,
        error: action.payload,
      };
    case ADD_RESUME_DATA: // Add Resume Data
      return {
        ...state,
        resumeData: action.payload,
      };
    case SHOW_ALERT_MESSAGE: // Show alert message
      return {
        ...state,
        alertMessage: action.payload,
      };
    default:
      return state;
  }
};

export default FormReducer;

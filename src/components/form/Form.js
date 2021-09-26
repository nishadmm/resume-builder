import React from "react";
import { reduxForm } from "redux-form";

import Header from "../Header";
import InitialInformationInputs from "./InitialInformationInputs";
import EducationInputContainer from "./EducationInputContainer";
import ExperienceInputContainer from "./ExperienceInputContainer";
import SkillsContainer from "./SkillsContainer";
import FormButtons from "./FormButtons";

const Form = (props) => {
  const { pristine, reset, submitting } = props;

  return (
    <>
      <Header />
      <form className="container p-5">
        <InitialInformationInputs />
        <EducationInputContainer />
        <hr />
        <ExperienceInputContainer />
        <SkillsContainer />
        <FormButtons
          reset={reset}
          pristine={pristine}
          submitting={submitting}
        />
      </form>
    </>
  );
};

export default reduxForm({
  form: "resumeForm", // a unique identifier for this form
})(Form);

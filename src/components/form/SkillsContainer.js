import React from "react";
import { connect } from "react-redux";
import {
  setShowSkillInput,
  addNewSkill,
} from "../../redux/actions/FormActions";
import Skills from "./Skills";
import AddSkillInput from "./AddSkillInput";

const SkillsContainer = ({ formData, setShowSkillInput, addNewSkill }) => {
  const { skills, showSkillInput } = formData;

  return (
    <div>
      <Skills skills={skills} />
      {!showSkillInput ? (
        <button
          type="button"
          onClick={() => setShowSkillInput(true)}
          className="btn btn-dark text-light d-block mt-1"
        >
          <i className="fas fa-plus-circle"></i> Add Skill
        </button>
      ) : (
        // Input For Add Skill
        <AddSkillInput
          setShowSkillInput={setShowSkillInput}
          addNewSkill={addNewSkill}
        />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  formData: state.formData,
});

export default connect(mapStateToProps, { setShowSkillInput, addNewSkill })(
  SkillsContainer
);

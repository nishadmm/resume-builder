import React from "react";
import { connect } from "react-redux";
import { Field } from "redux-form";

const AddSkillInput = ({ formData, form, setShowSkillInput, addNewSkill }) => {
  const { skillsOptions } = formData;

  // Add Skill
  const handleAddSkill = () => {
    setShowSkillInput(false);
    const typedSkill = form && form.resumeForm.values.user_skill;
    addNewSkill(typedSkill);
  };

  // Function for close Skill Input when click outside
  const onClickOutsideListener = () => {
    document.removeEventListener("click", onClickOutsideListener);
    setShowSkillInput(false);
  };

  return (
    <div
      className="row"
      onMouseLeave={() => {
        document.addEventListener("click", onClickOutsideListener);
      }}
    >
      <Field
        component="input"
        list="skills"
        name="user_skill"
        className="form-control col-4 m-2"
        placeholder="Add skill like PHP, Javascript "
        autoFocus={true}
      />
      <datalist id="skills">
        {skillsOptions.map((skill, index) => (
          <option value={skill} key={index} />
        ))}
      </datalist>
      <a
        href="#!"
        className="btn btn-primary d-block my-2"
        onClick={handleAddSkill}
        style={{
          borderRadius: "50%",
          width: "40px",
          height: "40px",
        }}
      >
        <i className="fas fa-sign-in-alt"></i>
      </a>
    </div>
  );
};

const mapStateToProps = (state) => ({
  formData: state.formData,
  form: state.form,
});

export default connect(mapStateToProps, null)(AddSkillInput);

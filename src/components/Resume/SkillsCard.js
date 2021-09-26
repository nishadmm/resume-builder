import React from "react";
import { connect } from "react-redux";

const SkillsCard = ({ skills }) => {
  return (
    <div className="text-danger bg-light rounded p-2">
      <h6>Skills</h6>
      {skills.map((skill, index) => (
        <li key={index} className="mb-1 ml-5">
          {skill}
        </li>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  skills: state.formData.resumeData.skills,
});

export default connect(mapStateToProps, null)(SkillsCard);

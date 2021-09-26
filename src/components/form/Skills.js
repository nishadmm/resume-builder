import React from "react";

const Skills = ({ skills }) => {
  return (
    <>
      {skills.length ? (
        // Mapping Skills
        skills.map((skill, index) => (
          <p
            className="badge badge-dark badge-pill text-primary border border-primary m-1"
            style={{ backgroundColor: "rgb(208, 255, 247)", fontSize: "16px" }}
            key={index}
          >
            {skill}
          </p>
        ))
      ) : (
        <>
          {/* Show Sample Skill Badge */}
          {Array(2)
            .fill()
            .map((_, i) => (
              <p
                key={i}
                className="badge badge-dark badge-pill  m-1 skill-sample"
              >
                skill {i + 1}
              </p>
            ))}
        </>
      )}
    </>
  );
};

export default Skills;

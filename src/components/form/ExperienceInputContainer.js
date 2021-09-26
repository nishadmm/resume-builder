import React, { useState } from "react";
import { Field } from "redux-form";

const ExperienceInputContainer = () => {
  const [numberOfExperiences, setNumberOfExperiences] = useState(1);

  return (
    <div className="form-group">
      <label htmlFor="experiences" className="text-danger">
        Experiences
      </label>
      {Array(numberOfExperiences)
        .fill()
        .map((_, index) => (
          <div className="row mb-2" key={index}>
            <div className="col-md d-block mb-2 mb-md-0">
              <Field
                component="input"
                type="text"
                className="form-control"
                name={`company${index}`}
                id="Company"
                placeholder="Enter Company Name"
              />
            </div>
            <div className="col-md d-block mb-2 mb-md-0">
              <Field
                component="input"
                type="number"
                className="form-control"
                name={`years${index}`}
                id="Years"
                placeholder="Years ( eg: 1 Year )"
              />
            </div>
            <div className="col-md d-block mb-2 mb-md-0">
              <Field
                component="input"
                type="text"
                className="form-control"
                name={`designation${index}`}
                id="Designation"
                placeholder="Designation"
              />
            </div>
          </div>
        ))}
      <a
        href="#!"
        className="badge badge-danger mt-2"
        onClick={() => setNumberOfExperiences(numberOfExperiences + 1)}
      >
        <i className="fas fa-plus-circle"></i> Add one more experience
      </a>
    </div>
  );
};

export default ExperienceInputContainer;

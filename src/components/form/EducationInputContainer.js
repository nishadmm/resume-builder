import React, { useState } from "react";
import { Field } from "redux-form";

const EducationInputContainer = () => {
  const [numberOfEducation, setNumberOfEducation] = useState(1);

  return (
    <div className="form-group">
      <label htmlFor="education" className="text-success">
        Education
      </label>
      {Array(numberOfEducation)
        .fill()
        .map((_, index) => (
          <div className="row mb-2" key={index}>
            <div className="col-md d-block mb-2 mb-md-0">
              <Field
                component="input"
                type="text"
                className="form-control"
                name={`institute${index}`}
                id="institute"
                placeholder="Enter Institute Name"
              />
            </div>
            <div className="col-md d-block mb-2 mb-md-0">
              <Field
                component="input"
                type="number"
                className="form-control"
                name={`passingYear${index}`}
                id="passingYear"
                placeholder="Passing Year"
              />
            </div>
            <div className="col-md d-block mb-2 mb-md-0">
              <Field
                component="input"
                type="text"
                className="form-control"
                name={`degree${index}`}
                id="degree"
                placeholder="Degree "
              />
            </div>
          </div>
        ))}
      <a
        href="#!"
        className="badge badge-success mt-2"
        onClick={() => setNumberOfEducation(numberOfEducation + 1)}
      >
        <i className="fas fa-plus-circle"></i> Add one more education
      </a>
    </div>
  );
};

export default EducationInputContainer;

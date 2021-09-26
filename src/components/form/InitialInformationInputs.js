import React from "react";
import { Field } from "redux-form";

const InitialInformationInputs = () => {
  return (
    <>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <Field
          component="input"
          name="name"
          className="form-control"
          type="text"
          id="name"
          placeholder="Enter Name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <Field
          component="input"
          type="email"
          name="email"
          className="form-control"
          id="email"
          placeholder="Enter email"
          required
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone Number</label>
        <Field
          component="input"
          type="number"
          name="phoneNumber"
          className="form-control"
          id="phone"
          placeholder="Enter Phone Number"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="address">Address</label>
        <Field
          component="textarea"
          className="form-control"
          name="address"
          id="address"
          placeholder="Enter Your Address"
          rows="2"
        />
      </div>
    </>
  );
};

export default InitialInformationInputs;

import React from "react";
import { connect } from "react-redux";
import { showAlertMessage, submitForm } from "../../redux/actions/FormActions";
import AlertMessage from "./AlertMessage";

const FormButtons = ({
  reset,
  pristine,
  submitting,
  submitForm,
  form,
  userID,
  skills,
  alertMessage,
  showAlertMessage,
}) => {
  // Form Submit Handler
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Form Inputs Length
    const valuesLength =
      form.resumeForm.values && Object.keys(form.resumeForm.values).length;

    // Check All Fields are filled
    if (valuesLength < 10 || !form.resumeForm.values) {
      showAlertMessage("Please Fill All the Fields !");
      setTimeout(() => {
        showAlertMessage();
      }, 4000);
      return;
    }

    submitForm({ ...form.resumeForm.values, skills: skills }, userID);
  };

  return (
    <>
      {alertMessage && <AlertMessage />}
      <div className="mt-4 d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="btn btn-outline-primary mr-3"
          onClick={reset}
          disabled={pristine || submitting}
        >
          <i className="fas fa-minus-circle"></i> Clear All Fields
        </button>
        <button
          className="btn btn-primary"
          disabled={pristine || submitting}
          onClick={handleFormSubmit}
        >
          Submit <i className="fas fa-external-link-alt"></i>
        </button>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  form: state.form,
  userID: state.user.user && state.user.user.id,
  alertMessage: state.formData.alertMessage,
  skills: state.formData.skills,
});

export default connect(mapStateToProps, { submitForm, showAlertMessage })(
  FormButtons
);

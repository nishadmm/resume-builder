import React from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
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
  const history = useHistory();

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
    history.push("/view"); // push to Resume View Page
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
          Clear All Fields
        </button>
        <Link
          to="/view"
          className="btn btn-primary"
          disabled={pristine || submitting}
          onClick={handleFormSubmit}
        >
          Submit
        </Link>
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

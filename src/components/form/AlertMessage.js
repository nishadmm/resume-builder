import React from "react";
import { connect } from "react-redux";
import { showAlertMessage } from "../../redux/actions/FormActions";

const AlertMessage = ({ alertMessage, showAlertMessage }) => {
  return (
    <div
      className="alert alert-danger alert-dismissible fade show mt-3 text-center"
      role="alert"
    >
      {alertMessage}
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
        onClick={() => showAlertMessage()}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  alertMessage: state.formData.alertMessage,
});

export default connect(mapStateToProps, { showAlertMessage })(AlertMessage);

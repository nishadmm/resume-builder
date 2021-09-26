import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { auth } from "../firebase/Firebase.utilis";
import { setResumeShow } from "../redux/actions/FormActions";

const Header = ({ userData: { user }, setResumeShow }) => {
  return (
    <nav className="navbar navbar-expand-md bg-dark navbar-dark py-3 ">
      <div className="container">
        <a href="#!" className="navbar-brand">
          <i className="fab fa-asymmetrik"></i>
          <span className="pl-2">Resume Builder</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navmenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div id="navmenu" className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item mx-auto mx-3">
              <Link
                to="/create"
                onClick={() => setResumeShow(false)}
                className="nav-link"
              >
                Create Resume
              </Link>
            </li>
            <li className="nav-item mx-auto">
              <Link to="/view" className="nav-link">
                View Resume
              </Link>
            </li>
            <li className="nav-item mx-auto ">
              <Link to="/" onClick={() => auth.signOut()} className="nav-link">
                LogOut
              </Link>
            </li>
            {user && (
              <li className="nav-item d-flex justify-content-center align-items-center ml-5">
                <img className="avatar" src={user.photoURL} alt="" />
                <p className="text-light mb-0 pl-1">{user.displayName}</p>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  userData: state.user,
});

export default connect(mapStateToProps, { setResumeShow })(Header);

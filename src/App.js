import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/actions/UserActions";
import { addResumeData } from "./redux/actions/FormActions";
import { auth, getUserDataFromDB } from "./firebase/Firebase.utilis";

// Components
import WelcomePage from "./components/WelcomePage";
import Form from "./components/form/Form";
import Resume from "./components/Resume/Resume";
import "./App.css";

const App = ({ setCurrentUser, addResumeData, userData: { user } }) => {
  useEffect(() => {
    return setUnsbscribeFromAuth();
    // eslint-disable-next-line
  }, []);

  const setUnsbscribeFromAuth = () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const dataFromDB = await getUserDataFromDB(user);
        dataFromDB.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        setCurrentUser(user);
      }
    });
  };

  // Add User Previous created resume data from Firestore to Reduc
  user && addResumeData(user.id);

  return (
    <Router>
      <Switch>
        <Route exact path="/view" component={Resume} />
        <Route exact path="/create" component={Form} />
      </Switch>
      {user ? (
        <Redirect to="/create" /> // Redircet to Resume create page when logged in
      ) : (
        <Route exact path="/" component={WelcomePage} />
      )}
    </Router>
  );
};

const mapStateToProps = (state) => ({
  userData: state.user,
});

export default connect(mapStateToProps, { setCurrentUser, addResumeData })(App);

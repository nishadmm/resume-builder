import React from "react";
import { signInWithGoogle } from "../firebase/Firebase.utilis";
import welcomePageHero from "../assets/welcomePageHero.webp";

const WelcomePage = () => {
  return (
    <section
      className="bg-dark text-light text-center text-sm-start p-5 "
      style={{ height: "100vh" }}
    >
      <div className="container h-100">
        <div className="d-flex flex-column justify-content-center h-100">
          <img
            className="img-fluid h-50 mx-auto"
            src={welcomePageHero}
            alt="Welcome Page Hero"
          />
          <div className="pt-3">
            <h1>
              Welcome to <span className="text-warning"> Resume Builder </span>
            </h1>
            <p className="lead">Create a Beautiful Resume, Fast and Free</p>
            <button
              className="btn btn-primary btn-lg"
              onClick={signInWithGoogle}
            >
              Create Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomePage;

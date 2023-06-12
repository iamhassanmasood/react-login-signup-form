import React, { useRef } from "react";
import "./Forms.css";

// Material Form
const Forms = () => {
  const container = useRef();

  const onSignUp = () => {
    container.current.classList.add("right-panel-active");
  };

  const onSignIn = () => {
    container.current.classList.remove("right-panel-active");
  };

  return (
    <div className="container" id="container" ref={container}>
      <div className="form-container sign-up-container">
        <form action="#">
          <h1 className="title-class">Create New Account</h1>

          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button onClick={onSignUp}>Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form action="#">
          <h1 className="title-class">Sign in</h1>

          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forgot your password?</a>
          <button onClick={onSignIn}>Sign In</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>
              To keep connected with us please login with your personal info
            </p>
            <button className="ghost" id="signIn" onClick={onSignIn}>
              Sign In
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button className="ghost" id="signUp" onClick={onSignUp}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forms;

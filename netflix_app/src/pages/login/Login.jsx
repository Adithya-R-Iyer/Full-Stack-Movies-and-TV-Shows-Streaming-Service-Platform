import React from "react";
import "./Login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input type="email" placeholder="Email or phone number" />
          <input type="password" placeholder="Password" />
          <button className="loginButton">Sign In</button>
          <div className="subWrapper">
            <div>
              <input type="checkbox" checked />
              <span>Remember me</span>
            </div>
            <p>Need help?</p>
          </div>
          <p>
            New to Netflix? <b>Sign up now.</b>
          </p>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small>
        </form>
      </div>
      <div className="footer">
        <div className="wrapper">
          <p>Questions? Call 000-800-919-1694</p>
          <div className="tags">
            <p>FAQ</p>
            <p>Help Center</p>
            <p>Terms of Use</p>
            <p>Privacy</p>
            <p>Cookie Preferences</p>
            <p>Corporate information</p>
          </div>
          <select>
            <option value="english" selected>English</option>
            <option value="hindi">Hindi</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Login;

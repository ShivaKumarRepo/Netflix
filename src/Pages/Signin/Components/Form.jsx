import React from "react";

const Form = () => {
  return (
    <>
      <div className="sign-up">
        <form>
          <div className="signin-heading">
            <h1>Sign in</h1>
          </div>
          <div className="signin-input">
            <input type="text" placeholder="Email or Phone number" />
            <input type="password" placeholder="password" />
          </div>
          <div className="signin-buttons">
            <button>Sign in</button>
            <div className="remember">
              <p>Remember me</p>
              <p id="help">Need help?</p>
            </div>
          </div>
          <div className="signin-new">
            <div class="new">
              <p id="new">New to Netflix?</p>
              <p id="now">Sign up now.</p>
            </div>
            <div class="google-captcha">
              <p>
                This page is protected by Google reCAPTCHA to <br />
                ensure you're not a bot. <button id="learn">Learn more.</button>
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;

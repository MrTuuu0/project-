// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
function Overlay({ onSignUpClick, onSignInClick }) {
  return (
    <div className="overlay" style={{display:'flex'}}>
      <div className="page page_signIn">
        <button  className="btn btnSign-in" onClick={onSignInClick}>
          Sign Up <i className="bi bi-arrow-right" />
        </button>
      </div>
      <div className="page page_signUp">
        <button className="btn btnSign-up" onClick={onSignUpClick} >
          <i className="bi bi-arrow-left" /> Sign In
        </button>
      </div>
    </div>
  );
}
export default Overlay;
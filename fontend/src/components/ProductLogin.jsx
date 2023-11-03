import './style/style.css'
import React, { useRef } from "react";
import FormSignin from "./FormSignIn";
import FormSignup from "./FormSignUp";
import Overlay from "./Overlay";

const ProductLogin = () => {
    const containerRef = useRef(null);

    const handleSignInClick = () => {
        if (containerRef.current) {
            containerRef.current.classList.add('active');
        }
    };

    const handleSignUpClick = () => {
        if (containerRef.current) {
            containerRef.current.classList.remove('active');
        }
    };
    return (
        <div className="App">
            <div className="container" ref={containerRef}>
                <div className="box">
                    <FormSignin />
                    <FormSignup />
                </div>

                <Overlay onSignInClick={handleSignInClick} onSignUpClick={handleSignUpClick} />

            </div>
        </div>
    )
}
export default ProductLogin
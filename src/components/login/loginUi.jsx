import React from "react";
import "./style.css";
import Login from "./Login";
const LoginUI = (props) => {
    const {
        onChange,
        switchLogin,
        onToggle,
        onSubmit,
        LoginError,
        LoginForm,
        Continue,
        onPressContinue,
        validateEmail,
    } = props;

    return (
        <>
            <div className="LoginContainer">
                <div className="LeftWrapper">
                    <div className="WelcomeContainer">
                        <div className="Logo">McAfee</div>
                        <div className="Intro">Welcome back to McAfee !</div>
                        {Continue ? (
                            <div className="IntroSubHeading">
                                Choose your sign in method to continue.
                            </div>
                        ) : (
                            <div className="IntroSubHeading">
                                Enter your email address so we can find your
                                account.
                            </div>
                        )}
                    </div>
                </div>
                <div className="RightWrapper">
                    <Login
                        LoginError={LoginError}
                        onChange={onChange}
                        switchLogin={switchLogin}
                        onSubmit={onSubmit}
                        LoginForm={LoginForm}
                        onToggle={onToggle}
                        onPressContinue={onPressContinue}
                        Continue={Continue}
                        validateEmail={validateEmail}
                    />
                </div>
            </div>
        </>
    );
};

export default LoginUI;

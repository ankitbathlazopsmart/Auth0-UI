import React from "react";
import "./style.css";
import Login from "./Login";
const LoginUI = (props) => {
    const { onChange, switchLogin, onToggle, onSubmit, LoginError, LoginForm } =
        props;

    return (
        <>
            <div className="LoginContainer">
                <div className="LeftWrapper"></div>
                <div className="RightWrapper">
                    <Login
                        LoginError={LoginError}
                        onChange={onChange}
                        switchLogin={switchLogin}
                        onSubmit={onSubmit}
                        LoginForm={LoginForm}
                    />

                    <div className="LoginWithOtp">
                        <div>OR</div>
                        <div className="SwitchBtn" onClick={onToggle}>
                            {!switchLogin ? (
                                <div>Login with Otp</div>
                            ) : (
                                <div>Login using Password</div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="LeftWrapper"></div>
            </div>
        </>
    );
};

export default LoginUI;

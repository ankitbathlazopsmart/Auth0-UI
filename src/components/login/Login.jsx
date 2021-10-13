import React from "react";
import "./style.css";

const Login = (props) => {
    const { onChange, switchLogin, onSubmit, LoginError, LoginForm } = props;
    return (
        <div className="LoginWrapperContainer">
            <form className="InputWrapper">
                <div className="InputLabel">Email Address</div>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={LoginForm.email}
                    placeholder="johndoe@domain.com"
                    className="Input"
                    onChange={onChange}
                />
                {LoginError.email && (
                    <div className="Error">{LoginError.email}</div>
                )}
                {!switchLogin && (
                    <>
                        <div className="InputLabel">Password</div>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="********"
                            className="Input"
                            onChange={onChange}
                        />
                    </>
                )}
                {switchLogin && LoginForm.otpAvailable && (
                    <>
                        <div className="InputLabel">Otp</div>
                        <input
                            id="otp"
                            name="otp"
                            className="Input"
                            onChange={onChange}
                        />
                    </>
                )}

                <button className="RequestOtp" onClick={onSubmit}>
                    {!switchLogin ? (
                        <div>Login</div>
                    ) : LoginForm.otpAvailable ? (
                        <div>Login</div>
                    ) : (
                        <div>Request Otp</div>
                    )}
                </button>
            </form>
            <div className="Error">{LoginError.databaseError}</div>
        </div>
    );
};

export default Login;

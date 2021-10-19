import React from "react";
import "./style.css";
import translate from "../../localization/translate";

const Login = (props) => {
    const {
        onChange,
        switchLogin,
        onSubmit,
        LoginError,
        LoginForm,
        onToggle,
        Continue,
        onPressContinue,
        validateEmail,
        getOtp,
    } = props;

    return (
        <div className="LoginWrapperContainer">
            <form className="InputWrapper">
                {!switchLogin && (
                    <>
                        <div className="InputContainer">
                            <div className="InputLabel">
                                {translate("emailAddress")}
                            </div>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={LoginForm.email}
                                placeholder="johndoe@domain.com"
                                className="Input"
                                onChange={onChange}
                                style={{
                                    border:
                                        LoginError.isEmailError === true
                                            ? "2px solid red"
                                            : LoginError.isEmailError === false
                                            ? "2px solid green"
                                            : "",
                                    backgroundColor: "#ffff",
                                }}
                            />
                        </div>
                    </>
                )}
                {LoginError.email && (
                    <div className="Error">{LoginError.email}</div>
                )}
                {Continue && !switchLogin && (
                    <>
                        <div className="InputContainer">
                            <div className="InputLabel">
                                {translate("password")}
                            </div>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="********"
                                className="Input"
                                onChange={onChange}
                            />
                        </div>
                    </>
                )}
                {Continue && switchLogin && LoginForm.otpAvailable && (
                    <>
                        <div className="InputContainer">
                            <div className="InputLabel">
                                {translate("one_time_passcode")}
                            </div>
                            <input
                                id="otp"
                                name="otp"
                                className="Input"
                                onChange={onChange}
                            />
                        </div>
                    </>
                )}
                {!Continue && (
                    <button
                        className="RequestOtp"
                        onClick={onPressContinue}
                        disabled={!validateEmail(LoginForm.email)}
                        style={{
                            backgroundColor: !validateEmail(LoginForm.email)
                                ? "grey"
                                : "",
                        }}
                    >
                        <div>{translate("continue")}</div>
                    </button>
                )}

                {Continue && (
                    <button className="RequestOtp" onClick={onSubmit}>
                        {/* {!switchLogin ? (
                            <div>Sign in</div>
                        ) : LoginForm.otpAvailable ? (
                            <div>Sign in</div>
                        ) : (
                            <div>Request one-time passcode</div>
                        )} */}
                        <div>{translate("signIn")}</div>
                    </button>
                )}
            </form>
            {LoginError.errorCode && (
                <div className="Error">{translate(LoginError.errorCode)}</div>
            )}
            {Continue && (
                <div className="SwitchContainer">
                    <div className="Switch">{translate("or")}</div>
                    {/* <button className="SwitchBtn" onClick={onToggle}>
                        {!switchLogin ? (
                            <div>Sign in with a one-time passcode</div>
                        ) : (
                            <div>Sign in with password</div>
                        )}
                    </button> */}
                    {!switchLogin && (
                        <button className="SwitchBtn" onClick={getOtp}>
                            <div>
                                {translate("Sign_in_with_a_onetime_passcode")}
                            </div>
                        </button>
                    )}
                    {switchLogin && (
                        <button className="SwitchBtn" onClick={onToggle}>
                            <div>{translate("signIn_with_password")}</div>
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

export default Login;

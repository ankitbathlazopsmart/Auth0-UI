import React from "react";
import "./style.css";
import Login from "./Login";
import translate from "../../localization/translate";
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
        getOtp,
    } = props;

    return (
        <>
            <div className="LoginContainer">
                <div className="LeftWrapper">
                    <div className="WelcomeContainer">
                        <div className="Logo">McAfee</div>
                        <div className="Intro">
                            {translate("Welcome_back_to")} McAfee !
                        </div>
                        {Continue ? (
                            <div className="IntroSubHeading">
                                {translate(
                                    "choose_your_signIn_method_continue"
                                )}
                            </div>
                        ) : (
                            <div className="IntroSubHeading">
                                {translate(
                                    "Enter_your_email_address_so_we_can_find_your_account"
                                )}
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
                        getOtp={getOtp}
                    />
                </div>
            </div>
        </>
    );
};

export default LoginUI;

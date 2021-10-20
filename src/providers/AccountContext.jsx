import React, { useState } from "react";
import auth0 from "auth0-js";

const AccountContext = React.createContext({});

const AccountProvider = (props) => {
    const [isAuthenticated, setIsAuth] = useState(false);

    const AuthenticateUser = (idToken, accessToken) => {
        localStorage.setItem("access_token", accessToken);
        localStorage.setItem("id_token", idToken);
        setIsAuth(true);
    };

    const storeUserData = (data) => {
        localStorage.setItem("userData", JSON.stringify(data));
    };
    const webAuth = new auth0.WebAuth({
        domain: process.env.REACT_APP_DOMAIN,
        clientID: process.env.REACT_APP_CLIENT_ID,
        responseType: "token id_token",
        redirectUri: "http://localhost:3000/authorize",
        audience: "https://dev-xl32ev2i.us.auth0.com/api/v2/",
    });

    const getUserInfo = () => {
        const access_token = localStorage.getItem("access_token");
        return new Promise((resolve, reject) => {
            webAuth.client.userInfo(access_token, (res, err) => {
                if (err) {
                    console.log(err);
                    reject(err);
                } else {
                    console.log(res);
                    resolve(res);
                }
            });
        });
    };

    const otpStart = (email) => {
        return new Promise((resolve, reject) => {
            // const variables = { email, connection: "email", send: "code" };
            webAuth.passwordlessStart(
                {
                    email,
                    connection: "email",
                    send: "code",
                    authParams: {
                        lang: "fr-ca",
                    },
                },
                (err, res) => {
                    if (err) {
                        console.log(err);
                        reject(err);
                    } else {
                        resolve(res);
                    }
                }
            );
        });
    };

    const otpLogin = (email, otp) => {
        return new Promise((resolve, reject) => {
            webAuth.passwordlessLogin(
                { email, connection: "email", verificationCode: otp },
                (err, res) => {
                    if (err) {
                        reject(err);
                    } else {
                        window.origin = window.location.origin;
                        resolve(res);
                    }
                }
            );
        });
    };

    const loginWithPassword = (username, password) => {
        return new Promise((resolve, reject) => {
            webAuth.login(
                {
                    realm: "Username-Password-Authentication",
                    username,
                    password,
                },
                (err, authResult) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    if (authResult) {
                        window.origin = window.location.origin;
                        resolve(authResult);
                    }
                }
            );
        });
    };

    return (
        <AccountContext.Provider
            value={{
                webAuth,
                otpStart,
                otpLogin,
                loginWithPassword,
                AuthenticateUser,
                storeUserData,
                isAuthenticated,
                getUserInfo,
            }}
        >
            {props.children}
        </AccountContext.Provider>
    );
};

export { AccountProvider, AccountContext };

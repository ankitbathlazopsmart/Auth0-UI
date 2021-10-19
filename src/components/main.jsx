import React, { useRef } from "react";
import Login from "./login/index";
import { Switch, Route, useLocation } from "react-router-dom";
import DashBoard from "./dashboard/index";
import { AccountProvider } from "../providers/AccountContext";
import Authorize from "./Authorize";
import LanguageProvider from "../localization/languageProvider";
import { LOCALES } from "../localization/constants";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}
const Main = () => {
    let query = useQuery();
    let locale = useRef("");
    let lang;
    let culture = query.get("culture");

    if (culture === null) {
        if (localStorage.getItem("lang") === null) {
            lang = "en-us";
        } else {
            lang = localStorage.getItem("lang");
        }
    } else {
        lang = culture;
        localStorage.setItem("lang", lang);
    }

    if (lang === "en-us") {
        locale.current = LOCALES.ENGLISH;
    } else if (lang === "fr-ca") {
        locale.current = LOCALES.FRENCH;
    } else {
        locale.current = "en-us";
    }
    return (
        <LanguageProvider locale={locale.current}>
            <AccountProvider>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/authorize" component={Authorize} />
                    <Route exact path="/dashboard" component={DashBoard} />
                </Switch>
            </AccountProvider>
        </LanguageProvider>
    );
};
export default Main;

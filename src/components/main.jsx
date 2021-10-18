import React from "react";
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

    const lang = query.get("culture") ?? navigator.language;
    let locale;
    if (lang === "en-us") {
        locale = LOCALES.ENGLISH;
    } else if (lang === "fr-ca") {
        locale = LOCALES.FRENCH;
    } else {
        locale = "en-us";
    }

    return (
        <LanguageProvider locale={locale}>
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

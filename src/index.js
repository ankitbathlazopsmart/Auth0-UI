import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

window.LoginWidget = class LoginWidget {
    init(opts) {
        const pageConfig = opts.pageConfig;
        if (!pageConfig) {
            throw new Error("pageConfig must be provided in opts");
        }

        ReactDOM.render(
            <BrowserRouter>
                <App pageConfig={pageConfig} />
            </BrowserRouter>,
            document.getElementById("root")
        );
    }
};

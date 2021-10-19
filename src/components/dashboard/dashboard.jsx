import React from "react";
import "./style.css";
import translate from "../../localization/translate";
const DashboardUI = () => {
    const user = JSON.parse(localStorage.getItem("userData"));

    return (
        <>
            <div className="DashboardContainer">
                <div className="DashBoardHeading">
                    {translate("Welcome_to_dashboard")}{" "}
                </div>
                <div
                    className="UserImg"
                    style={{ backgroundImage: `url(${user?.picture})` }}
                ></div>
                <div className="UserName">{user.name}</div>
            </div>
        </>
    );
};
export default DashboardUI;

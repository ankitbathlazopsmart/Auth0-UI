import React, { useEffect } from "react";
import axios from "axios";

const CommonDataContext = React.createContext({});

const CommonDataProvider = (props) => {
    useEffect(() => {
        const getCommonData = async () => {
            const res = await axios.get(
                "/client/9dR6Ug2BQQbmBMp6grHf1R962NBigRxg.js?t1634713429698"
            );
            console.log(JSON.parse(res.data.slice(16, -2)));
        };

        getCommonData();
    }, []);
    return (
        <CommonDataContext.Provider value={{}}>
            {props.children}
        </CommonDataContext.Provider>
    );
};

export { CommonDataProvider, CommonDataContext };

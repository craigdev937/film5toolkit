import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { RootReducer } from "../global/RootReducer.js";
import { MainRoute } from "../routes/MainRoute";

export const App = () => {
    return (
        <React.Fragment>
            <Provider store={RootReducer}>
                <MainRoute />
            </Provider>
        </React.Fragment>
    );
};



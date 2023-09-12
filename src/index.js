import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";
import { BrowserRouter, HashRouter } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        {/* <BrowserRouter> */}
        <HashRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </HashRouter>
        {/* </BrowserRouter> */}
    </React.StrictMode>
);

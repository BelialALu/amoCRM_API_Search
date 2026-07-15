import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";

import App from "./App.jsx";
import "./styles/index.css";
import "./styles/layout.css";
import "./styles/cards.css";
import "./styles/buttons.css";
import "./styles/search.css";
import "./styles/method.css";
import "./styles/tables.css";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <HashRouter>
            <App />
        </HashRouter>
    </StrictMode>
);
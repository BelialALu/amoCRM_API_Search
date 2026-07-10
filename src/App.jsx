import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import EntityPage from "./pages/EntityPage";
import MethodPage from "./pages/MethodPage";
import SearchResults from "./pages/SearchResults";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />

            <Route
                path="/entity/:entityId"
                element={<EntityPage />}
            />

            <Route
                path="/method/:methodId"
                element={<MethodPage />}
            />

            <Route
                path="/search"
                element={<SearchResults />}
            />
        </Routes>
    );
}

export default App;
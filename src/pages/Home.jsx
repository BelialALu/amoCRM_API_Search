import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { entities } from "../data/entities";
import { searchMethods } from "../utils/searchMethods";
import { methods } from "../data/methods";

import EntityCard from "../components/EntityCard";
import SearchBar from "../components/SearchBar";
import AdvancedSearch from "../components/AdvancedSearch";

function Home() {
    const [selectedEntity, setSelectedEntity] = useState("");
    const navigate = useNavigate();

    const [searchQuery, setSearchQuery] = useState("");
    const [requestMethod, setRequestMethod] = useState("");
    const [searchInRequestParams, setSearchInRequestParams] = useState(false);
    const [searchInResponseParams, setSearchInResponseParams] = useState(false);
    const [searchInAllParams, setSearchInAllParams] = useState(false);


    const handleSearch = () => {

        const params = new URLSearchParams();

        params.set("q", searchQuery);

        if (requestMethod) {
            params.set("method", requestMethod);
        }

        if (selectedEntity) {
            params.set("entity", selectedEntity);
        }

        if (searchInRequestParams) {
            params.set("requestParams", "1");
        }

        if (searchInResponseParams) {
            params.set("responseParams", "1");
        }

        if (searchInAllParams) {
            params.set("allParams", "1");
        }

        navigate(`/search?${params.toString()}`);

    };


    const searchResults = searchMethods(
    searchQuery,
    requestMethod,
    selectedEntity,
    searchInRequestParams,
    searchInResponseParams,
    searchInAllParams
);

const filteredEntities = entities.filter(entity => {

    if (!searchQuery.trim() &&
        !requestMethod &&
        !selectedEntity &&
        !searchInRequestParams &&
        !searchInResponseParams &&
        !searchInAllParams) {
        return true;
    }

    return searchResults.some(
        result => result.entityId === entity.id
    );

});

const isFiltering =
    searchQuery.trim() ||
    requestMethod ||
    selectedEntity ||
    searchInRequestParams ||
    searchInResponseParams ||
    searchInAllParams;

const methodsCount = isFiltering
    ? searchResults.length
    : Object.values(methods).flat().length;

const entitiesCount = isFiltering
    ? filteredEntities.length
    : entities.length;

    return (

        <div className="home-page">

            <h1>
                Информационная система поиска и анализа API-запросов amoCRM
            </h1>


            <div className="search-section">

                <div className="search-row">

                    <SearchBar
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                    />


                    <button
                        className="search-button"
                        onClick={handleSearch}
                    >
                        Поиск
                    </button>


                    <AdvancedSearch
                        requestMethod={requestMethod}
                        setRequestMethod={setRequestMethod}
                        selectedEntity={selectedEntity}
                        setSelectedEntity={setSelectedEntity}
                        searchInRequestParams={searchInRequestParams}
                        setSearchInRequestParams={setSearchInRequestParams}
                        searchInResponseParams={searchInResponseParams}
                        setSearchInResponseParams={setSearchInResponseParams}
                        searchInAllParams={searchInAllParams}
                        setSearchInAllParams={setSearchInAllParams}
                    />
                    <div className="search-stats">
                        Запросов: {methodsCount} | Разделов: {entitiesCount}
                    </div>
                </div>

            </div>
            <h2 className="title-section">
                    Разделы API
            </h2>

            <div className="entities-grid">

                {filteredEntities.map(entity => {

                    const matchedMethods = searchResults
                        .filter(result => result.entityId === entity.id)
                        .map(result => result.method);


                    return (

                        <EntityCard
                            key={entity.id}
                            entity={entity}
                            matchedMethods={matchedMethods}
                            isSearching={
                                searchQuery.trim() !== "" &&
                                matchedMethods.length > 0
                            }
                            searchQuery={searchQuery}
                        />

                    );

                })}

            </div>

        </div>

    );

}

export default Home;
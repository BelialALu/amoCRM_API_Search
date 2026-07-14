import { useState } from "react";

import { entities } from "../data/entities";
import { searchMethods } from "../utils/searchMethods";

import EntityCard from "../components/EntityCard";
import SearchBar from "../components/SearchBar";
import AdvancedSearch from "../components/AdvancedSearch";

function Home() {

    const [searchQuery, setSearchQuery] = useState("");
    const [requestMethod, setRequestMethod] = useState("");
    const [searchInRequestParams, setSearchInRequestParams] = useState(false);
    const [searchInResponseParams, setSearchInResponseParams] = useState(false);
    const [searchInAllParams, setSearchInAllParams] = useState(false);

    const searchResults = searchMethods(
        searchQuery,
        requestMethod,
        searchInRequestParams,
        searchInResponseParams,
        searchInAllParams
    );

    const filteredEntities = entities.filter(entity => {

        if (!searchQuery.trim()) {
            return true;
        }

        return searchResults.some(
            result => result.entityId === entity.id
        );

    });

    return (

        <div>

            <h1>
                Информационная система поиска и анализа API-запросов amoCRM
            </h1>

            <SearchBar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                requestMethod={requestMethod}
                searchInRequestParams={searchInRequestParams}
                searchInResponseParams={searchInResponseParams}
                searchInAllParams={searchInAllParams}
            />

            <AdvancedSearch
                requestMethod={requestMethod}
                setRequestMethod={setRequestMethod}
                searchInRequestParams={searchInRequestParams}
                setSearchInRequestParams={setSearchInRequestParams}
                searchInResponseParams={searchInResponseParams}
                setSearchInResponseParams={setSearchInResponseParams}
                searchInAllParams={searchInAllParams}
                setSearchInAllParams={setSearchInAllParams}
            />

            <div>

                {filteredEntities.map(entity => {

                    const matchedMethods = searchResults
                        .filter(result => result.entityId === entity.id)
                        .map(result => result.method);

                    return (

                        <EntityCard
                            key={entity.id}
                            entity={entity}
                            matchedMethods={matchedMethods}
                        />

                    );

                })}

            </div>

        </div>

    );

}

export default Home;
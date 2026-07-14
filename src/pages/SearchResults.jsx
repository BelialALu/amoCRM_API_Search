import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import { entities } from "../data/entities";
import { methods } from "../data/methods";
import { searchMethods } from "../utils/searchMethods";

import SearchBar from "../components/SearchBar";
import AdvancedSearch from "../components/AdvancedSearch";
import MethodInfo from "../components/MethodInfo";

function SearchResults() {

    const [searchParams] = useSearchParams();
    

    const [searchQuery, setSearchQuery] = useState(
        searchParams.get("q") || ""
    );

    const [requestMethod, setRequestMethod] = useState(
        searchParams.get("method") || ""
    );

    const [searchInRequestParams, setSearchInRequestParams] = useState(
        searchParams.get("requestParams") === "1"
    );

    const [searchInResponseParams, setSearchInResponseParams] = useState(
        searchParams.get("responseParams") === "1"
    );

    const [searchInAllParams, setSearchInAllParams] = useState(
        searchParams.get("allParams") === "1"
    );

    const allMethods = Object.values(methods).flat();

    const methodsMap = allMethods.reduce((map, currentMethod) => {
        map[currentMethod.id] = currentMethod;
        return map;
    }, {});

    const results = searchMethods(
        searchQuery,
        requestMethod,
        searchInRequestParams,
        searchInResponseParams,
        searchInAllParams
    );

    const groupedResults = entities
        .map(entity => ({

            entity,

            methods: results.filter(
                result => result.entityId === entity.id
            )

        }))
        .filter(group => group.methods.length > 0);

    return (

        <div>

            <h1>Результаты поиска</h1>

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

            {groupedResults.length === 0 ? (

                <p>По вашему запросу ничего не найдено.</p>

            ) : (

                groupedResults.map(group => (

                    <div key={group.entity.id}>

                        <h2>{group.entity.title}</h2>

                        {group.methods.map(result => (

                            <MethodInfo
                                key={result.method.id}
                                method={result.method}
                                methodsMap={methodsMap}
                                splitMainParams={false}
                                showRelatedMethods={true}
                            />

                        ))}

                    </div>

                ))

            )}

        </div>

    );

}

export default SearchResults;
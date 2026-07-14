import { useState } from "react";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi2";

import { entities } from "../data/entities";
import { methods } from "../data/methods";
import { searchMethods } from "../utils/searchMethods";

import SearchBar from "../components/SearchBar";
import AdvancedSearch from "../components/AdvancedSearch";
import MethodInfo from "../components/MethodInfo";


function SearchResults() {

    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const [selectedEntity, setSelectedEntity] = useState(
        searchParams.get("entity") || ""
    );

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



    const allMethods = Object.values(methods).flat();


    const methodsMap = allMethods.reduce((map, currentMethod) => {

        map[currentMethod.id] = currentMethod;

        return map;

    }, {});



    const results = searchMethods(
        searchQuery,
        requestMethod,
        selectedEntity,
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
        const methodsCount = results.length;
        const entitiesCount = groupedResults.length;


    return (
        <>

            <Link
                to="/"
                className="back-button"
                title="Вернуться на главную"
            >
            <HiArrowLeft />
        </Link>

        <div className="search-results">

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




            {groupedResults.length === 0 ? (

                <div className="empty-card">

                    По вашему запросу ничего не найдено.

                </div>


            ) : (

                <>

                    {groupedResults.map(group => (

                        <div
                            key={group.entity.id}
                            className="search-entity"
                        >


                            <h2>
                                {group.entity.title}
                            </h2>



                            {group.methods.map(result => (

                                <div
                                    key={result.method.id}
                                    className="search-method"
                                >


                                    <MethodInfo
                                        method={result.method}
                                        methodsMap={methodsMap}
                                        splitMainParams={false}
                                        showRelatedMethods={true}
                                    />


                                </div>

                            ))}


                        </div>

                    ))}


                </>

            )}


        </div>
        </>
    );

}


export default SearchResults;
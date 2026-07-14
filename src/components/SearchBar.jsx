import { useNavigate } from "react-router-dom";

function SearchBar({
    searchQuery,
    setSearchQuery,
    requestMethod,
    searchInResponseParams,
    searchInRequestParams,
    searchInAllParams
}) {

    const navigate = useNavigate();

    const handleSearch = () => {

        const params = new URLSearchParams();

        params.set("q", searchQuery);

        if (requestMethod) {
            params.set("method", requestMethod);
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

    const handleKeyDown = (event) => {

        if (event.key === "Enter") {
            handleSearch();
        }

    };

    return (

        <div className="search-bar">

            <input
                type="text"
                placeholder="Введите название метода или запрос..."
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                onKeyDown={handleKeyDown}
            />

            <button onClick={handleSearch}>
                Поиск
            </button>

        </div>

    );

}

export default SearchBar;
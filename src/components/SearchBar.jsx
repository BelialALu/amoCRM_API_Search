function SearchBar({
    searchQuery,
    setSearchQuery,
    onSearch
}) {

    const handleKeyDown = (event) => {

        if (event.key === "Enter") {
            onSearch();
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

        </div>

    );

}

export default SearchBar;
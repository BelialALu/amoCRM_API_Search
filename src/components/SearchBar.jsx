function SearchBar({
    searchQuery,
    setSearchQuery
}) {

    return (

        <div className="search-bar">

            <input
                type="text"
                placeholder="Введите название метода или запрос..."
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
            />

        </div>

    );

}

export default SearchBar;
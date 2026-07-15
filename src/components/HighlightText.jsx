function HighlightText({
    text,
    searchQuery
}) {

    if (!searchQuery?.trim()) {
        return text;
    }

    const escaped = searchQuery.replace(
        /[.*+?^${}()|[\]\\]/g,
        "\\$&"
    );

    const parts = String(text).split(
        new RegExp(`(${escaped})`, "gi")
    );

    return (
        <>
            {parts.map((part, index) =>

                part.toLowerCase() === searchQuery.toLowerCase()
                    ? (
                        <mark
                            key={index}
                            className="search-highlight"
                        >
                            {part}
                        </mark>
                    )
                    : part

            )}
        </>
    );

}

export default HighlightText;
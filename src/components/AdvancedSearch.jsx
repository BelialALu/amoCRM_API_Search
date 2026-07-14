import { useState } from "react";

function AdvancedSearch({
    requestMethod,
    setRequestMethod,
    searchInRequestParams,
    setSearchInRequestParams,
    searchInResponseParams, 
    setSearchInResponseParams,
    searchInAllParams,
    setSearchInAllParams
}) {

    const [open, setOpen] = useState(false);

    return (
        <div>

            <button
                type="button"
                onClick={() => setOpen(!open)}
            >
                Расширенный поиск
            </button>

            {open && (

                <div>

                    <div>

                        <label htmlFor="request-method">
                            Метод запроса:
                        </label>

                        <select
                            id="request-method"
                            value={requestMethod}
                            onChange={(event) =>
                                setRequestMethod(event.target.value)
                            }
                        >
                            <option value="">Все</option>
                            <option value="GET">GET</option>
                            <option value="POST">POST</option>
                            <option value="PATCH">PATCH</option>
                            <option value="DELETE">DELETE</option>
                        </select>

                    </div>

                    <label>

                        <input
                            type="checkbox"
                            checked={searchInResponseParams}
                            disabled={searchInAllParams}
                            onChange={(event) =>
                                setSearchInResponseParams(
                                    event.target.checked
                                )
                            }
                        />

                        Искать по параметрам ответа

                    </label>

                    <label>

                        <input
                            type="checkbox"
                            checked={searchInRequestParams}
                            disabled={searchInAllParams}
                            onChange={(event) =>
                                setSearchInRequestParams(
                                    event.target.checked
                                )
                            }
                        />

                        Искать по параметрам запроса

                    </label>

                    <label>
                        <label>
                            <input
                                type="checkbox"
                                checked={searchInAllParams}
                                onChange={(event) => {
                                    const checked = event.target.checked;
                                    setSearchInAllParams(checked);

                                    if (checked) {
                                        setSearchInRequestParams(false);
                                        setSearchInResponseParams(false);
                                    }
                                }}
                            />
                        Искать по всем параметрам
                    </label>
                    </label>
                </div>

            )}

        </div>
    );

}

export default AdvancedSearch;
import { useState } from "react";
import { entities } from "../data/entities";

function AdvancedSearch({
    requestMethod,
    setRequestMethod,

    selectedEntity,
    setSelectedEntity,

    searchInRequestParams,
    setSearchInRequestParams,

    searchInResponseParams,
    setSearchInResponseParams,

    searchInAllParams,
    setSearchInAllParams
}) {

    const [open, setOpen] = useState(false);

    return (

        <>
            <button
                type="button"
                className="search-button"
                onClick={() => setOpen(!open)}
            >
                Расширенный поиск
            </button>


            {open && (

                <div className="advanced-search-panel">

                    <div className="advanced-search">

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
                    
                    <div className="advanced-search">
                        <label htmlFor="entity">
                            Раздел:
                        </label>

                        <select
                            id="entity"
                            value={selectedEntity}
                            onChange={(e) => setSelectedEntity(e.target.value)}
                        >
                            <option value="">Все</option>

                        {entities.map(entity => (
                            <option
                                key={entity.id}
                                value={entity.id}
                            >
                                {entity.title}
                            </option>
                        ))}
                    </select>

                </div>


                    <label>
                        <input
                            type="checkbox"
                            checked={searchInRequestParams}
                            disabled={searchInAllParams}
                            onChange={(event) =>
                                setSearchInRequestParams(event.target.checked)
                            }
                        />

                        Искать по параметрам запроса
                    </label>


                    <label>
                        <input
                            type="checkbox"
                            checked={searchInResponseParams}
                            disabled={searchInAllParams}
                            onChange={(event) =>
                                setSearchInResponseParams(event.target.checked)
                            }
                        />

                        Искать по параметрам ответа
                    </label>


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

                </div>

            )}

        </>

    );

}

export default AdvancedSearch;
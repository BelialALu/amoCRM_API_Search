import { Link } from "react-router-dom";

import { parameters } from "../data/parameters";

function MethodInfo({
    method,
    methodsMap,
    showRelatedMethods = false,
    splitMainParams = false
}) {

    const getParameter = (parameterId) => {
        return parameters[method.entity]?.[parameterId];
    };

    const otherRequestParams =
        method.requestParams?.filter(
            parameter => !method.mainRequestParams?.includes(parameter)
        ) || [];

    const otherResponseParams =
        method.responseParams?.filter(
            parameter => !method.mainResponseParams?.includes(parameter)
        ) || [];

    const renderParametersTable = (parameterIds) => (
        <table>
            <thead>
                <tr>
                    <th>Параметр</th>
                    <th>Тип</th>
                    <th>Описание</th>
                </tr>
            </thead>

            <tbody>
                {parameterIds.map((parameterId) => {

                    const parameter = getParameter(parameterId);

                    return (
                        <tr key={parameterId}>
                            <td>{parameter?.name || parameterId}</td>
                            <td>{parameter?.type || "-"}</td>
                            <td>{parameter?.description || "Описание отсутствует"}</td>
                        </tr>
                    );

                })}
            </tbody>
        </table>
    );

    return (
        <>

            <h2>{method.title}</h2>

            <h3>
                {method.method} {method.endpoint}
            </h3>

            <p>{method.description}</p>

            {method.restrictions?.length > 0 && (
                <>
                    <h3>Ограничения</h3>

                    <ul>
                        {method.restrictions.map((restriction, index) => (
                            <li key={index}>{restriction}</li>
                        ))}
                    </ul>
                </>
            )}

            {splitMainParams ? (
                <>
                    {method.mainRequestParams?.length > 0 && (
                        <>
                            <h3>Основные параметры запроса</h3>
                            {renderParametersTable(method.mainRequestParams)}
                        </>
                    )}

                    {otherRequestParams.length > 0 && (
                        <details>
                            <summary><b>Дополнительные параметры запроса</b></summary>
                            {renderParametersTable(otherRequestParams)}
                        </details>
                    )}
                </>
            ) : (
                method.requestParams?.length > 0 && (
                    <details>
                        <summary><b>Параметры запроса</b></summary>
                        {renderParametersTable(method.requestParams)}
                    </details>
                )
            )}

            {splitMainParams ? (
                <>
                    {method.mainResponseParams?.length > 0 && (
                        <>
                            <h3>Основные параметры ответа</h3>
                            {renderParametersTable(method.mainResponseParams)}
                        </>
                    )}

                    {otherResponseParams.length > 0 && (
                        <details>
                            <summary><b>Дополнительные параметры ответа</b></summary>
                            {renderParametersTable(otherResponseParams)}
                        </details>
                    )}
                </>
            ) : (
                method.responseParams?.length > 0 && (
                    <details>
                        <summary><b>Параметры ответа</b></summary>
                        {renderParametersTable(method.responseParams)}
                    </details>
                )
            )}

            {method.responseCodes?.length > 0 && (
                <>
                    <h3>Коды ответа</h3>

                    <table>
                        <thead>
                            <tr>
                                <th>Код</th>
                                <th>Описание</th>
                            </tr>
                        </thead>

                        <tbody>
                            {method.responseCodes.map((response) => (
                                <tr key={response.code}>
                                    <td>{response.code}</td>
                                    <td>{response.description}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            )}

            {method.notes?.length > 0 && (
                <>
                    <h3>Примечания</h3>

                    <ul>
                        {method.notes.map((note, index) => (
                            <li key={index}>{note}</li>
                        ))}
                    </ul>
                </>
            )}

            {showRelatedMethods && method.relatedMethods?.length > 0 && (
                <>
                    <h3>Связанные методы</h3>

                    <ul>
                        {method.relatedMethods.map((relatedMethodId) => {

                            const relatedMethod = methodsMap[relatedMethodId];

                            return (
                                <li key={relatedMethodId}>
                                    {relatedMethod ? (
                                        <>
                                            <strong>{relatedMethod.title}</strong>
                                            <br />

                                            <code>
                                                {relatedMethod.method} {relatedMethod.endpoint}
                                            </code>

                                            <br />

                                            <Link
                                                to={`/method/${relatedMethod.id}`}
                                                className="method-link-button"
                                            >
                                                Подробнее
                                            </Link>
                                        </>
                                    ) : (
                                        relatedMethodId
                                    )}
                                </li>
                            );

                        })}
                    </ul>
                </>
            )}

        </>
    );

}

export default MethodInfo;
import { Link } from "react-router-dom";
import { HiOutlineArrowTopRightOnSquare, HiArrowLeft } from "react-icons/hi2";
import { parameters } from "../data/parameters";

function MethodInfo({
    method,
    methodsMap,
    showRelatedMethods = false,
    splitMainParams = false,
    showBackButton = false
}) {

    const getParameter = (parameterId) => {
        return parameters[method.entity]?.[parameterId];
    };

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
                            <td>
                                {parameter?.description || "Описание отсутствует"}
                            </td>
                        </tr>
                    );

                })}
            </tbody>
        </table>
    );


    return (
        <>
            {showBackButton && (
            <Link
                to="/"
                className="back-button"
                title="Вернуться на главную"
            >
                <HiArrowLeft />
            </Link>
            )}
            
            <div className="method-info">

                <h2>{method.title}</h2>

                <div className="method-header-card">

                    <div className="method-endpoint">

                        <span className="http-method">
                            {method.method}
                        </span>

                        <span>
                            {method.endpoint}
                        </span>

                    </div>

                    <p>
                        {method.description}
                    </p>


                    {method.restrictions?.length > 0 && (

                        <div className="method-restrictions">

                            <h4>
                                Ограничения
                            </h4>

                            <ul>
                                {method.restrictions.map((restriction, index) => (
                                    <p key={index}>
                                        {restriction}
                                    </p>
                                ))}
                            </ul>

                        </div>

                    )}

                </div>


                <div className="method-info">
                {splitMainParams ? (

                    <>

                        {method.requestParams?.length > 0 && (
                            <>
                                <h4>
                                    Обязательные параметры запроса
                                </h4>

                                {renderParametersTable(method.requestParams)}
                            </>
                        )}


                        {method.mainRequestParams?.length > 0 && (

                            <details>

                                <summary>
                                    <h4>
                                        Необязательные параметры запроса
                                    </h4>
                                </summary>

                                {renderParametersTable(method.mainRequestParams)}

                            </details>

                        )}

                    </>

                ) : (

                    <>

                        {method.requestParams?.length > 0 && (

                            <details>

                                <summary>
                                    <b>
                                        Обязательные параметры запроса
                                    </b>
                                </summary>

                                {renderParametersTable(method.requestParams)}

                            </details>

                        )}


                        {method.mainRequestParams?.length > 0 && (

                            <details>

                                <summary>
                                    <b>
                                        Необязательные параметры запроса
                                    </b>
                                </summary>

                                {renderParametersTable(method.mainRequestParams)}

                            </details>

                        )}

                    </>

                )}
            </div>

            <div className="method-info">
                {splitMainParams ? (

                    method.mainResponseParams?.length > 0 ? (

                        <>

                            <h4>
                                Наиболее часто используемые параметры ответа
                            </h4>

                            {renderParametersTable(method.mainResponseParams)}


                            {otherResponseParams.length > 0 && (

                                <details>

                                    <summary>
                                        <h4>
                                            Дополнительные параметры ответа
                                        </h4>
                                    </summary>

                                    {renderParametersTable(otherResponseParams)}

                                </details>

                            )}

                        </>

                    ) : (

                        method.responseParams?.length > 0 && (

                            <>

                                <h4>
                                    Параметры ответа
                                </h4>

                                {renderParametersTable(method.responseParams)}

                            </>

                        )

                    )

                ) : (

                    method.responseParams?.length > 0 && (

                        <details>

                            <summary>
                                Параметры ответа
                            </summary>

                            {renderParametersTable(method.responseParams)}

                        </details>

                    )

                )}
            </div>

            <div className="method-info">
                {method.responseCodes?.length > 0 && (

                    <>

                        <h4>
                            Коды ответа
                        </h4>


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

                                        <td>
                                            {response.code}
                                        </td>

                                        <td>
                                            {response.description}
                                        </td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </>

                )}

                </div>
                <div className="method-info">

                {method.notes?.length > 0 && (

                    <>

                        <h4>
                            Примечания
                        </h4>


                        <ul>

                            {method.notes.map((note, index) => (

                                <p key={index}>
                                    {note}
                                </p>

                            ))}

                        </ul>

                    </>

                )}
                </div>


                {showRelatedMethods && method.relatedMethods?.length > 0 && (

                    <>

                        <h4>
                            Связанные методы
                        </h4>


                        <div className="related-methods">

                            {method.relatedMethods.map((relatedMethodId) => {

                                const relatedMethod =
                                    methodsMap?.[relatedMethodId];


                                return (

                                    <div
                                        key={relatedMethodId}
                                        className="related-method"
                                    >

                                        {relatedMethod ? (

                                            <>

                                                <p>
                                                    {relatedMethod.title}
                                                </p>

                                                <div className="related-method-endpoint">
                                                    <code>
                                                        {relatedMethod.method}{" "}
                                                        {relatedMethod.endpoint}
                                                    </code>

                                                <Link
                                                    to={`/method/${relatedMethod.id}`}
                                                    className="related-method-link"
                                                    title="Перейти к методу"
                                                    >
                                                    <HiOutlineArrowTopRightOnSquare />
                                                </Link>

                                                </div>
                                            </>

                                        ) : (

                                            relatedMethodId

                                        )}

                                    </div>

                                );

                            })}

                        </div>

                    </>

                )}

            </div>

        </>
    );

}

export default MethodInfo;
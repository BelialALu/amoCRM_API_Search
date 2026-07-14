import { Link } from "react-router-dom";
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";

import { methods } from "../data/methods";

    function EntityCard({
        entity,
        matchedMethods = [],
        isSearching = false
    }) {

    const entityMethods = methods[entity.id] || [];

    const methodsToShow =
        matchedMethods.length > 0
            ? matchedMethods
            : entityMethods;

    return (
        <div className="entity-card">

            <h2>{entity.title}</h2>

            <p>{entity.description}</p>

            <h3>
                {isSearching ? "Найденные запросы" : "Методы API"}
            </h3>

            {methodsToShow.length > 0 ? (
                <ul className="methods-list">

                    {methodsToShow.map(method => (
                        <li
                            key={method.id}
                            className="method-item"
                        >

                            <div className="method-preview">

                                <div className="method-title">
                                    {method.title}
                                </div>

                                <div className="method-request">
                                    {method.method} {method.endpoint}
                                </div>

                            </div>

                            <Link
                                to={`/method/${method.id}`}
                                className="method-link"
                                title="Перейти к описанию метода"
                            >
                                <HiOutlineArrowTopRightOnSquare />
                            </Link>

                        </li>
                    ))}

                </ul>
            ) : (
                <p>Методы пока отсутствуют.</p>
            )}

            <Link
                to={`/entity/${entity.id}`}
                className="entity-link"
            >
                Посмотреть все запросы сущности
            </Link>

        </div>
    );

}

export default EntityCard;
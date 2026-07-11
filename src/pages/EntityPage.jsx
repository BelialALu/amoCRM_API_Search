import { useParams } from "react-router-dom";

import { entities } from "../data/entities";
import { methods } from "../data/methods";

import MethodCard from "../components/MethodCard";

function EntityPage() {

    const { entityId } = useParams();

    const entity = entities.find(
        item => item.id === entityId
    );

    const entityMethods = methods.filter(
        method => method.entity === entityId
    );

    if (!entity) {
        return <h1>Сущность не найдена</h1>;
    }

    return (
        <div>

            <h1>{entity.title}</h1>

            <p>{entity.description}</p>

            <h2>Методы API</h2>

            {entityMethods.map(method => (

                <MethodCard
                    key={method.id}
                    method={method}
                />

            ))}

        </div>
    );
}

export default EntityPage;
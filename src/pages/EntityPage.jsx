import { useParams } from "react-router-dom";
import { entities } from "../data/entities";
import { methods } from "../data/methods";

function EntityPage() {
    const { entityId } = useParams();

    const entity = entities.find(item => item.id === entityId);
    const entityMethods = methods[entityId] || [];

    if (!entity) {
        return <h1>Сущность не найдена</h1>;
    }

    return (
        <div>
            <h1>{entity.title}</h1>
            <p>{entity.description}</p>

            <h2>Методы API</h2>

            {entityMethods.length === 0 ? (
                <p>Методы отсутствуют</p>
            ) : (
                entityMethods.map(method => (
                    <div key={method.id}>
                        <h3>{method.title}</h3>
                        <p>{method.method} {method.endpoint}</p>
                        <p>{method.description}</p>
                    </div>
                ))
            )}
        </div>
    );
}

export default EntityPage;
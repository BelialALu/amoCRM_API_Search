import { useParams } from "react-router-dom";

import { entities } from "../data/entities";
import { methods } from "../data/methods";

import MethodInfo from "../components/MethodInfo";

function EntityPage() {

    const { entityId } = useParams();

    const entity = entities.find(
        item => item.id === entityId
    );

    if (!entity) {
        return <h1>Сущность не найдена</h1>;
    }

    const entityMethods = methods[entityId] || [];

    const allMethods = Object.values(methods).flat();

    const methodsMap = allMethods.reduce((map, currentMethod) => {
        map[currentMethod.id] = currentMethod;
        return map;
    }, {});
    
    return (
        <div>

            <h1>{entity.title}</h1>

            <p>{entity.description}</p>

            <h2>Методы API</h2>

            {entityMethods.length > 0 ? (
                entityMethods.map(method => (
                    <MethodInfo
                        key={method.id}
                        method={method}
                        methodsMap={methodsMap}
                        splitMainParams={false}
                    />
                ))
    ) : (
        <p>Для данного раздела методы пока отсутствуют.</p>
)}

        </div>
    );

}

export default EntityPage;
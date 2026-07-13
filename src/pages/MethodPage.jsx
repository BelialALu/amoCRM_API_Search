import { useParams } from "react-router-dom";

import { methods } from "../data/methods";

import MethodInfo from "../components/MethodInfo";

function MethodPage() {

    const { methodId } = useParams();

    const allMethods = Object.values(methods).flat();

    const methodsMap = allMethods.reduce((map, currentMethod) => {
        map[currentMethod.id] = currentMethod;
        return map;
    }, {});

    const method = methodsMap[methodId];

    if (!method) {
        return <h1>Метод не найден</h1>;
    }

    return (
        <MethodInfo
            method={method}
            methodsMap={methodsMap}
            showRelatedMethods={true}
            splitMainParams={true}
        />
    );

}

export default MethodPage;
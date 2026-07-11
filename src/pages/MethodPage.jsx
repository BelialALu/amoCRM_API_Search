import { useParams } from "react-router-dom";

import { methods } from "../data/methods";

function MethodPage() {

    const { methodId } = useParams();

    const method = methods.find(
        item => item.id === methodId
    );

    if (!method) {
        return <h1>Метод не найден</h1>;
    }

    return (

        <div>

            <h1>{method.title}</h1>

            <h2>

                {method.method}

                {" "}

                {method.endpoint}

            </h2>

            <p>

                {method.description}

            </p>

        </div>

    );

}

export default MethodPage;
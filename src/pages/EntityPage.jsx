import { useParams } from "react-router-dom";

function EntityPage() {
    const { entityId } = useParams();

    return (
        <>
            <h1>{entityId}</h1>

            <p>Страница сущности</p>
        </>
    );
}

export default EntityPage;
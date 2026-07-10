import { useParams } from "react-router-dom";

function MethodPage() {
    const { methodId } = useParams();

    return (
        <>
            <h1>{methodId}</h1>

            <p>Страница метода</p>
        </>
    );
}

export default MethodPage;
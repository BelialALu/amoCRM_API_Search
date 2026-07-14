import { Link } from "react-router-dom";

function MethodCard({ method }) {

    return (

        <div className="related-method">

            <h3>{method.title}</h3>

            <code>
                {method.method} {method.endpoint}
            </code>

            <p>{method.description}</p>

            <Link
                to={`/method/${method.id}`}
                className="method-link-button"
            >
                Подробнее
            </Link>

        </div>

    );

}

export default MethodCard;
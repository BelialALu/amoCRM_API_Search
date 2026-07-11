import { Link } from "react-router-dom";

function MethodCard({ method }) {

    return (

        <div className="method-card">

            <h3>{method.title}</h3>

            <p>

                <strong>{method.method}</strong>

                {" "}

                {method.endpoint}

            </p>

            <p>{method.description}</p>

            <Link to={`/method/${method.id}`}>

                Подробнее

            </Link>

        </div>

    );

}

export default MethodCard;
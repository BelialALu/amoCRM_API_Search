import { Link } from "react-router-dom";

function EntityCard({ entity }) {
    return (
        <div className="entity-card">
            <h2>
                {entity.title}
            </h2>

            <p>
                {entity.description}
            </p>

            <Link to={`/entity/${entity.id}`}>
                Посмотреть методы
            </Link>
        </div>
    );
}

export default EntityCard;
function EntityCard({ entity }) {
    return (
        <div className="entity-card">
            <h2>{entity.title}</h2>

            <p>{entity.description}</p>

            <button>
                Посмотреть методы
            </button>
        </div>
    );
}

export default EntityCard;
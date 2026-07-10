import { entities } from "../data/entities";
import EntityCard from "../components/EntityCard";

function Home() {
    return (
        <div>

            <h1>
                Информационная система поиска и анализа API-запросов amoCRM
            </h1>

            {entities.map((entity) => (
                <EntityCard
                    key={entity.id}
                    entity={entity}
                />
            ))}

        </div>
    );
}

export default Home;
import { entities } from "../data/entities";
import EntityCard from "../components/EntityCard";
import SearchBar from "../components/SearchBar";
import AdvancedSearch from "../components/AdvancedSearch";

function Home() {
    return (
        <div>
            <h1>
                Информационная система поиска и анализа API-запросов amoCRM
            </h1>

            <SearchBar />

            <AdvancedSearch />

            <div>
                {entities.map(entity => (
                    <EntityCard
                        key={entity.id}
                        entity={entity}
                    />
                ))}
            </div>
        </div>
    );
}

export default Home;
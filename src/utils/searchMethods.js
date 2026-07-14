import { methods } from "../data/methods";
import { parameters } from "../data/parameters";

export function searchMethods(
    query = "",
    requestMethod = "",
    selectedEntity = "",
    searchInRequestParams = false,
    searchInResponseParams = false,
    searchInAllParams = false
) {

    const searchText = query.trim().toLowerCase();

    if (!searchText && !selectedEntity && !requestMethod) {
        return [];
    }

    const results = [];

    Object.entries(methods).forEach(([entityId, entityMethods]) => {

        entityMethods.forEach(method => {

            // Фильтр по HTTP-методу
            if (
                requestMethod &&
                method.method.toLowerCase() !== requestMethod.toLowerCase()
            ) {
                return;
            }

            // Фильтр по разделу
            if (
                selectedEntity &&
                entityId !== selectedEntity
            ) {
                return;
            }

            const parts = [
                method.title,
                method.method,
                `${method.method} ${method.endpoint}`,
                method.endpoint
            ];

            const addParameter = (parameterId) => {

                if (!parameterId) {
                    return;
                }

                parts.push(parameterId);

                const parameter =
                    parameters[method.entity]?.[parameterId];

                if (!parameter) {
                    return;
                }

                parts.push(parameter.name);
                parts.push(parameter.type);
                parts.push(parameter.description);

            };

            // Поиск по параметрам запроса
            if (searchInRequestParams || searchInAllParams) {

                method.requestParams?.forEach(addParameter);
                method.mainRequestParams?.forEach(addParameter);

            }

            // Поиск по параметрам ответа
            if (searchInResponseParams || searchInAllParams) {

                method.responseParams?.forEach(addParameter);

            }

            const searchableText = parts
                .filter(Boolean)
                .join(" ")
                .toLowerCase();

            if (
                !searchText ||
                searchableText.includes(searchText)
            ) {

                results.push({
                    entityId,
                    method
                });

            }

        });

    });

    return results;

}
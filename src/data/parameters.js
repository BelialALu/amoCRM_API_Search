export const parameters = {

    page: {
        name: "page",
        type: "integer",
        category: "query",
        description: "Номер страницы."
    },

    limit: {
        name: "limit",
        type: "integer",
        category: "query",
        description: "Количество элементов на странице."
    },

    query: {
        name: "query",
        type: "string | integer",
        category: "query",
        description: "Поисковый запрос."
    },

    filter: {
        name: "filter",
        type: "object",
        category: "query",
        description: "Фильтр выборки."
    },

    order: {
        name: "order",
        type: "object",
        category: "query",
        description: "Сортировка результатов."
    },

    with: {
        name: "with",
        type: "string",
        category: "query",
        description: "Добавляет дополнительные данные в ответ."
    },

    id: {
        name: "id",
        type: "integer",
        category: "response",
        description: "Уникальный идентификатор сущности."
    },

    name: {
        name: "name",
        type: "string",
        category: "response",
        description: "Название сущности."
    },

    price: {
        name: "price",
        type: "integer",
        category: "response",
        description: "Бюджет сделки."
    }
};
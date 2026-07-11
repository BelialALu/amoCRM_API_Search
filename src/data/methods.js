export const methods = [
    {
        id: "get-leads",

        entity: "leads",

        title: "Список сделок",

        method: "GET",

        endpoint: "/api/v4/leads",

        description:
            "Метод позволяет получить список сделок в аккаунте.",

        restrictions: [
            "Метод доступен в соответствии с правами пользователя."
        ],

        queryParameters: [
            "with",
            "page",
            "limit",
            "query",
            "filter",
            "order"
        ],

        responseParameters: [
            "id",
            "name",
            "price",
            "responsible_user_id",
            "group_id",
            "status_id",
            "pipeline_id",
            "loss_reason_id",
            "source_id",
            "created_by",
            "updated_by",
            "closed_at",
            "created_at",
            "updated_at",
            "closest_task_at",
            "is_deleted",
            "custom_fields_values",
            "score",
            "account_id"
        ],

        withParameters: [
            "catalog_elements",
            "contacts",
            "loss_reason",
            "only_deleted",
            "source",
            "source_id",
            "is_price_modified_by_robot"
        ],

        responseCodes: [
            {
                code: 200,
                description: "Запрос выполнен успешно"
            },
            {
                code: 401,
                description: "Пользователь не авторизован"
            },
            {
                code: 402,
                description: "Аккаунт не оплачен"
            }
        ],

        successContentType: "application/hal+json",

        errorContentType: "application/problem+json",

        exampleResponse: `{
    "_page": 2,
    "_embedded": {
        "leads": []
    }
}`
    },

    {
        id: "get-lead-by-id",

        entity: "leads",

        title: "Получение сделки по ID",

        method: "GET",

        endpoint: "/api/v4/leads/{id}",

        description:
            "Метод позволяет получить данные конкретной сделки по ID."
    },

    {
        id: "add-leads",

        entity: "leads",

        title: "Добавление сделок",

        method: "POST",

        endpoint: "/api/v4/leads",

        description:
            "Метод позволяет добавлять сделки в аккаунт пакетно."
    },

    {
        id: "add-complex-leads",

        entity: "leads",

        title: "Комплексное добавление сделок",

        method: "POST",

        endpoint: "/api/v4/leads/complex",

        description:
            "Метод позволяет добавить сделку вместе с контактом и компанией."
    },

    {
        id: "update-leads",

        entity: "leads",

        title: "Редактирование сделок",

        method: "PATCH",

        endpoint: "/api/v4/leads",

        description:
            "Метод позволяет редактировать сделки."
    }
];
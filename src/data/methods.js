export const methods = {
    leads: [
    {
    id: "get-leads",
    entity: "leads",

    title: "Получение списка сделок",

    method: "GET",
    endpoint: "/api/v4/leads",

    description: "Метод позволяет получить список сделок аккаунта.",

    restrictions: [
        "Метод доступен в соответствии с правами пользователя."
    ],

    mainRequestParams: [
        "with",
        "page",
        "limit",
        "query",
        "filter",
        "order"
    ],

    mainResponseParams: [
        "id",
        "name",
        "price",
        "status_id",
        "pipeline_id",
        "responsible_user_id",
        "created_at",
        "updated_at"
    ],

    responseParams: [
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
        "account_id",
        "labor_cost",
        "is_price_modified_by_robot",
        "_embedded",
        "_embedded[loss_reason]",
        "_embedded[loss_reason][id]",
        "_embedded[loss_reason][name]",
        "_embedded[tags]",
        "_embedded[tags][0]",
        "_embedded[tags][0][id]",
        "_embedded[tags][0][name]",
        "_embedded[tags][0][color]",
        "_embedded[contacts]",
        "_embedded[contacts][0]",
        "_embedded[contacts][0][id]",
        "_embedded[contacts][0][is_main]",
        "_embedded[companies]",
        "_embedded[companies][0]",
        "_embedded[companies][0][id]",
        "_embedded[catalog_elements]",
        "_embedded[catalog_elements][0]",
        "_embedded[catalog_elements][0][id]",
        "_embedded[catalog_elements][0][metadata]",
        "_embedded[catalog_elements][0][quantity]",
        "_embedded[catalog_elements][0][catalog_id]",
        "_embedded[catalog_elements][0][price_id]",
        "_embedded[source]",
        "_embedded[source][id]",
        "_embedded[source][name]"
    ],

    responseCodes: [
        {
            code: 200,
            description: "Запрос выполнен успешно"
        },
        {
            code: 401,
            description: "Пользователь не авторизован(недостаточно прав)"
        },
        {
            code: 402,
            description: "Аккаунт не оплачен"
        }
    ],

    notes: [
        "Связанные сущности возвращаются в блоке _embedded.",
        "Контакты сделки содержатся в _embedded.contacts.",
        "Компании сделки содержатся в _embedded.companies."
    ],

    relatedMethods: [
        "get-lead-by-id",
        "add-leads",
        "update-leads"
    ],

    },
    
    {
    id: "get-lead-by-id",
    entity: "leads",

    title: "Получение сделки по ID",

    method: "GET",
    endpoint: "/api/v4/leads/{id}",

    description: "Метод позволяет получить информацию о конкретной сделке по её идентификатору.",

    restrictions: [
        "Метод доступен в соответствии с правами пользователя."
    ],

    requestParams: [
        "id"
    ],
    
    mainRequestParams: [
        "with"
    ],

    mainResponseParams: [
        "id",
        "name",
        "price",
        "status_id",
        "pipeline_id",
        "responsible_user_id",
        "created_at",
        "updated_at"
    ],

    responseParams: [
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
        "account_id",
        "labor_cost",
        "is_price_modified_by_robot",
        "_embedded",
        "_embedded[loss_reason]",
        "_embedded[loss_reason][id]",
        "_embedded[loss_reason][name]",
        "_embedded[tags]",
        "_embedded[tags][0]",
        "_embedded[tags][0][id]",
        "_embedded[tags][0][name]",
        "_embedded[tags][0][color]",
        "_embedded[contacts]",
        "_embedded[contacts][0]",
        "_embedded[contacts][0][id]",
        "_embedded[contacts][0][is_main]",
        "_embedded[companies]",
        "_embedded[companies][0]",
        "_embedded[companies][0][id]",
        "_embedded[catalog_elements]",
        "_embedded[catalog_elements][0]",
        "_embedded[catalog_elements][0][id]",
        "_embedded[catalog_elements][0][metadata]",
        "_embedded[catalog_elements][0][quantity]",
        "_embedded[catalog_elements][0][catalog_id]",
        "_embedded[catalog_elements][0][price_id]",
        "_embedded[source]",
        "_embedded[source][id]",
        "_embedded[source][name]"
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

    notes: [
        "Идентификатор сделки передается в URL запроса, либо в карточке сделки в левом верхнем углу.",
        "Связанные сущности возвращаются в блоке _embedded.",
        "Для получения дополнительных связанных объектов используется параметр with."
    ],

    relatedMethods: [
        "get-leads",
        "add-leads",
        "update-leads",
    ]
    },

    {
    id: "add-leads",
    entity: "leads",

    title: "Добавление сделок",

    method: "POST",
    endpoint: "/api/v4/leads",

    description: "Метод позволяет добавлять сделки в аккаунт пакетно.",

    restrictions: [
        "Метод доступен в соответствии с правами пользователя."
    ],

    mainRequestParams: [
        "name",
        "price",
        "status_id",
        "pipeline_id",
        "created_by",
        "updated_by",
        "closed_at",
        "created_at",
        "updated_at",
        "loss_reason_id",
        "responsible_user_id",
        "custom_fields_values",
        "tags_to_add",
        "tags_to_add[0]",
        "tags_to_add[0][id]",
        "tags_to_add[0][name]",
        "_embedded",
        "_embedded[tags]",
        "_embedded[tags][0]",
        "_embedded[tags][0][id]",
        "_embedded[contacts]",
        "_embedded[contacts][0]",
        "_embedded[contacts][0][id]",
        "_embedded[contacts][0][is_main]",
        "_embedded[companies]",
        "_embedded[companies][0]",
        "_embedded[companies][0][id]",
        "_embedded[source][external_id]",
        "_embedded[source][type]"
    ],

    responseParams: [
        "id",
        "request_id"
    ],

    responseCodes: [
        {
            code: 200,
            description: "Сделки были успешно созданы"
        },
        {
            code: 400,
            description: "Переданы некорректные данные. Подробности доступны в теле ответа"
        },
        {
            code: 401,
            description: "Пользователь не авторизован"
        }
    ],

    notes: [
        "Обязательные поля для данного метода отсутствуют."
    ],

    relatedMethods: [
        "get-leads",
        "get-lead-by-id",
        "update-leads",
        "add-complex-leads"
    ]
    },

    {
    id: "add-complex-leads",
    entity: "leads",

    title: "Комплексное добавление сделок",

    method: "POST",
    endpoint: "/api/v4/leads/complex",

    description: "Метод позволяет добавлять сделки c контактом и компанией в аккаунт пакетно.",

    restrictions: [
        "Метод доступен в соответствии с правами пользователя.",
        "Для одной сделки можно указать не более одного связанного контакта и одной связанной компании.",
        "Для каждой добавляемой сущности (сделка, контакт, компания) можно передать не более 40 значений дополнительных полей.",
        "Добавляемые данные участвуют в контроле дублей, если он включен для интеграции.",
        "Метод не выполняет дедубликацию переданных данных, а только ищет совпадения среди существующих сущностей.",
        "За один запрос можно передать не более 50 сделок.",
        "При создании нового контакта и компании они автоматически связываются между собой."
    ],

    mainRequestParams: [
        "name",
        "price",
        "status_id",
        "pipeline_id",
        "created_by",
        "updated_by",
        "closed_at",
        "created_at",
        "updated_at",
        "loss_reason_id",
        "responsible_user_id",
        "custom_fields_values",
        "tags_to_add",
        "tags_to_add[0]",
        "tags_to_add[0][id]",
        "tags_to_add[0][name]",
        "_embedded",
        "_embedded[tags]",
        "_embedded[tags][0]",
        "_embedded[tags][0][id]",
        "_embedded[contacts]",
        "_embedded[contacts][0]",
        "_embedded[companies]",
        "_embedded[companies][0]",
        "_embedded[metadata]",
        "_embedded[metadata][category]",
        "_embedded[source][external_id]",
        "_embedded[source][type]"
    ],

    responseParams: [
        "id",
        "contact_id",
        "company_id",
        "merged",
        "request_id"
    ],

    responseCodes: [
        {
            code: 200,
            description: "Сделки были успешно созданы"
        },
        {
            code: 400,
            description: "Переданы некорректные данные"
        },
        {
            code: 401,
            description: "Переданы некорректные данные. Подробности доступны в теле ответа"
        },
    ],

    notes: [
        "Метод возвращает информацию о созданных или обновлённых(если найден дубль) сущностях.",
        "Добовляемые данные могут быть проверены в контроле дублей.",
        "В поле request_id, если не найдены дубли, всегда будет 1 элемент. Множественное значение может вернуться в случае, если передано несколько дублей одной и той же сделки. В такой случае вернется результирующая сделка, а в массиве request_id будут идентификаторы переданных сделок, которые являются дублями."
    ],

    relatedMethods: [
        "add-leads",
        "get-lead-by-id",
        "update-leads",
    ]
    },

    {
    id: "update-leads",
    entity: "leads",

    title: "Редактирование сделок",

    method: "PATCH",
    endpoint: "/api/v4/leads",

    description: "Метод позволяет редактировать сделки пакетно.",

    restrictions: [
        "Метод доступен в соответствии с правами пользователя."
    ],

    mainRequestParams: [
        "id",
        "name",
        "price",
        "status_id",
        "pipeline_id",
        "created_by",
        "updated_by",
        "closed_at",
        "created_at",
        "updated_at",
        "loss_reason_id",
        "responsible_user_id",
        "custom_fields_values",
        "tags_to_add",
        "tags_to_add[0]",
        "tags_to_add[0][id]",
        "tags_to_add[0][name]",
        "tags_to_delete",
        "tags_to_delete[0]",
        "tags_to_delete[0][id]",
        "tags_to_delete[0][name]",
        "_embedded",
        "_embedded[tags]",
        "_embedded[tags][0]",
        "_embedded[tags][0][id]",
        "_embedded[tags][0][name]"
    ],

    responseParams: [
        "id",
        "updated_at"
    ],

    responseCodes: [
        {
            code: 200,
            description: "Сделки были успешно изменены"
        },
        {
            code: 400,
            description: "Переданы некорректные данные. Подробности доступны в теле ответа"
        },
        {
            code: 401,
            description: "Пользователь не авторизован"
        },
    ],

    notes: [
        "Можно добавить ID сделки в метод для редактирования конкретной сделки (/api/v4/leads/{id})",
        "При редактировании пакетно передается массив из объектов-сделок, при редактировании одной сделки, передается просто модель сделки.",
    ],

    relatedMethods: [
        "get-leads",
        "get-lead-by-id",
        "add-leads",
        "add-complex-leads"
    ]
    }
    ],

    contacts: [],

    companies: []
};
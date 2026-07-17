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

    contacts: [
{
    id: "get-contacts",
    entity: "contacts",

    title: "Получение списка контактов",

    method: "GET",
    endpoint: "/api/v4/contacts",

    description: "Метод позволяет получить список контактов в аккаунте.",

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
        "first_name",
        "last_name",
        "responsible_user_id",
        "created_at",
        "updated_at"
    ],

    responseParams: [
        "id",
        "name",
        "first_name",
        "last_name",
        "responsible_user_id",
        "group_id",
        "created_by",
        "updated_by",
        "created_at",
        "updated_at",
        "is_deleted",
        "closest_task_at",
        "custom_fields_values",
        "account_id",
        "_embedded",
        "_embedded[tags]",
        "_embedded[tags][0]",
        "_embedded[tags][0][id]",
        "_embedded[tags][0][name]",
        "_embedded[tags][0][color]",
        "_embedded[companies]",
        "_embedded[companies][0]",
        "_embedded[companies][0][id]",
        "_embedded[customers]",
        "_embedded[customers][0]",
        "_embedded[customers][0][id]",
        "_embedded[leads]",
        "_embedded[leads][0]",
        "_embedded[leads][0][id]",
        "_embedded[catalog_elements]",
        "_embedded[catalog_elements][0]",
        "_embedded[catalog_elements][0][id]",
        "_embedded[catalog_elements][0][metadata]",
        "_embedded[catalog_elements][0][quantity]",
        "_embedded[catalog_elements][0][catalog_id]",
        "_embedded[catalog_elements][0][price_id]"
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
        "Связанные сущности возвращаются в блоке _embedded.",
        "Для получения покупателей, сделок и элементов списков необходимо использовать параметр with."
    ],

    relatedMethods: [
        "get-contact-by-id",
        "add-contacts",
        "update-contacts"
    ]
},

{
    id: "get-contact-by-id",
    entity: "contacts",

    title: "Получение контакта по ID",

    method: "GET",
    endpoint: "/api/v4/contacts/{id}",

    description: "Метод позволяет получить данные конкретного контакта по ID.",

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
        "first_name",
        "last_name",
        "responsible_user_id",
        "created_at",
        "updated_at"
    ],

    responseParams: [
        "id",
        "name",
        "first_name",
        "last_name",
        "responsible_user_id",
        "group_id",
        "created_by",
        "updated_by",
        "created_at",
        "updated_at",
        "is_deleted",
        "closest_task_at",
        "custom_fields_values",
        "account_id",
        "_embedded",
        "_embedded[tags]",
        "_embedded[tags][0]",
        "_embedded[tags][0][id]",
        "_embedded[tags][0][name]",
        "_embedded[tags][0][color]",
        "_embedded[companies]",
        "_embedded[companies][0]",
        "_embedded[companies][0][id]",
        "_embedded[customers]",
        "_embedded[customers][0]",
        "_embedded[customers][0][id]",
        "_embedded[leads]",
        "_embedded[leads][0]",
        "_embedded[leads][0][id]",
        "_embedded[catalog_elements]",
        "_embedded[catalog_elements][0]",
        "_embedded[catalog_elements][0][id]",
        "_embedded[catalog_elements][0][metadata]",
        "_embedded[catalog_elements][0][quantity]",
        "_embedded[catalog_elements][0][catalog_id]",
        "_embedded[catalog_elements][0][price_id]"
    ],

    responseCodes: [
        {
            code: 200,
            description: "Запрос выполнен успешно"
        },
        {
            code: 204,
            description: "Контакт с указанным ID не существует"
        },
        {
            code: 401,
            description: "Пользователь не авторизован"
        }
    ],

    notes: [
        "Идентификатор контакта передается в URL запроса.",
        "Для получения связанных сущностей используется параметр with."
    ],

    relatedMethods: [
        "get-contacts",
        "add-contacts",
        "update-contacts"
    ]
},

{
    id: "add-contacts",
    entity: "contacts",

    title: "Добавление контактов",

    method: "POST",
    endpoint: "/api/v4/contacts",

    description: "Метод позволяет добавлять контакты в аккаунт пакетно.",

    restrictions: [
        "Метод доступен в соответствии с правами пользователя."
    ],

    mainRequestParams: [
        "name",
        "first_name",
        "last_name",
        "responsible_user_id",
        "created_by",
        "updated_by",
        "created_at",
        "updated_at",
        "custom_fields_values",
        "tags_to_add",
        "tags_to_add[0]",
        "tags_to_add[0][id]",
        "tags_to_add[0][name]",
        "_embedded",
        "_embedded[tags]",
        "_embedded[tags][0]",
        "_embedded[tags][0][id]",
        "_embedded[tags][0][name]",
        "request_id"
    ],

    responseParams: [
        "id",
        "request_id"
    ],

    responseCodes: [
        {
            code: 200,
            description: "Контакты были успешно созданы"
        },
        {
            code: 401,
            description: "Пользователь не авторизован"
        },
        {
            code: 400,
            description: "Переданы некорректные данные. Подробности доступны в теле ответа"
        }
    ],

    notes: [
        "Обязательные поля для данного метода отсутствуют."
    ],

    relatedMethods: [
        "get-contacts",
        "get-contact-by-id",
        "update-contacts"
    ]
},
    {
    id: "update-contacts",
    entity: "contacts",

    title: "Редактирование контактов",

    method: "PATCH",
    endpoint: "/api/v4/contacts",

    description: "Метод позволяет редактировать контакты пакетно. Также возможно редактирование конкретного контакта через добавление ID в URL запроса (/api/v4/contacts/{id}).",

    restrictions: [
        "Метод доступен в соответствии с правами пользователя."
    ],

    mainRequestParams: [
        "id",
        "name",
        "first_name",
        "last_name",
        "responsible_user_id",
        "created_by",
        "updated_by",
        "created_at",
        "updated_at",
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
            description: "Контакты были успешно изменены"
        },
        {
            code: 401,
            description: "Пользователь не авторизован"
        },
        {
            code: 400,
            description: "Переданы некорректные данные. Подробности доступны в теле ответа"
        }
    ],

    notes: [
        "При редактировании пакетно передается массив из объектов-контактов.",
        "При редактировании одного контакта передается модель контакта."
    ],

    relatedMethods: [
        "get-contacts",
        "get-contact-by-id",
        "add-contacts"
    ]
},

{
    id: "link-contact-chats",
    entity: "contacts",

    title: "Привязка чатов к контактам",

    method: "POST",
    endpoint: "/api/v4/contacts/chats",

    description: "Метод позволяет привязать чат к контакту.",

    restrictions: [
        "Метод доступен с правами администратора аккаунта.",
        "В настройках канала должен быть указан uuid интеграции, которая запрашивает метод.",
        "Интеграция может менять привязку чатов только по каналам, к которым она имеет доступ.",
        "Не должны передаваться сессионные куки, иначе метод вернет ошибку."
    ],

    mainRequestParams: [
        "chat_id",
        "contact_id",
        "request_id"
    ],

    responseParams: [
        "id",
        "contact_id",
        "chat_id",
        "request_id"
    ],

    responseCodes: [
        {
            code: 200,
            description: "Запрос выполнен успешно"
        },
        {
            code: 401,
            description: "Пользователь не авторизован"
        }
    ],

    notes: [
        "Один чат может быть привязан только к одному контакту.",
        "Один контакт может быть привязан к нескольким чатам."
    ],

    relatedMethods: [
        "get-contact-chats"
    ]
},

{
    id: "get-contact-chats",
    entity: "contacts",

    title: "Получение списка чатов контакта",

    method: "GET",
    endpoint: "/api/v4/contacts/chats",

    description: "Метод позволяет получить список чатов, которые относятся к контактам, или список контактов, к которым привязан чат.",

    restrictions: [
        "Метод доступен с правами администратора аккаунта.",
        "В настройках канала должен быть указан uuid интеграции, которая запрашивает метод.",
        "Интеграция может запросить только чаты по каналам, к которым она имеет доступ.",
        "Не должны передаваться сессионные куки, иначе метод вернет ошибку."
    ],

    mainRequestParams: [
        "chat_id",
        "contact_id"
    ],

    responseParams: [
        "id",
        "contact_id",
        "chat_id"
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
            code: 400,
            description: "Переданы неверные данные в запросе. Подробности в теле ответа"
        }
    ],

    notes: [
        "Метод возвращает коллекцию связей между контактами и чатами.",
        "Если чат относится к неразобранному, метод вернет ID контакта этого неразобранного."
    ],

    relatedMethods: [
        "link-contact-chats"
    ]
}
],

    companies: [
{
    id: "get-companies",
    entity: "companies",

    title: "Получение списка компаний",

    method: "GET",
    endpoint: "/api/v4/companies",

    description: "Метод позволяет получить список компаний в аккаунте.",

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
        "responsible_user_id",
        "created_at",
        "updated_at"
    ],

    responseParams: [
        "id",
        "name",
        "responsible_user_id",
        "group_id",
        "created_by",
        "updated_by",
        "created_at",
        "updated_at",
        "closest_task_at",
        "custom_fields_values",
        "is_deleted",
        "account_id",
        "_embedded",
        "_embedded[tags]",
        "_embedded[tags][0]",
        "_embedded[tags][0][id]",
        "_embedded[tags][0][name]",
        "_embedded[tags][0][color]",
        "_embedded[contacts]",
        "_embedded[contacts][0]",
        "_embedded[contacts][0][id]",
        "_embedded[customers]",
        "_embedded[customers][0]",
        "_embedded[customers][0][id]",
        "_embedded[leads]",
        "_embedded[leads][0]",
        "_embedded[leads][0][id]",
        "_embedded[catalog_elements]",
        "_embedded[catalog_elements][0]",
        "_embedded[catalog_elements][0][id]",
        "_embedded[catalog_elements][0][metadata]",
        "_embedded[catalog_elements][0][quantity]",
        "_embedded[catalog_elements][0][catalog_id]",
        "_embedded[catalog_elements][0][price_id]"
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
        "Связанные сущности возвращаются в блоке _embedded.",
        "Для получения связанных контактов, покупателей, сделок и элементов списков необходимо использовать параметр with."
    ],

    relatedMethods: [
        "get-company-by-id",
        "add-companies",
        "update-companies"
    ]
},

{
    id: "get-company-by-id",
    entity: "companies",

    title: "Получение компании по ID",

    method: "GET",
    endpoint: "/api/v4/companies/{id}",

    description: "Метод позволяет получить данные конкретной компании по ID.",

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
        "responsible_user_id",
        "created_at",
        "updated_at"
    ],

    responseParams: [
        "id",
        "name",
        "responsible_user_id",
        "group_id",
        "created_by",
        "updated_by",
        "created_at",
        "updated_at",
        "closest_task_at",
        "custom_fields_values",
        "is_deleted",
        "account_id",
        "_embedded",
        "_embedded[tags]",
        "_embedded[tags][0]",
        "_embedded[tags][0][id]",
        "_embedded[tags][0][name]",
        "_embedded[tags][0][color]",
        "_embedded[contacts]",
        "_embedded[contacts][0]",
        "_embedded[contacts][0][id]",
        "_embedded[customers]",
        "_embedded[customers][0]",
        "_embedded[customers][0][id]",
        "_embedded[leads]",
        "_embedded[leads][0]",
        "_embedded[leads][0][id]",
        "_embedded[catalog_elements]",
        "_embedded[catalog_elements][0]",
        "_embedded[catalog_elements][0][id]",
        "_embedded[catalog_elements][0][metadata]",
        "_embedded[catalog_elements][0][quantity]",
        "_embedded[catalog_elements][0][catalog_id]",
        "_embedded[catalog_elements][0][price_id]"
    ],

    responseCodes: [
        {
            code: 200,
            description: "Запрос выполнен успешно"
        },
        {
            code: 204,
            description: "Контакт с указанным ID не существует"
        },
        {
            code: 401,
            description: "Пользователь не авторизован"
        }
    ],

    notes: [
        "Идентификатор компании передается в URL запроса.",
        "Для получения связанных сущностей используется параметр with."
    ],

    relatedMethods: [
        "get-companies",
        "add-companies",
        "update-companies"
    ]
},

{
    id: "add-companies",
    entity: "companies",

    title: "Добавление компаний",

    method: "POST",
    endpoint: "/api/v4/companies",

    description: "Метод позволяет добавлять компании в аккаунт пакетно.",

    restrictions: [
        "Метод доступен в соответствии с правами пользователя."
    ],

    mainRequestParams: [
        "name",
        "responsible_user_id",
        "created_by",
        "updated_by",
        "created_at",
        "updated_at",
        "custom_fields_values",
        "tags_to_add",
        "tags_to_add[0]",
        "tags_to_add[0][id]",
        "tags_to_add[0][name]",
        "_embedded",
        "_embedded[tags]",
        "_embedded[tags][0]",
        "_embedded[tags][0][id]",
        "_embedded[tags][0][name]",
        "request_id"
    ],

    responseParams: [
        "id",
        "request_id"
    ],

    responseCodes: [
        {
            code: 200,
            description: "Компании были успешно созданы"
        },
        {
            code: 401,
            description: "Пользователь не авторизован"
        },
        {
            code: 400,
            description: "Переданы некорректные данные. Подробности доступны в теле ответа"
        }
    ],

    notes: [
        "Обязательных полей для добавления нет."
    ],

    relatedMethods: [
        "get-companies",
        "get-company-by-id",
        "update-companies"
    ]
},

{
    id: "update-companies",
    entity: "companies",

    title: "Редактирование компаний",

    method: "PATCH",
    endpoint: "/api/v4/companies",

    description: "Метод позволяет редактировать компании пакетно. Также возможно редактирование конкретной компании через добавление ID в URL запроса (/api/v4/companies/{id}).",

    restrictions: [
        "Метод доступен в соответствии с правами пользователя."
    ],

    mainRequestParams: [
        "name",
        "responsible_user_id",
        "created_by",
        "updated_by",
        "created_at",
        "updated_at",
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
            description: "Компании были успешно изменены"
        },
        {
            code: 401,
            description: "Пользователь не авторизован"
        },
        {
            code: 400,
            description: "Переданы некорректные данные. Подробности доступны в теле ответа"
        }
    ],

    notes: [
        "При редактировании пакетно передается массив из объектов-компаний.",
        "При редактировании одной компании передается модель компании."
    ],

    relatedMethods: [
        "get-companies",
        "get-company-by-id",
        "add-companies"
    ]
}
],

customers: [
{
    id: "update-customers-mode",
    entity: "customers",

    title: "Включение покупателей и смена их режима",

    method: "PATCH",
    endpoint: "/api/v4/customers/mode",

    description: "Метод позволяет включать или выключать функционал покупателей, а также менять режим функционала.",

    restrictions: [
        "Метод доступен только с правами администратора аккаунта."
    ],

    mainRequestParams: [
        "mode",
        "is_enabled"
    ],

    responseParams: [
        "mode",
        "is_enabled"
    ],

    responseCodes: [
        {
            code: 200,
            description: "Режим покупателей успешно изменен"
        },
        {
            code: 402,
            description: "Тариф не позволяет включать покупателей"
        },
        {
            code: 401,
            description: "Пользователь не авторизован"
        },
        {
            code: 400,
            description: "Переданы некорректные данные. Подробности доступны в теле ответа"
        }
    ],

    notes: [
        "Для изменения режима покупателей обязательны параметры mode и is_enabled."
    ],

    relatedMethods: [
        "get-customers"
    ]
},

{
    id: "get-customers",
    entity: "customers",

    title: "Получение списка покупателей",

    method: "GET",
    endpoint: "/api/v4/customers",

    description: "Метод позволяет получить список покупателей в аккаунте.",

    restrictions: [
        "Метод доступен в соответствии с правами пользователя."
    ],

    mainRequestParams: [
        "with",
        "page",
        "limit",
        "query",
        "filter"
    ],

    mainResponseParams: [
        "id",
        "name",
        "next_price",
        "next_date",
        "responsible_user_id",
        "status_id",
        "created_at",
        "updated_at"
    ],

    responseParams: [
        "id",
        "name",
        "next_price",
        "next_date",
        "responsible_user_id",
        "status_id",
        "periodicity",
        "created_by",
        "updated_by",
        "created_at",
        "updated_at",
        "closest_task_at",
        "is_deleted",
        "custom_fields_values",
        "ltv",
        "purchases_count",
        "average_check",
        "account_id",
        "_embedded",
        "_embedded[segments]",
        "_embedded[segments][0]",
        "_embedded[segments][0][id]",
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
        "_embedded[catalog_elements][0][price_id]"
    ],

    responseCodes: [
        {
            code: 200,
            description: "Запрос выполнен успешно"
        },
        {
            code: 401,
            description: "Пользователь не авторизован"
        }
    ],

    notes: [
        "Связанные сущности возвращаются в блоке _embedded.",
        "Для получения контактов, компаний и элементов списков необходимо использовать параметр with."
    ],

    relatedMethods: [
        "update-customers-mode"
    ]
},

{
    id: "get-customer-by-id",
    entity: "customers",

    title: "Получение покупателя по ID",

    method: "GET",
    endpoint: "/api/v4/customers/{id}",

    description: "Метод позволяет получить данные конкретного покупателя по ID.",

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
        "next_price",
        "next_date",
        "responsible_user_id",
        "status_id",
        "created_at",
        "updated_at"
    ],

    responseParams: [
        "id",
        "name",
        "next_price",
        "next_date",
        "responsible_user_id",
        "status_id",
        "periodicity",
        "created_by",
        "updated_by",
        "created_at",
        "updated_at",
        "closest_task_at",
        "is_deleted",
        "custom_fields_values",
        "ltv",
        "purchases_count",
        "average_check",
        "account_id",
        "_embedded",
        "_embedded[segments]",
        "_embedded[segments][0]",
        "_embedded[segments][0][id]",
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
        "_embedded[catalog_elements][0][price_id]"
    ],

    responseCodes: [
        {
            code: 200,
            description: "Запрос выполнен успешно"
        },
        {
            code: 204,
            description: "Покупатель с указанным ID не существует"
        },
        {
            code: 401,
            description: "Пользователь не авторизован"
        }
    ],

    notes: [
        "Идентификатор покупателя передается в URL запроса.",
        "Для получения связанных сущностей используется параметр with."
    ],

    relatedMethods: [
        "get-customers",
        "add-customers",
        "update-customers"
    ]
},

{
    id: "add-customers",
    entity: "customers",

    title: "Добавление покупателей",

    method: "POST",
    endpoint: "/api/v4/customers",

    description: "Метод позволяет добавлять покупателей в аккаунт пакетно.",

    restrictions: [
        "Метод доступен в соответствии с правами пользователя."
    ],

    mainRequestParams: [
        "name",
        "next_price",
        "next_date",
        "responsible_user_id",
        "status_id",
        "periodicity",
        "created_by",
        "updated_by",
        "created_at",
        "updated_at",
        "custom_fields_values",
        "tags_to_add",
        "tags_to_add[0]",
        "tags_to_add[0][id]",
        "tags_to_add[0][name]",
        "_embedded",
        "_embedded[tags]",
        "_embedded[tags][0]",
        "_embedded[tags][0][id]",
        "_embedded[tags][0][name]",
        "_embedded[segments]",
        "_embedded[segments][0]",
        "_embedded[segments][0][id]",
        "request_id"
    ],

    responseParams: [
        "id",
        "request_id"
    ],

    responseCodes: [
        {
            code: 200,
            description: "Покупатели были успешно созданы"
        },
        {
            code: 401,
            description: "Пользователь не авторизован"
        },
        {
            code: 400,
            description: "Переданы некорректные данные. Подробности доступны в теле ответа"
        }
    ],

    notes: [
        "При включенном режиме периодичности обязательным является параметр next_date.",
        "Покупатели создаются пакетно."
    ],

    relatedMethods: [
        "get-customers",
        "get-customer-by-id",
        "update-customers"
    ]
},

{
    id: "update-customers",
    entity: "customers",

    title: "Редактирование покупателей",

    method: "PATCH",
    endpoint: "/api/v4/customers",

    description: "Метод позволяет редактировать покупателей пакетно. Также возможно редактирование конкретного покупателя через добавление ID в URL запроса (/api/v4/customers/{id}).",

    restrictions: [
        "Метод доступен в соответствии с правами пользователя."
    ],

    mainRequestParams: [
        "name",
        "next_price",
        "next_date",
        "responsible_user_id",
        "status_id",
        "periodicity",
        "created_by",
        "updated_by",
        "created_at",
        "updated_at",
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
        "_embedded[tags][0][name]",
        "request_id"
    ],

    responseParams: [
        "id",
        "updated_at",
        "request_id"
    ],

    responseCodes: [
        {
            code: 200,
            description: "Покупатели были успешно изменены"
        },
        {
            code: 401,
            description: "Пользователь не авторизован"
        },
        {
            code: 400,
            description: "Переданы некорректные данные. Подробности доступны в теле ответа"
        }
    ],

    notes: [
        "При редактировании пакетно передается массив из объектов-покупателей.",
        "Для редактирования одного покупателя используется модель покупателя с указанием ID.",
        "Обязательных полей для редактирования нет."
    ],

    relatedMethods: [
        "get-customers",
        "get-customer-by-id",
        "add-customers"
    ]
},

{
    id: "get-customer-transactions",
    entity: "customers",

    title: "Получение списка транзакций покупателей",

    method: "GET",
    endpoint: "/api/v4/customers/transactions",

    description: "Метод позволяет получить список транзакций в аккаунте. Также возможно получение транзакций конкретного покупателя через метод /api/v4/customers/{customer_id}/transactions.",

    restrictions: [
        "Метод доступен в соответствии с правами пользователя."
    ],

    mainRequestParams: [
        "page",
        "limit",
        "filter"
    ],

    mainResponseParams: [
        "id",
        "comment",
        "price",
        "completed_at",
        "customer_id",
        "created_at",
        "updated_at"
    ],

    responseParams: [
        "id",
        "comment",
        "price",
        "completed_at",
        "customer_id",
        "created_by",
        "updated_by",
        "created_at",
        "updated_at",
        "is_deleted",
        "account_id",
        "_embedded",
        "_embedded[customer]",
        "_embedded[customer][id]",
        "_embedded[catalog_elements]",
        "_embedded[catalog_elements][0]",
        "_embedded[catalog_elements][0][id]",
        "_embedded[catalog_elements][0][metadata]",
        "_embedded[catalog_elements][0][quantity]",
        "_embedded[catalog_elements][0][catalog_id]"
    ],

    responseCodes: [
        {
            code: 200,
            description: "Запрос выполнен успешно"
        },
        {
            code: 401,
            description: "Пользователь не авторизован"
        }
    ],

    notes: [
        "Для получения транзакций конкретного покупателя используется URL /api/v4/customers/{customer_id}/transactions."
    ],

    relatedMethods: [
        "get-customers",
        "get-customer-by-id"
    ]
},

{
    id: "get-customer-transaction-by-id",
    entity: "customers",

    title: "Получение транзакции по ID",

    method: "GET",
    endpoint: "/api/v4/customers/transactions/{id}",

    description: "Метод позволяет получить транзакцию в аккаунте. Также можно получить транзакцию конкретного покупателя через метод /api/v4/customers/{customer_id}/transactions/{id}.",

    restrictions: [
        "Метод доступен в соответствии с правами пользователя."
    ],

    requestParams: [
        "id"
    ],

    responseParams: [
        "id",
        "comment",
        "price",
        "completed_at",
        "customer_id",
        "created_by",
        "updated_by",
        "created_at",
        "updated_at",
        "is_deleted",
        "account_id",
        "_embedded",
        "_embedded[customer]",
        "_embedded[customer][id]",
        "_embedded[catalog_elements]",
        "_embedded[catalog_elements][0]",
        "_embedded[catalog_elements][0][id]",
        "_embedded[catalog_elements][0][metadata]",
        "_embedded[catalog_elements][0][quantity]",
        "_embedded[catalog_elements][0][catalog_id]"
    ],

    responseCodes: [
        {
            code: 200,
            description: "Запрос выполнен успешно"
        },
        {
            code: 401,
            description: "Пользователь не авторизован"
        }
    ],

    notes: [
        "Идентификатор транзакции передается в URL запроса."
    ],

    relatedMethods: [
        "add-customer-transactions"
    ]
},

{
    id: "add-customer-transactions",
    entity: "customers",

    title: "Добавление транзакций к покупателю",

    method: "POST",
    endpoint: "/api/v4/customers/{customer_id}/transactions",

    description: "Метод позволяет добавлять транзакции к конкретному покупателю в аккаунт пакетно.",

    restrictions: [
        "Метод доступен в соответствии с правами пользователя."
    ],

    requestParams: [
        "customer_id"
    ],

    mainRequestParams: [
        "comment",
        "price",
        "completed_at",
        "next_price",
        "next_date",
        "created_by",
        "_embedded[catalog_elements]",
        "_embedded[catalog_elements][0]",
        "_embedded[catalog_elements][0][id]",
        "_embedded[catalog_elements][0][metadata]",
        "_embedded[catalog_elements][0][quantity]",
        "_embedded[catalog_elements][0][catalog_id]",
        "request_id"
    ],

    responseParams: [
        "id",
        "customer_id",
        "request_id"
    ],

    responseCodes: [
        {
            code: 200,
            description: "Транзакции были успешно созданы"
        },
        {
            code: 401,
            description: "Пользователь не авторизован"
        },
        {
            code: 400,
            description: "Переданы некорректные данные. Подробности доступны в теле ответа"
        }
    ],

    notes: [
        "Обязательное поле — price.",
        "Метод позволяет добавлять транзакции пакетно."
    ],

    relatedMethods: [
        "get-customer-transaction-by-id"
    ]
},

{
    id: "delete-customer-transaction",
    entity: "customers",

    title: "Удаление транзакции",

    method: "DELETE",
    endpoint: "/api/v4/customers/transactions/{id}",

    description: "Метод позволяет удалить транзакцию в аккаунте.",

    restrictions: [
        "Метод доступен в соответствии с правами пользователя."
    ],

    responseCodes: [
        {
            code: 204,
            description: "Транзакция была успешно удалена"
        },
        {
            code: 401,
            description: "Пользователь не авторизован"
        },
        {
            code: 400,
            description: "Переданы некорректные данные. Подробности доступны в теле ответа"
        }
    ],

    notes: [
        "Метод также поддерживает удаление транзакции конкретного покупателя через /api/v4/customers/{customer_id}/transactions/{id}.",
        "Метод не возвращает тело ответа."
    ],

    relatedMethods: [
        "get-customer-transaction-by-id",
        "add-customer-transactions"
    ]
},

{
    id: "update-customer-bonus-points",
    entity: "customers",

    title: "Списание/начисление бонусных баллов покупателю",

    method: "POST",
    endpoint: "/api/v4/customers/{id}/bonus_points",

    description: "Метод позволяет списывать/начислять бонусные баллы покупателю по ID. Взаимодействует с системой карт лояльности amoCRM.",

    restrictions: [
        "Метод доступен в соответствии с правами пользователя."
    ],

    mainRequestParams: [
        "redeem",
        "earn"
    ],

    responseParams: [
        "bonus_points"
    ],

    responseCodes: [
        {
            code: 200,
            description: "Бонусные баллы успешно начислены/списаны"
        },
        {
            code: 401,
            description: "Пользователь не авторизован"
        },
        {
            code: 400,
            description: "Переданы некорректные данные. Подробности доступны в теле ответа"
        }
    ],

    notes: [
        "Для списания баллов используется параметр redeem.",
        "Для начисления баллов используется параметр earn.",
        "Одновременная передача параметров redeem и earn запрещена."
    ],

    relatedMethods: [
        "get-customers",
        "get-customer-by-id"
    ]
}
],


tasks:[
    {
    id: "get-tasks",
    entity: "tasks",

    title: "Список задач",

    method: "GET",
    endpoint: "/api/v4/tasks",

    description: "Метод позволяет получить список задач в аккаунте.",

    restrictions: [
        "Метод доступен в соответствии с правами пользователя."
    ],

    mainRequestParams: [
        "page",
        "limit",
        "filter",
        "filter[responsible_user_id]",
        "filter[is_completed]",
        "filter[task_type]",
        "filter[entity_type]",
        "filter[entity_id]",
        "filter[id]",
        "filter[updated_at]",
        "order"
    ],

    mainResponseParams: [
        "id",
        "responsible_user_id",
        "entity_id",
        "entity_type",
        "is_completed",
        "task_type_id",
        "text",
        "complete_till"
    ],

    responseParams: [
        "id",
        "created_by",
        "updated_by",
        "created_at",
        "updated_at",
        "responsible_user_id",
        "group_id",
        "entity_id",
        "entity_type",
        "is_completed",
        "task_type_id",
        "text",
        "duration",
        "complete_till",
        "result",
        "result[text]",
        "account_id"
    ],

    responseCodes: [
        {
            code: 200,
            description: "Запрос выполнен успешно"
        },
        {
            code: 401,
            description: "Пользователь не авторизован"
        }
    ],

    notes: [
        "Для сортировки используются поля created_at, complete_till, id.",
        "Доступные значения сортировки: asc, desc."
    ],

    relatedMethods: [
        "get-task-by-id"
    ]
},

{
    id: "get-task-by-id",
    entity: "tasks",

    title: "Получение задачи по ID",

    method: "GET",
    endpoint: "/api/v4/tasks/{id}",

    description: "Метод позволяет получить данные конкретной задачи по ID.",

    restrictions: [
        "Метод доступен в соответствии с правами пользователя."
    ],

    requestParams: [
        "id"
    ],

    responseParams: [
        "id",
        "created_by",
        "updated_by",
        "created_at",
        "updated_at",
        "responsible_user_id",
        "group_id",
        "entity_id",
        "entity_type",
        "is_completed",
        "task_type_id",
        "text",
        "duration",
        "complete_till",
        "result",
        "result[text]",
        "account_id"
    ],

    responseCodes: [
        {
            code: 200,
            description: "Запрос выполнен успешно"
        },
        {
            code: 401,
            description: "Пользователь не авторизован"
        }
    ],

    notes: [
        "Идентификатор задачи передается в URL запроса."
    ],

    relatedMethods: [
        "get-tasks"
    ]
},

{
    id: "add-tasks",
    entity: "tasks",

    title: "Добавление задач",

    method: "POST",
    endpoint: "/api/v4/tasks",

    description: "Метод позволяет добавлять задачи в аккаунт пакетно.",

    restrictions: [
        "Метод доступен в соответствии с правами пользователя."
    ],

    mainRequestParams: [
        "responsible_user_id",
        "entity_id",
        "entity_type",
        "is_completed",
        "task_type_id",
        "text",
        "duration",
        "complete_till",
        "result",
        "result[text]",
        "created_by",
        "updated_by",
        "created_at",
        "updated_at",
        "request_id"
    ],

    responseParams: [
        "id",
        "request_id"
    ],

    responseCodes: [
        {
            code: 200,
            description: "Задачи были успешно созданы"
        },
        {
            code: 401,
            description: "Пользователь не авторизован"
        },
        {
            code: 400,
            description: "Переданы некорректные данные. Подробности доступны в теле ответа"
        }
    ],

    notes: [
        "Обязательные параметры при создании задачи: text и complete_till.",
        "Метод позволяет создавать задачи пакетно."
    ],

    relatedMethods: [
        "get-tasks",
        "get-task-by-id",
        "update-tasks"
    ]
},

{
    id: "update-tasks",
    entity: "tasks",

    title: "Редактирование задач",

    method: "PATCH",
    endpoint: "/api/v4/tasks",

    description: "Метод позволяет редактировать задачи пакетно. Также возможно редактирование конкретной задачи через добавление ID в URL запроса (/api/v4/tasks/{id}).",

    restrictions: [
        "Метод доступен в соответствии с правами пользователя."
    ],

    mainRequestParams: [
        "id",
        "responsible_user_id",
        "entity_id",
        "entity_type",
        "is_completed",
        "task_type_id",
        "text",
        "duration",
        "complete_till",
        "result",
        "result[text]",
        "created_by",
        "updated_by",
        "created_at",
        "updated_at",
        "request_id"
    ],

    responseParams: [
        "id",
        "updated_at",
        "request_id"
    ],

    responseCodes: [
        {
            code: 200,
            description: "Задачи были успешно изменены"
        },
        {
            code: 401,
            description: "Пользователь не авторизован"
        },
        {
            code: 400,
            description: "Переданы некорректные данные. Подробности доступны в теле ответа"
        }
    ],

    notes: [
        "При редактировании пакетно передается массив из объектов-задач.",
        "При редактировании одной задачи передается модель задачи."
    ],

    relatedMethods: [
        "get-tasks",
        "get-task-by-id",
        "add-tasks"
    ]
},

{
    id: "complete-task",
    entity: "tasks",

    title: "Выполнение задачи",

    method: "PATCH",
    endpoint: "/api/v4/tasks",

    description: "Метод позволяет выполнить задачу. Выполнение задачи является частным случаем редактирования.",

    restrictions: [
        "Метод доступен в соответствии с правами пользователя."
    ],

    mainRequestParams: [
        "is_completed",
        "result",
        "result[text]"
    ],

    mainResponseParams: [
        "id",
        "updated_at"
    ],

    responseParams: [
        "id",
        "updated_at",
        "request_id",
        "_links",
        "_links[self]",
        "_links[self][href]"
    ],

    responseCodes: [
        {
            code: 200,
            description: "Списки были успешно изменены"
        },
        {
            code: 401,
            description: "Пользователь не авторизован"
        },
        {
            code: 400,
            description: "Переданы некорректные данные. Подробности доступны в теле ответа"
        }
    ],

    notes: [
        "Для завершения задачи необходимо передать свойства is_completed и result.",
        "Метод поддерживает пакетное редактирование и редактирование конкретной задачи через добавление ID в URL."
    ],

    relatedMethods: [
        "get-tasks",
        "get-task-by-id",
        "add-tasks",
        "update-tasks"
    ]
},
],

users:[
{
    id: "get-users",
    entity: "users",

    title: "Получение списка пользователей",

    method: "GET",
    endpoint: "/api/v4/users",

    description: "Метод позволяет получить список состоящих в аккаунте пользователей.",

    restrictions: [
        "Метод доступен только с правами администратора аккаунта."
    ],

    mainRequestParams: [
        "with",
        "page",
        "limit"
    ],

    mainResponseParams: [
        "id",
        "name",
        "email",
        "lang"
    ],

    responseParams: [
        "id",
        "name",
        "email",
        "lang",
        "rights",
        "rights[leads]",
        "rights[contacts]",
        "rights[companies]",
        "rights[tasks]",
        "rights[mail_access]",
        "rights[catalog_access]",
        "rights[is_admin]",
        "rights[is_free]",
        "rights[is_active]",
        "rights[group_id]",
        "rights[role_id]",
        "rights[status_rights]",
        "rights[status_rights][0]",
        "rights[status_rights][0][entity_type]",
        "rights[status_rights][0][pipeline_id]",
        "rights[status_rights][0][status_id]",
        "rights[status_rights][0][rights]"
    ],

    responseCodes: [
        {
            code: 200,
            description: "Запрос выполнен успешно"
        },
        {
            code: 403,
            description: "Не хватает прав для вызова данного метода"
        },
        {
            code: 401,
            description: "Пользователь не авторизован"
        }
    ],

    notes: [
        "Для получения дополнительных данных пользователя используется параметр with.",
        "Объекты прав пользователя содержат доступные действия и уровень доступа."
    ],

    relatedMethods: [
        "get-user-by-id",
        "add-users"
    ]
},

{
    id: "get-user-by-id",
    entity: "users",

    title: "Получение пользователя по ID",

    method: "GET",
    endpoint: "/api/v4/users/{id}",

    description: "Метод позволяет получить данные конкретного пользователя, состоящего в аккаунте, по ID.",

    restrictions: [
        "Метод доступен только с правами администратора аккаунта."
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
        "email",
        "lang"
    ],

    responseParams: [
        "id",
        "name",
        "email",
        "lang",
        "rights",
        "rights[leads]",
        "rights[contacts]",
        "rights[companies]",
        "rights[tasks]",
        "rights[mail_access]",
        "rights[catalog_access]",
        "rights[is_admin]",
        "rights[is_free]",
        "rights[is_active]",
        "rights[group_id]",
        "rights[role_id]",
        "rights[status_rights]",
        "rights[status_rights][0]",
        "rights[status_rights][0][entity_type]",
        "rights[status_rights][0][pipeline_id]",
        "rights[status_rights][0][status_id]",
        "rights[status_rights][0][rights]"
    ],

    responseCodes: [
        {
            code: 200,
            description: "Запрос выполнен успешно"
        },
        {
            code: 403,
            description: "Не хватает прав для вызова данного метода"
        },
        {
            code: 401,
            description: "Пользователь не авторизован"
        }
    ],

    notes: [
        "Идентификатор пользователя передается в URL запроса.",
        "Для получения дополнительных данных пользователя используется параметр with."
    ],

    relatedMethods: [
        "get-users",
        "add-users"
    ]
},

{
    id: "add-users",
    entity: "users",

    title: "Добавление пользователей",

    method: "POST",
    endpoint: "/api/v4/users",

    description: "Метод позволяет добавлять пользователей в аккаунт пакетно.",

    restrictions: [
        "Метод доступен только с правами администратора аккаунта.",
        "Метод позволяет добавлять не более 10 пользователей за один запрос."
    ],

    mainRequestParams: [
        "name",
        "email",
        "password",
        "lang",
        "rights",
        "rights[leads]",
        "rights[contacts]",
        "rights[companies]",
        "rights[tasks]",
        "rights[status_rights]",
        "rights[mail_access]",
        "rights[catalog_access]",
        "rights[is_free]",
        "rights[role_id]",
        "rights[group_id]",
        "request_id"
    ],

    responseParams: [
        "id",
        "name",
        "email",
        "lang",
        "rights",
        "request_id"
    ],

    responseCodes: [
        {
            code: 201,
            description: "Пользователи были успешно созданы"
        },
        {
            code: 403,
            description: "Не хватает прав для вызова данного метода"
        },
        {
            code: 401,
            description: "Пользователь не авторизован"
        },
        {
            code: 400,
            description: "Переданы некорректные данные. Подробности доступны в теле ответа"
        }
    ],

    notes: [
        "При создании пользователя обязательными являются поля name, email и password.",
        "Права пользователя могут быть заданы через объект rights или ролью role_id."
    ],

    relatedMethods: [
        "get-users",
        "get-user-by-id"
    ]
},

{
    id: "activate-users",
    entity: "users",

    title: "Активация пользователей",

    method: "POST",
    endpoint: "/api/v4/users/activate",

    description: "Метод позволяет активировать пользователей в аккаунте пакетно.",

    restrictions: [
        "Метод доступен только с правами администратора аккаунта.",
        "Метод позволяет активировать не более 10 пользователей за один запрос.",
        "Метод не позволяет активировать пользователей с правами администратора.",
        "Метод доступен на Enterprise тарифе."
    ],

    mainRequestParams: [
        "id"
    ],

    mainResponseParams: [],

    responseParams: [],

    responseCodes: [
        {
            code: 202,
            description: "Запрос выполнен успешно"
        },
        {
            code: 403,
            description: "Не хватает прав для вызова данного метода"
        },
        {
            code: 401,
            description: "Пользователь не авторизован"
        },
        {
            code: 400,
            description: "Переданы некорректные данные. Подробности доступны в теле ответа"
        }
    ],

    notes: [
        "Для активации пользователей необходимо передать обязательный параметр id пользователя.",
        "Метод не возвращает ответ при успешном запросе."
    ],

    relatedMethods: [
        "deactivate-users",
        "get-users",
        "get-user-by-id"
    ]
},

{
    id: "deactivate-users",
    entity: "users",

    title: "Деактивация пользователей",

    method: "POST",
    endpoint: "/api/v4/users/deactivate",

    description: "Метод позволяет деактивировать пользователей в аккаунте пакетно.",

    restrictions: [
        "Метод доступен только с правами администратора аккаунта.",
        "Метод позволяет деактивировать не более 10 пользователей за один запрос.",
        "Метод не позволяет деактивировать пользователей с правами администратора.",
        "Метод доступен на Enterprise тарифе."
    ],

    mainRequestParams: [
        "id"
    ],

    mainResponseParams: [],

    responseParams: [],

    responseCodes: [
        {
            code: 204,
            description: "Запрос выполнен успешно"
        },
        {
            code: 403,
            description: "Не хватает прав для вызова данного метода"
        },
        {
            code: 401,
            description: "Пользователь не авторизован"
        },
        {
            code: 400,
            description: "Переданы некорректные данные. Подробности доступны в теле ответа"
        }
    ],

    notes: [
        "Для деактивации пользователей необходимо передать обязательный параметр id пользователя.",
        "Метод не возвращает ответ при успешном запросе."
    ],

    relatedMethods: [
        "activate-users",
        "get-users",
        "get-user-by-id"
    ]
},

{
    id: "get-roles",
    entity: "roles",

    title: "Список ролей пользователей",

    method: "GET",
    endpoint: "/api/v4/roles",

    description: "Метод позволяет получить список ролей пользователей в аккаунте.",

    restrictions: [
        "Метод доступен только с правами администратора аккаунта."
    ],

    mainRequestParams: [
        "with",
        "page",
        "limit"
    ],

    mainResponseParams: [
        "id",
        "name",
        "rights"
    ],

    responseParams: [
        "id",
        "name",
        "rights",
        "rights[leads]",
        "rights[contacts]",
        "rights[companies]",
        "rights[tasks]",
        "rights[mail_access]",
        "rights[catalog_access]",
        "rights[is_admin]",
        "rights[is_free]",
        "rights[is_active]",
        "rights[group_id]",
        "rights[role_id]",
        "rights[status_rights]",
        "rights[status_rights][0]",
        "rights[status_rights][0][entity_type]",
        "rights[status_rights][0][pipeline_id]",
        "rights[status_rights][0][status_id]",
        "rights[status_rights][0][rights]",
        "_embedded[users]"
    ],

    responseCodes: [
        {
            code: 200,
            description: "Запрос выполнен успешно"
        },
        {
            code: 403,
            description: "Не хватает прав для вызова данного метода"
        },
        {
            code: 401,
            description: "Пользователь не авторизован"
        }
    ],

    notes: [
        "Параметр with позволяет добавить дополнительные данные в ответ.",
        "Объект rights содержит права доступа роли.",
        "Поле _embedded[users] содержит ID пользователей, у которых установлена данная роль."
    ],

    relatedMethods: [
        "get-users",
        "get-user-by-id"
    ]
},
{
    id: "get-role-by-id",
    entity: "roles",

    title: "Получение роли по ID",

    method: "GET",
    endpoint: "/api/v4/roles/{id}",

    description: "Метод позволяет получить данные конкретной роли аккаунта по ID.",

    restrictions: [
        "Метод доступен только с правами администратора аккаунта."
    ],

    mainRequestParams: [
        "with"
    ],

    mainResponseParams: [
        "id",
        "name",
        "rights"
    ],

    responseParams: [
        "id",
        "name",
        "rights",
        "rights[leads]",
        "rights[contacts]",
        "rights[companies]",
        "rights[tasks]",
        "rights[mail_access]",
        "rights[catalog_access]",
        "rights[is_admin]",
        "rights[is_free]",
        "rights[is_active]",
        "rights[group_id]",
        "rights[role_id]",
        "rights[status_rights]",
        "rights[status_rights][0]",
        "rights[status_rights][0][entity_type]",
        "rights[status_rights][0][pipeline_id]",
        "rights[status_rights][0][status_id]",
        "rights[status_rights][0][rights]",
        "_embedded[users]"
    ],

    responseCodes: [
        {
            code: 200,
            description: "Запрос выполнен успешно"
        },
        {
            code: 403,
            description: "Не хватает прав для вызова данного метода"
        },
        {
            code: 401,
            description: "Пользователь не авторизован"
        }
    ],

    notes: [
        "Параметр with позволяет добавить в ответ ID пользователей, у которых установлена роль.",
        "Объект rights содержит права доступа роли."
    ],

    relatedMethods: [
        "get-roles",
        "add-roles",
        "update-role"
    ]
},

{
    id: "add-roles",
    entity: "roles",

    title: "Добавление ролей",

    method: "POST",
    endpoint: "/api/v4/roles",

    description: "Метод позволяет добавлять роли в аккаунт пакетно.",

    restrictions: [
        "Метод доступен только с правами администратора аккаунта."
    ],

    mainRequestParams: [
        "name",
        "rights"
    ],

    mainResponseParams: [
        "id",
        "name",
        "rights"
    ],

    responseParams: [
        "id",
        "name",
        "rights",
        "rights[leads]",
        "rights[contacts]",
        "rights[companies]",
        "rights[tasks]",
        "rights[mail_access]",
        "rights[catalog_access]",
        "rights[status_rights]",
        "rights[status_rights][0]",
        "rights[status_rights][0][entity_type]",
        "rights[status_rights][0][pipeline_id]",
        "rights[status_rights][0][status_id]",
        "rights[status_rights][0][rights]",
        "request_id"
    ],

    responseCodes: [
        {
            code: 201,
            description: "Роли были успешно созданы"
        },
        {
            code: 403,
            description: "Не хватает прав для вызова данного метода"
        },
        {
            code: 401,
            description: "Пользователь не авторизован"
        },
        {
            code: 400,
            description: "Переданы некорректные данные. Подробности доступны в теле ответа"
        }
    ],

    notes: [
        "Параметр rights содержит права пользователя.",
        "request_id возвращается в ответе без сохранения."
    ],

    relatedMethods: [
        "get-roles",
        "get-role-by-id",
        "update-role"
    ]
},

{
    id: "update-role",
    entity: "roles",

    title: "Редактирование роли",

    method: "PATCH",
    endpoint: "/api/v4/roles/{id}",

    description: "Метод позволяет редактировать роль в аккаунте.",

    restrictions: [
        "Метод доступен только с правами администратора аккаунта."
    ],

    mainRequestParams: [
        "name",
        "rights"
    ],

    mainResponseParams: [
        "id",
        "name",
        "rights"
    ],

    responseParams: [
        "id",
        "name",
        "rights",
        "rights[leads]",
        "rights[contacts]",
        "rights[companies]",
        "rights[tasks]",
        "rights[mail_access]",
        "rights[catalog_access]",
        "rights[status_rights]",
        "rights[status_rights][0]",
        "rights[status_rights][0][entity_type]",
        "rights[status_rights][0][pipeline_id]",
        "rights[status_rights][0][status_id]",
        "rights[status_rights][0][rights]"
    ],

    responseCodes: [
        {
            code: 202,
            description: "Роль была успешно изменена"
        },
        {
            code: 403,
            description: "Не хватает прав для вызова данного метода"
        },
        {
            code: 401,
            description: "Пользователь не авторизован"
        },
        {
            code: 400,
            description: "Переданы некорректные данные. Подробности доступны в теле ответа"
        }
    ],

    notes: [
        "Обязательных полей нет, но запрос не может быть пустым.",
        "Если rights[status_rights] имеет значение null или [], права на статусы сделок для роли будут удалены."
    ],

    relatedMethods: [
        "get-roles",
        "get-role-by-id",
        "add-roles"
    ]
},
{
    id: "delete-role",
    entity: "roles",

    title: "Удаление роли",

    method: "DELETE",
    endpoint: "/api/v4/roles/{id}",

    description: "Метод позволяет удалить роль в аккаунте.",

    restrictions: [
        "Метод доступен только с правами администратора аккаунта."
    ],

    mainRequestParams: [],

    mainResponseParams: [],

    responseParams: [],

    responseCodes: [
        {
            code: 204,
            description: "Роль была успешно удалена"
        },
        {
            code: 403,
            description: "Не хватает прав для вызова данного метода"
        },
        {
            code: 401,
            description: "Пользователь не авторизован"
        },
        {
            code: 400,
            description: "Переданы некорректные данные. Подробности доступны в теле ответа"
        }
    ],

    notes: [
        "Метод не возвращает тело ответа при успешном удалении."
    ],

    relatedMethods: [
        "get-roles",
        "get-role-by-id",
        "add-roles",
        "update-role"
    ]
}    
],

pipelines:[
    {
    id: "get-lead-pipelines",
    entity: "lead-pipelines",

    title: "Список воронок сделок",

    method: "GET",
    endpoint: "/api/v4/leads/pipelines",

    description: "Метод позволяет получить список воронок сделок в аккаунте.",

    restrictions: [
        "Метод доступен всем пользователям аккаунта."
    ],

    mainRequestParams: [],

    mainResponseParams: [
        "id",
        "name",
        "sort",
        "is_main",
        "is_unsorted_on"
    ],

    responseParams: [
        "id",
        "name",
        "sort",
        "is_main",
        "is_unsorted_on",
        "is_archive",
        "account_id",
        "_embedded[statuses]"
    ],

    responseCodes: [
        {
            code: 200,
            description: "Запрос выполнен успешно"
        },
        {
            code: 401,
            description: "Пользователь не авторизован"
        }
    ],

    notes: [
        "Метод возвращает коллекцию воронок сделок.",
        "В ответе могут содержаться статусы, связанные с воронкой."
    ],

    relatedMethods: [
        "get-lead-pipeline-by-id",
        "add-lead-pipelines"
    ]
},
{
    id: "get-lead-pipeline-by-id",
    entity: "lead-pipelines",

    title: "Получение воронки сделок по ID",

    method: "GET",
    endpoint: "/api/v4/leads/pipelines/{id}",

    description: "Метод позволяет получить модель воронки сделок.",

    restrictions: [
        "Метод доступен всем пользователям аккаунта."
    ],

    mainRequestParams: [
        "id"
    ],

    mainResponseParams: [
        "id",
        "name",
        "sort",
        "is_main",
        "is_unsorted_on"
    ],

    responseParams: [
        "id",
        "name",
        "sort",
        "is_main",
        "is_unsorted_on",
        "is_archive",
        "account_id",
        "_embedded[statuses]"
    ],

    responseCodes: [
        {
            code: 200,
            description: "Запрос выполнен успешно"
        },
        {
            code: 401,
            description: "Пользователь не авторизован"
        }
    ],

    notes: [
        "Метод возвращает одну модель воронки."
    ],

    relatedMethods: [
        "get-lead-pipelines",
        "add-lead-pipelines"
    ]
},
{
    id: "add-lead-pipelines",
    entity: "lead-pipelines",

    title: "Добавление воронок",

    method: "POST",
    endpoint: "/api/v4/leads/pipelines",

    description: "Метод позволяет добавлять воронки в аккаунт пакетно.",

    restrictions: [
        "Метод доступен только с правами администратора аккаунта."
    ],

    mainRequestParams: [
        "name",
        "sort",
        "is_main",
        "is_unsorted_on"
    ],

    requestParams: [
        "name",
        "sort",
        "is_main",
        "is_unsorted_on",
        "_embedded[statuses]",
        "request_id"
    ],

    mainResponseParams: [
        "id",
        "name",
        "sort",
        "is_main",
        "is_unsorted_on"
    ],

    responseParams: [
        "id",
        "name",
        "sort",
        "is_main",
        "is_unsorted_on",
        "account_id",
        "request_id",
        "_embedded[statuses]"
    ],

    responseCodes: [
        {
            code: 200,
            description: "Воронки были успешно созданы"
        },
        {
            code: 422,
            description: "Переданные данные не могут быть обработаны. Подробности доступны в теле ответа"
        },
        {
            code: 403,
            description: "Не хватает прав для вызова данного метода"
        },
        {
            code: 401,
            description: "Пользователь не авторизован"
        },
        {
            code: 400,
            description: "Переданы некорректные данные. Подробности доступны в теле ответа"
        }
    ],

    notes: [
        "Метод работает пакетно.",
        "Можно передать статусы воронки через _embedded[statuses].",
        "Параметр request_id возвращается без сохранения."
    ],

    relatedMethods: [
        "get-lead-pipelines",
        "get-lead-pipeline-by-id"
    ]
},
{
    id: "update-lead-pipeline",
    entity: "leads_pipelines",
    title: "Редактирование воронки",
    method: "PATCH",
    endpoint: "/api/v4/leads/pipelines/{id}",
    description: "Метод позволяет редактировать воронку в аккаунте.",
    restrictions: [
        "Метод доступен только с правами администратора аккаунта."
    ],
    requestHeaders: {
        "Content-Type": "application/json"
    },
    requestParams: [
        {
            name: "name",
            type: "string",
            description: "Название воронки.",
            required: false
        },
        {
            name: "sort",
            type: "int",
            description: "Сортировка воронки.",
            required: false
        },
        {
            name: "is_main",
            type: "bool",
            description: "Является ли воронка главной.",
            required: false
        },
        {
            name: "is_unsorted_on",
            type: "bool",
            description: "Включено ли неразобранное в воронке.",
            required: false
        }
    ],
    responseParams: [
        {
            name: "id",
            type: "int",
            description: "ID воронки."
        },
        {
            name: "name",
            type: "string",
            description: "Название воронки."
        },
        {
            name: "sort",
            type: "int",
            description: "Сортировка воронки."
        },
        {
            name: "is_main",
            type: "bool",
            description: "Является ли воронка главной."
        },
        {
            name: "is_unsorted_on",
            type: "bool",
            description: "Включено ли неразобранное в воронке."
        },
        {
            name: "is_archive",
            type: "bool",
            description: "Является ли воронка архивной."
        },
        {
            name: "account_id",
            type: "int",
            description: "ID аккаунта, в котором находится воронка."
        },
        {
            name: "_embedded.statuses",
            type: "array",
            description: "Массив статусов, находящихся в воронке."
        }
    ],
    successCodes: [
        {
            code: 200,
            description: "Воронка была успешно изменена."
        }
    ],
    errorCodes: [
        {
            code: 403,
            description: "Не хватает прав для вызова данного метода."
        },
        {
            code: 401,
            description: "Пользователь не авторизован."
        },
        {
            code: 400,
            description: "Переданы некорректные данные. Подробности доступны в теле ответа."
        }
    ]
},
{
    id: "delete-lead-pipeline",
    entity: "leads_pipelines",
    title: "Удаление воронки",
    method: "DELETE",
    endpoint: "/api/v4/leads/pipelines/{id}",
    description: "Метод позволяет удалить воронку в аккаунте.",
    restrictions: [
        "Метод доступен только с правами администратора аккаунта.",
        "Нельзя удалить последнюю воронку в аккаунте.",
        "Нельзя удалить воронку, в которой есть сделки."
    ],
    requestHeaders: {
        "Content-Type": "application/json"
    },
    requestParams: [],
    responseParams: [],
    successCodes: [
        {
            code: 204,
            description: "Воронка была успешно удалена."
        }
    ],
    errorCodes: [
        {
            code: 403,
            description: "Не хватает прав для вызова данного метода."
        },
        {
            code: 401,
            description: "Пользователь не авторизован."
        },
        {
            code: 400,
            description: "Переданы некорректные данные. Подробности доступны в теле ответа."
        }
    ]
},
{
    id: "get-pipeline-statuses",
    entity: "lead_pipeline_statuses",
    title: "Список статусов воронки сделок",
    method: "GET",
    endpoint: "/api/v4/leads/pipelines/{pipeline_id}/statuses",
    description: "Метод позволяет получить список статусов воронки сделок в аккаунте.",
    restrictions: [
        "Метод доступен всем пользователям аккаунта."
    ],
    requestParams: [
        {
            name: "with",
            type: "string",
            description: "Добавляет дополнительные данные в ответ. Поддерживает несколько значений через запятую.",
            required: false
        }
    ],
    responseParams: [
        {
            name: "id",
            type: "int",
            description: "ID статуса."
        },
        {
            name: "name",
            type: "string",
            description: "Название статуса."
        },
        {
            name: "sort",
            type: "int",
            description: "Сортировка статуса."
        },
        {
            name: "is_editable",
            type: "bool",
            description: "Доступен ли статус для редактирования."
        },
        {
            name: "pipeline_id",
            type: "int",
            description: "ID воронки, в которой находится статус."
        },
        {
            name: "color",
            type: "string",
            description: "Цвет статуса."
        },
        {
            name: "type",
            type: "int",
            description: "Тип статуса: 1 — неразобранное, 0 — обычный статус."
        },
        {
            name: "account_id",
            type: "int",
            description: "ID аккаунта, в котором находится воронка."
        },
        {
            name: "descriptions",
            type: "array",
            description: "Описания статуса. Возвращается при использовании GET-параметра with."
        }
    ],
    successCodes: [
        {
            code: 200,
            description: "Запрос выполнен успешно."
        }
    ],
    errorCodes: [
        {
            code: 401,
            description: "Пользователь не авторизован."
        }
    ]
},
{
    id: "get-lead-pipeline-status",
    entity: "lead_pipeline_statuses",
    title: "Получение статуса воронки сделок по ID",
    method: "GET",
    endpoint: "/api/v4/leads/pipelines/{pipeline_id}/statuses/{id}",
    description: "Метод позволяет получить модель статуса воронки сделок в аккаунте по ID статуса.",
    restrictions: [
        "Метод доступен всем пользователям аккаунта."
    ],
    requestParams: [
        {
            name: "with",
            type: "string",
            description: "Добавляет дополнительные данные в ответ. Поддерживает несколько значений через запятую.",
            required: false
        }
    ],
    responseParams: [
        {
            name: "id",
            type: "int",
            description: "ID статуса."
        },
        {
            name: "name",
            type: "string",
            description: "Название статуса."
        },
        {
            name: "sort",
            type: "int",
            description: "Сортировка статуса."
        },
        {
            name: "is_editable",
            type: "bool",
            description: "Доступен ли статус для редактирования."
        },
        {
            name: "pipeline_id",
            type: "int",
            description: "ID воронки, в которой находится статус."
        },
        {
            name: "color",
            type: "string",
            description: "Цвет статуса."
        },
        {
            name: "type",
            type: "int",
            description: "Тип статуса: 1 — неразобранное, 0 — обычный статус."
        },
        {
            name: "account_id",
            type: "int",
            description: "ID аккаунта, в котором находится воронка."
        },
        {
            name: "descriptions",
            type: "array",
            description: "Описания статуса. Возвращаются при использовании GET-параметра with=descriptions."
        }
    ],
    successCodes: [
        {
            code: 200,
            description: "Запрос выполнен успешно."
        }
    ],
    errorCodes: [
        {
            code: 401,
            description: "Пользователь не авторизован."
        }
    ]
},
{
    id: "add-lead-pipeline-statuses",
    entity: "lead_pipeline_statuses",
    title: "Добавление статусов в воронку",
    method: "POST",
    endpoint: "/api/v4/leads/pipelines/{pipeline_id}/statuses",
    description: "Метод позволяет добавлять статусы воронки в аккаунт пакетно.",
    restrictions: [
        "Метод доступен только с правами администратора аккаунта.",
        "Можно создать только 3 описания статуса для разных уровней пользователя.",
        "Нельзя передавать один и тот же уровень в разных описаниях.",
        "Максимальная длина описания — 1000 символов.",
        "Можно передавать эмоджи в описаниях.",
        "Доступные уровни описаний: newbie, candidate, master."
    ],
    requestHeaders: {
        "Content-Type": "application/json"
    },
    requestParams: [
        {
            name: "name",
            type: "string",
            description: "Название статуса. Обязательный параметр.",
            required: true
        },
        {
            name: "sort",
            type: "int",
            description: "Сортировка статуса. Обязательный параметр.",
            required: true
        },
        {
            name: "color",
            type: "string",
            description: "Цвет статуса.",
            required: false
        },
        {
            name: "request_id",
            type: "string",
            description: "Поле, которое вернется в ответе без изменений и не будет сохранено.",
            required: false
        },
        {
            name: "descriptions",
            type: "array",
            description: "Описания статуса.",
            required: false
        }
    ],
    responseParams: [
        {
            name: "id",
            type: "int",
            description: "ID созданного статуса."
        },
        {
            name: "name",
            type: "string",
            description: "Название статуса."
        },
        {
            name: "sort",
            type: "int",
            description: "Сортировка статуса."
        },
        {
            name: "pipeline_id",
            type: "int",
            description: "ID воронки."
        },
        {
            name: "color",
            type: "string",
            description: "Цвет статуса."
        },
        {
            name: "type",
            type: "int",
            description: "Тип статуса."
        },
        {
            name: "account_id",
            type: "int",
            description: "ID аккаунта."
        },
        {
            name: "descriptions",
            type: "array",
            description: "Массив описаний статуса."
        }
    ],
    successCodes: [
        {
            code: 200,
            description: "Статусы были успешно созданы."
        }
    ],
    errorCodes: [
        {
            code: 422,
            description: "Переданные данные не могут быть обработаны."
        },
        {
            code: 403,
            description: "Не хватает прав для вызова данного метода."
        },
        {
            code: 401,
            description: "Пользователь не авторизован."
        },
        {
            code: 400,
            description: "Переданы некорректные данные."
        }
    ]
},
{
    id: "update-lead-pipeline-status",
    entity: "lead_pipeline_statuses",
    title: "Редактирование статуса воронки",
    method: "PATCH",
    endpoint: "/api/v4/leads/pipelines/{pipeline_id}/statuses/{id}",
    description: "Метод позволяет редактировать статус воронки в аккаунте.",
    restrictions: [
        "Метод доступен только с правами администратора аккаунта.",
        "Можно создать только 3 описания статуса для разных уровней пользователя.",
        "Нельзя передавать один и тот же уровень в разных описаниях.",
        "Максимальная длина описания — 1000 символов.",
        "Можно передавать эмоджи в описаниях.",
        "Доступные уровни описаний: newbie, candidate, master."
    ],
    requestHeaders: {
        "Content-Type": "application/json"
    },
    requestParams: [
        {
            name: "name",
            type: "string",
            description: "Название статуса.",
            required: false
        },
        {
            name: "sort",
            type: "int",
            description: "Сортировка статуса.",
            required: false
        },
        {
            name: "color",
            type: "string",
            description: "Цвет статуса.",
            required: false
        },
        {
            name: "descriptions",
            type: "array",
            description: "Описания статуса.",
            required: false
        }
    ],
    responseParams: [
        {
            name: "id",
            type: "int",
            description: "ID статуса."
        },
        {
            name: "name",
            type: "string",
            description: "Название статуса."
        },
        {
            name: "sort",
            type: "int",
            description: "Сортировка статуса."
        },
        {
            name: "is_editable",
            type: "bool",
            description: "Доступен ли статус для редактирования."
        },
        {
            name: "pipeline_id",
            type: "int",
            description: "ID воронки."
        },
        {
            name: "color",
            type: "string",
            description: "Цвет статуса."
        },
        {
            name: "type",
            type: "int",
            description: "Тип статуса."
        },
        {
            name: "account_id",
            type: "int",
            description: "ID аккаунта."
        },
        {
            name: "descriptions",
            type: "array",
            description: "Описания статуса."
        }
    ],
    successCodes: [
        {
            code: 200,
            description: "Статус был успешно изменен."
        }
    ],
    errorCodes: [
        {
            code: 403,
            description: "Не хватает прав для вызова данного метода."
        },
        {
            code: 401,
            description: "Пользователь не авторизован."
        },
        {
            code: 400,
            description: "Переданы некорректные данные."
        }
    ]
},
{
    id: "delete-pipeline-status",
    entity: "pipeline-statuses",
    title: "Удаление статуса воронки",
    method: "DELETE",
    endpoint: "/api/v4/leads/pipelines/{pipeline_id}/statuses/{id}",
    description: "Метод позволяет удалить статус в аккаунте.",
    restrictions: [
        "Метод доступен только с правами администратора аккаунта.",
        "Сделки, которые находятся в удаляемом этапе, будут переведены в первый этап воронки."
    ],
    requestHeaders: [
        "Content-Type: application/json"
    ],
    requestParams: [],
    responseParams: [],
    successCodes: [
        {
            code: 204,
            description: "Статус был успешно удален."
        }
    ],
    errorCodes: [
        {
            code: 403,
            description: "Не хватает прав для вызова данного метода."
        },
        {
            code: 401,
            description: "Пользователь не авторизован."
        },
        {
            code: 400,
            description: "Переданы некорректные данные. Подробности доступны в теле ответа."
        }
    ]
}
]
};
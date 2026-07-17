export const parameters = {
    leads: {
        id: { name: "id", type: "int", description: "Идентификатор сделки." },
        name: { name: "name", type: "string", description: "Название сделки." },
        price: { name: "price", type: "int", description: "Бюджет сделки." },
        responsible_user_id: { name: "responsible_user_id", type: "int", description: "Идентификатор пользователя, ответственного за сделку." },
        group_id: { name: "group_id", type: "int", description: "Идентификатор группы, в которой состоит ответственный пользователь." },
        status_id: { name: "status_id", type: "int", description: "Идентификатор статуса сделки." },
        pipeline_id: { name: "pipeline_id", type: "int", description: "Идентификатор воронки сделки." },
        loss_reason_id: { name: "loss_reason_id", type: "int", description: "Идентификатор причины отказа сделки." },
        source_id: { name: "source_id", type: "int", description: "Идентификатор источника сделки." },
        created_by: { name: "created_by", type: "int", description: "Идентификатор пользователя, создавшего сделку. При значении 0 сделка считается созданной роботом." },
        updated_by: { name: "updated_by", type: "int", description: "Идентификатор пользователя, изменившего сделку. При значении 0 сделка считается изменённой роботом." },
        closed_at: { name: "closed_at", type: "int", description: "Дата закрытия сделки в формате Unix Timestamp." },
        created_at: { name: "created_at", type: "int", description: "Дата создания сделки в формате Unix Timestamp." },
        updated_at: { name: "updated_at", type: "int", description: "Дата последнего изменения сделки в формате Unix Timestamp." },
        closest_task_at: { name: "closest_task_at", type: "int", description: "Дата ближайшей задачи по сделке в формате Unix Timestamp." },
        is_deleted: { name: "is_deleted", type: "bool", description: "Признак удаления сделки." },
        custom_fields_values: { name: "custom_fields_values", type: "array | null", description: "Массив значений дополнительных полей сделки." },
        score: { name: "score", type: "int | null", description: "Скоринг сделки." },
        account_id: { name: "account_id", type: "int", description: "Идентификатор аккаунта, которому принадлежит сделка." },
        labor_cost: { name: "labor_cost", type: "int", description: "Время, затраченное на работу со сделкой, в секундах." },
        is_price_modified_by_robot: { name: "is_price_modified_by_robot", type: "bool", description: "Признак того, что бюджет сделки был изменён роботом." },
        _embedded: { name: "_embedded", type: "object", description: "Данные связанных сущностей сделки." },
        "_embedded[loss_reason]": { name: "_embedded[loss_reason]", type: "object", description: "Данные причины отказа сделки." },
        "_embedded[loss_reason][id]": { name: "_embedded[loss_reason][id]", type: "int", description: "Идентификатор причины отказа." },
        "_embedded[loss_reason][name]": { name: "_embedded[loss_reason][name]", type: "string", description: "Название причины отказа." },
        "_embedded[tags]": { name: "_embedded[tags]", type: "array | null", description: "Данные тегов сделки." },
        "_embedded[tags][0]": { name: "_embedded[tags][0]", type: "object", description: "Модель тега." },
        "_embedded[tags][0][id]": { name: "_embedded[tags][0][id]", type: "int", description: "Идентификатор тега." },
        "_embedded[tags][0][name]": { name: "_embedded[tags][0][name]", type: "string", description: "Название тега." },
        "_embedded[tags][0][color]": { name: "_embedded[tags][0][color]", type: "string | null", description: "Цвет тега." },
        "_embedded[contacts]": { name: "_embedded[contacts]", type: "array", description: "Данные контактов, связанных со сделкой." },
        "_embedded[contacts][0]": { name: "_embedded[contacts][0]", type: "object", description: "Модель контакта." },
        "_embedded[contacts][0][id]": { name: "_embedded[contacts][0][id]", type: "int", description: "Идентификатор контакта." },
        "_embedded[contacts][0][is_main]": { name: "_embedded[contacts][0][is_main]", type: "bool | string", description: "Признак того, что контакт является основным для сделки." },
        "_embedded[companies]": { name: "_embedded[companies]", type: "array", description: "Данные компаний, связанных со сделкой." },
        "_embedded[companies][0]": { name: "_embedded[companies][0]", type: "object", description: "Модель компании." },
        "_embedded[companies][0][id]": { name: "_embedded[companies][0][id]", type: "int", description: "Идентификатор компании." },
        "_embedded[catalog_elements]": { name: "_embedded[catalog_elements]", type: "array", description: "Данные элементов каталогов, связанных со сделкой." },
        "_embedded[catalog_elements][0]": { name: "_embedded[catalog_elements][0]", type: "object", description: "Модель элемента каталога." },
        "_embedded[catalog_elements][0][id]": { name: "_embedded[catalog_elements][0][id]", type: "int", description: "Идентификатор элемента каталога." },
        "_embedded[catalog_elements][0][metadata]": { name: "_embedded[catalog_elements][0][metadata]", type: "object", description: "Метаданные элемента каталога." },
        "_embedded[catalog_elements][0][quantity]": { name: "_embedded[catalog_elements][0][quantity]", type: "int | float", description: "Количество элемента." },
        "_embedded[catalog_elements][0][catalog_id]": { name: "_embedded[catalog_elements][0][catalog_id]", type: "int", description: "Идентификатор каталога, которому принадлежит элемент." },
        "_embedded[catalog_elements][0][price_id]": { name: "_embedded[catalog_elements][0][price_id]", type: "int", description: "Идентификатор поля типа «Цена», связанного с элементом каталога." },
        "_embedded[source]": { name: "_embedded[source]", type: "object", description: "Данные источника сделки." },
        "_embedded[source][id]": { name: "_embedded[source][id]", type: "int", description: "Идентификатор источника." },
        "_embedded[source][name]": { name: "_embedded[source][name]", type: "string", description: "Название источника." },
        "_embedded[source][external_id]": { name: "_embedded[source][external_id]", type: "string | int | bool", description: "Внешний идентификатор источника." },
        "_embedded[source][type]": { name: "_embedded[source][type]", type: "string", description: "Тип источника." },
        "_embedded[metadata]": { name: "_embedded[metadata]", type: "array", description: "Метаданные сделки." },
        "_embedded[metadata][category]": { name: "_embedded[metadata][category]", type: "string", description: "Категория метаданных сделки." },
        tags_to_add: { name: "tags_to_add", type: "array", description: "Массив тегов для добавления к сделке." },
        "tags_to_add[0]": { name: "tags_to_add[0]", type: "object", description: "Модель добавляемого тега." },
        "tags_to_add[0][id]": { name: "tags_to_add[0][id]", type: "array", description: "Идентификатор добавляемого тега." },
        "tags_to_add[0][name]": { name: "tags_to_add[0][name]", type: "array", description: "Название добавляемого тега." },
        tags_to_delete: { name: "tags_to_delete", type: "array", description: "Массив тегов для удаления из сделки." },
        "tags_to_delete[0]": { name: "tags_to_delete[0]", type: "object", description: "Модель удаляемого тега." },
        "tags_to_delete[0][id]": { name: "tags_to_delete[0][id]", type: "array", description: "Идентификатор удаляемого тега." },
        "tags_to_delete[0][name]": { name: "tags_to_delete[0][name]", type: "array", description: "Название удаляемого тега." },
        with: { name: "with", type: "string", description: "Параметр для указания связанных сущностей, которые необходимо получить. Может содержать несколько значений, указанных через запятую." },
        page: { name: "page", type: "int", description: "Страница выборки." },
        limit: { name: "limit", type: "int", description: "Количество возвращаемых сущностей за один запрос. Максимальное значение — 250." },
        query: { name: "query", type: "string", description: "Поисковый запрос по заполненным полям сущности." },
        filter: { name: "filter", type: "object", description: "Фильтр для отбора сущностей." },
        order: { name: "order", type: "object", description: "Сортировка результатов списка. Доступные поля: created_at, updated_at, id. Возможные значения: asc, desc." },
        contact_id: { name: "contact_id", type: "int | null", description: "Идентификатор контакта, связанного со сделкой." },
        company_id: { name: "company_id", type: "int | null", description: "Идентификатор компании, связанной со сделкой." },
        merged: { name: "merged", type: "bool", description: "Признак того, что найден дубликат сущности и выполнено объединение." },
        request_id: { name: "request_id", type: "string[]", description: "Массив пользовательских идентификаторов, переданных вместе с сущностями." },
    },

    contacts: {
    id: { name: "id", type: "int", description: "Идентификатор контакта." },
    name: { name: "name", type: "string", description: "Название контакта." },
    first_name: { name: "first_name", type: "string", description: "Имя контакта." },
    last_name: { name: "last_name", type: "string", description: "Фамилия контакта." },
    responsible_user_id: { name: "responsible_user_id", type: "int", description: "Идентификатор пользователя, ответственного за контакт." },
    group_id: { name: "group_id", type: "int", description: "Идентификатор группы, в которой состоит ответственный пользователь." },
    created_by: { name: "created_by", type: "int", description: "Идентификатор пользователя, создавшего контакт." },
    updated_by: { name: "updated_by", type: "int", description: "Идентификатор пользователя, изменившего контакт." },
    created_at: { name: "created_at", type: "int", description: "Дата создания контакта в формате Unix Timestamp." },
    updated_at: { name: "updated_at", type: "int", description: "Дата последнего изменения контакта в формате Unix Timestamp." },
    is_deleted: { name: "is_deleted", type: "bool", description: "Признак удаления контакта." },
    closest_task_at: { name: "closest_task_at", type: "int", description: "Дата ближайшей задачи по контакту в формате Unix Timestamp." },
    custom_fields_values: { name: "custom_fields_values", type: "array | null", description: "Массив значений дополнительных полей контакта." },
    account_id: { name: "account_id", type: "int", description: "Идентификатор аккаунта, которому принадлежит контакт." },
    _embedded: { name: "_embedded", type: "object", description: "Данные связанных сущностей контакта." },
    "_embedded[tags]": { name: "_embedded[tags]", type: "array", description: "Данные тегов контакта." },
    "_embedded[tags][0]": { name: "_embedded[tags][0]", type: "object", description: "Модель тега." },
    "_embedded[tags][0][id]": { name: "_embedded[tags][0][id]", type: "int", description: "Идентификатор тега." },
    "_embedded[tags][0][name]": { name: "_embedded[tags][0][name]", type: "string", description: "Название тега." },
    "_embedded[tags][0][color]": { name: "_embedded[tags][0][color]", type: "null", description: "Цвет тега." },
    "_embedded[companies]": { name: "_embedded[companies]", type: "array", description: "Данные компаний, связанных с контактом." },
    "_embedded[companies][0]": { name: "_embedded[companies][0]", type: "object", description: "Модель компании." },
    "_embedded[companies][0][id]": { name: "_embedded[companies][0][id]", type: "int", description: "Идентификатор компании." },
    "_embedded[customers]": { name: "_embedded[customers]", type: "array", description: "Данные покупателей, связанных с контактом." },
    "_embedded[customers][0]": { name: "_embedded[customers][0]", type: "object", description: "Модель покупателя." },
    "_embedded[customers][0][id]": { name: "_embedded[customers][0][id]", type: "int", description: "Идентификатор покупателя." },
    "_embedded[leads]": { name: "_embedded[leads]", type: "array", description: "Данные сделок, связанных с контактом." },
    "_embedded[leads][0]": { name: "_embedded[leads][0]", type: "object", description: "Модель сделки." },
    "_embedded[leads][0][id]": { name: "_embedded[leads][0][id]", type: "int", description: "Идентификатор сделки." },
    "_embedded[catalog_elements]": { name: "_embedded[catalog_elements]", type: "array", description: "Данные элементов каталогов, связанных с контактом." },
    "_embedded[catalog_elements][0]": { name: "_embedded[catalog_elements][0]", type: "object", description: "Модель элемента каталога." },
    "_embedded[catalog_elements][0][id]": { name: "_embedded[catalog_elements][0][id]", type: "int", description: "Идентификатор элемента каталога." },
    "_embedded[catalog_elements][0][metadata]": { name: "_embedded[catalog_elements][0][metadata]", type: "object", description: "Метаданные элемента каталога." },
    "_embedded[catalog_elements][0][quantity]": { name: "_embedded[catalog_elements][0][quantity]", type: "int | float", description: "Количество элемента каталога." },
    "_embedded[catalog_elements][0][catalog_id]": { name: "_embedded[catalog_elements][0][catalog_id]", type: "int", description: "Идентификатор каталога, которому принадлежит элемент." },
    "_embedded[catalog_elements][0][price_id]": { name: "_embedded[catalog_elements][0][price_id]", type: "int", description: "Идентификатор поля типа «Цена», связанного с элементом каталога." },
    tags_to_add: { name: "tags_to_add", type: "array", description: "Массив тегов для добавления к контакту." },
    "tags_to_add[0]": { name: "tags_to_add[0]", type: "object", description: "Модель добавляемого тега." },
    "tags_to_add[0][id]": { name: "tags_to_add[0][id]", type: "array", description: "Идентификатор добавляемого тега." },
    "tags_to_add[0][name]": { name: "tags_to_add[0][name]", type: "array", description: "Название добавляемого тега." },
    tags_to_delete: { name: "tags_to_delete", type: "array", description: "Массив тегов для удаления из контакта." },
    "tags_to_delete[0]": { name: "tags_to_delete[0]", type: "object", description: "Модель удаляемого тега." },
    "tags_to_delete[0][id]": { name: "tags_to_delete[0][id]", type: "array", description: "Идентификатор удаляемого тега." },
    "tags_to_delete[0][name]": { name: "tags_to_delete[0][name]", type: "array", description: "Название удаляемого тега." },
    request_id: { name: "request_id", type: "string", description: "Произвольный идентификатор запроса, который возвращается в ответе без изменений и не сохраняется." },
    chat_id: { name: "chat_id", type: "string", description: "Идентификатор чата (UUID) или массив идентификаторов чатов, в зависимости от используемого метода API." },
    contact_id: { name: "contact_id", type: "int", description: "Идентификатор контакта или массив идентификаторов контактов, в зависимости от используемого метода API." }
    },

    companies: {
    id: { name: "id", type: "int", description: "Идентификатор компании." },
    name: { name: "name", type: "string", description: "Название компании." },
    responsible_user_id: { name: "responsible_user_id", type: "int", description: "Идентификатор пользователя, ответственного за компанию." },
    group_id: { name: "group_id", type: "int", description: "Идентификатор группы, в которой состоит ответственный пользователь." },
    created_by: { name: "created_by", type: "int", description: "Идентификатор пользователя, создавшего компанию." },
    updated_by: { name: "updated_by", type: "int", description: "Идентификатор пользователя, изменившего компанию." },
    created_at: { name: "created_at", type: "int", description: "Дата создания компании в формате Unix Timestamp." },
    updated_at: { name: "updated_at", type: "int", description: "Дата последнего изменения компании в формате Unix Timestamp." },
    closest_task_at: { name: "closest_task_at", type: "int", description: "Дата ближайшей задачи по компании в формате Unix Timestamp." },
    custom_fields_values: { name: "custom_fields_values", type: "array | null", description: "Массив значений дополнительных полей компании." },
    is_deleted: { name: "is_deleted", type: "bool", description: "Признак удаления компании." },
    account_id: { name: "account_id", type: "int", description: "Идентификатор аккаунта, которому принадлежит компания." },
    _embedded: { name: "_embedded", type: "object", description: "Данные связанных сущностей компании." },
    "_embedded[tags]": { name: "_embedded[tags]", type: "array", description: "Данные тегов компании." },
    "_embedded[tags][0]": { name: "_embedded[tags][0]", type: "object", description: "Модель тега." },
    "_embedded[tags][0][id]": { name: "_embedded[tags][0][id]", type: "int", description: "Идентификатор тега." },
    "_embedded[tags][0][name]": { name: "_embedded[tags][0][name]", type: "string", description: "Название тега." },
    "_embedded[tags][0][color]": { name: "_embedded[tags][0][color]", type: "null", description: "Цвет тега." },
    "_embedded[contacts]": { name: "_embedded[contacts]", type: "array", description: "Данные контактов, связанных с компанией." },
    "_embedded[contacts][0]": { name: "_embedded[contacts][0]", type: "object", description: "Модель контакта." },
    "_embedded[contacts][0][id]": { name: "_embedded[contacts][0][id]", type: "int", description: "Идентификатор контакта." },
    "_embedded[customers]": { name: "_embedded[customers]", type: "array", description: "Данные покупателей, связанных с компанией." },
    "_embedded[customers][0]": { name: "_embedded[customers][0]", type: "object", description: "Модель покупателя." },
    "_embedded[customers][0][id]": { name: "_embedded[customers][0][id]", type: "int", description: "Идентификатор покупателя." },
    "_embedded[leads]": { name: "_embedded[leads]", type: "array", description: "Данные сделок, связанных с компанией." },
    "_embedded[leads][0]": { name: "_embedded[leads][0]", type: "object", description: "Модель сделки." },
    "_embedded[leads][0][id]": { name: "_embedded[leads][0][id]", type: "int", description: "Идентификатор сделки." },
    "_embedded[catalog_elements]": { name: "_embedded[catalog_elements]", type: "array", description: "Данные элементов каталогов, связанных с компанией." },
    "_embedded[catalog_elements][0]": { name: "_embedded[catalog_elements][0]", type: "object", description: "Модель элемента каталога." },
    "_embedded[catalog_elements][0][id]": { name: "_embedded[catalog_elements][0][id]", type: "int", description: "Идентификатор элемента каталога." },
    "_embedded[catalog_elements][0][metadata]": { name: "_embedded[catalog_elements][0][metadata]", type: "object", description: "Метаданные элемента каталога." },
    "_embedded[catalog_elements][0][quantity]": { name: "_embedded[catalog_elements][0][quantity]", type: "int | float", description: "Количество элемента каталога." },
    "_embedded[catalog_elements][0][catalog_id]": { name: "_embedded[catalog_elements][0][catalog_id]", type: "int", description: "Идентификатор каталога, которому принадлежит элемент." },
    "_embedded[catalog_elements][0][price_id]": { name: "_embedded[catalog_elements][0][price_id]", type: "int", description: "Идентификатор поля типа «Цена», связанного с элементом каталога." },
    tags_to_add: { name: "tags_to_add", type: "array", description: "Массив тегов для добавления к компании." },
    "tags_to_add[0]": { name: "tags_to_add[0]", type: "object", description: "Модель добавляемого тега." },
    "tags_to_add[0][id]": { name: "tags_to_add[0][id]", type: "array", description: "Идентификатор добавляемого тега." },
    "tags_to_add[0][name]": { name: "tags_to_add[0][name]", type: "array", description: "Название добавляемого тега." },
    tags_to_delete: { name: "tags_to_delete", type: "array", description: "Массив тегов для удаления из компании." },
    "tags_to_delete[0]": { name: "tags_to_delete[0]", type: "object", description: "Модель удаляемого тега." },
    "tags_to_delete[0][id]": { name: "tags_to_delete[0][id]", type: "array", description: "Идентификатор удаляемого тега." },
    "tags_to_delete[0][name]": { name: "tags_to_delete[0][name]", type: "array", description: "Название удаляемого тега." },
    request_id: { name: "request_id", type: "string", description: "Произвольный идентификатор запроса, который возвращается в ответе без изменений и не сохраняется." }
    },

    customers: {
    mode: { name: "mode", type: "string", description: "Режим работы покупателей." },
    is_enabled: { name: "is_enabled", type: "bool", description: "Признак того, что функционал включён." },
    with: { name: "with", type: "string", description: "Параметр для указания связанных сущностей, которые необходимо получить. Может содержать несколько значений, указанных через запятую." },
    page: { name: "page", type: "int", description: "Страница выборки." },
    limit: { name: "limit", type: "int", description: "Количество возвращаемых сущностей за один запрос. Максимальное значение — 250." },
    query: { name: "query", type: "string", description: "Поисковый запрос по заполненным полям сущности." },
    filter: { name: "filter", type: "object", description: "Фильтр для отбора сущностей." },
    "filter[id]": { name: "filter[id]", type: "int | array", description: "Фильтр по идентификаторам транзакций." },

    id: { name: "id", type: "int", description: "Идентификатор сущности." },
    name: { name: "name", type: "string", description: "Название сущности." },
    next_price: { name: "next_price", type: "int", description: "Ожидаемая сумма следующей покупки." },
    next_date: { name: "next_date", type: "int", description: "Дата ожидаемой следующей покупки в формате Unix Timestamp." },
    responsible_user_id: { name: "responsible_user_id", type: "int", description: "Идентификатор пользователя, ответственного за сущность." },
    status_id: { name: "status_id", type: "int", description: "Идентификатор статуса сущности." },
    periodicity: { name: "periodicity", type: "int", description: "Периодичность покупок." },
    created_by: { name: "created_by", type: "int", description: "Идентификатор пользователя, создавшего сущность." },
    updated_by: { name: "updated_by", type: "int", description: "Идентификатор пользователя, изменившего сущность." },
    created_at: { name: "created_at", type: "int", description: "Дата создания сущности в формате Unix Timestamp." },
    updated_at: { name: "updated_at", type: "int", description: "Дата последнего изменения сущности в формате Unix Timestamp." },
    closest_task_at: { name: "closest_task_at", type: "int", description: "Дата ближайшей задачи по сущности в формате Unix Timestamp." },
    completed_at: { name: "completed_at", type: "int", description: "Дата завершения транзакции в формате Unix Timestamp." },
    is_deleted: { name: "is_deleted", type: "bool", description: "Признак удаления сущности." },
    custom_fields_values: { name: "custom_fields_values", type: "array | null", description: "Массив значений дополнительных полей сущности." },
    ltv: { name: "ltv", type: "int", description: "Общая сумма покупок." },
    purchases_count: { name: "purchases_count", type: "int", description: "Количество покупок." },
    average_check: { name: "average_check", type: "int", description: "Средний размер покупки." },
    account_id: { name: "account_id", type: "int", description: "Идентификатор аккаунта, которому принадлежит сущность." },
    comment: { name: "comment", type: "string", description: "Комментарий к транзакции." },
    price: { name: "price", type: "int", description: "Сумма транзакции." },
    customer_id: { name: "customer_id", type: "int", description: "Идентификатор покупателя." },
    redeem: { name: "redeem", type: "int", description: "Количество бонусных баллов для списания." },
    earn: { name: "earn", type: "int", description: "Количество бонусных баллов для начисления." },
    bonus_points: { name: "bonus_points", type: "int", description: "Количество бонусных баллов покупателя." },

    _embedded: { name: "_embedded", type: "object", description: "Данные связанных сущностей." },

    "_embedded[segments]": { name: "_embedded[segments]", type: "array", description: "Данные сегментов." },
    "_embedded[segments][0]": { name: "_embedded[segments][0]", type: "object", description: "Модель сегмента." },
    "_embedded[segments][0][id]": { name: "_embedded[segments][0][id]", type: "int", description: "Идентификатор сегмента." },

    "_embedded[tags]": { name: "_embedded[tags]", type: "array", description: "Данные тегов." },
    "_embedded[tags][0]": { name: "_embedded[tags][0]", type: "object", description: "Модель тега." },
    "_embedded[tags][0][id]": { name: "_embedded[tags][0][id]", type: "int", description: "Идентификатор тега." },
    "_embedded[tags][0][name]": { name: "_embedded[tags][0][name]", type: "string", description: "Название тега." },
    "_embedded[tags][0][color]": { name: "_embedded[tags][0][color]", type: "null", description: "Цвет тега." },

    "_embedded[contacts]": { name: "_embedded[contacts]", type: "array", description: "Данные контактов, связанных с сущностью." },
    "_embedded[contacts][0]": { name: "_embedded[contacts][0]", type: "object", description: "Модель контакта." },
    "_embedded[contacts][0][id]": { name: "_embedded[contacts][0][id]", type: "int", description: "Идентификатор контакта." },
    "_embedded[contacts][0][is_main]": { name: "_embedded[contacts][0][is_main]", type: "bool", description: "Признак того, что контакт является основным для сущности." },

    "_embedded[companies]": { name: "_embedded[companies]", type: "array", description: "Данные компаний, связанных с сущностью." },
    "_embedded[companies][0]": { name: "_embedded[companies][0]", type: "object", description: "Модель компании." },
    "_embedded[companies][0][id]": { name: "_embedded[companies][0][id]", type: "int", description: "Идентификатор компании." },

    "_embedded[catalog_elements]": { name: "_embedded[catalog_elements]", type: "array", description: "Данные элементов каталогов, связанных с сущностью." },
    "_embedded[catalog_elements][0]": { name: "_embedded[catalog_elements][0]", type: "object", description: "Модель элемента каталога." },
    "_embedded[catalog_elements][0][id]": { name: "_embedded[catalog_elements][0][id]", type: "int", description: "Идентификатор элемента каталога." },
    "_embedded[catalog_elements][0][metadata]": { name: "_embedded[catalog_elements][0][metadata]", type: "object", description: "Метаданные элемента каталога." },
    "_embedded[catalog_elements][0][quantity]": { name: "_embedded[catalog_elements][0][quantity]", type: "int | float", description: "Количество элемента." },
    "_embedded[catalog_elements][0][catalog_id]": { name: "_embedded[catalog_elements][0][catalog_id]", type: "int", description: "Идентификатор каталога, которому принадлежит элемент." },
    "_embedded[catalog_elements][0][price_id]": { name: "_embedded[catalog_elements][0][price_id]", type: "int", description: "Идентификатор поля типа «Цена», связанного с элементом каталога." },

    "_embedded[customer]": { name: "_embedded[customer]", type: "object", description: "Данные покупателя." },
    "_embedded[customer][id]": { name: "_embedded[customer][id]", type: "int", description: "Идентификатор покупателя." },

    tags_to_add: { name: "tags_to_add", type: "array", description: "Массив тегов для добавления." },
    "tags_to_add[0]": { name: "tags_to_add[0]", type: "object", description: "Модель добавляемого тега." },
    "tags_to_add[0][id]": { name: "tags_to_add[0][id]", type: "array", description: "Идентификатор добавляемого тега." },
    "tags_to_add[0][name]": { name: "tags_to_add[0][name]", type: "array", description: "Название добавляемого тега." },

    tags_to_delete: { name: "tags_to_delete", type: "array", description: "Массив тегов для удаления." },
    "tags_to_delete[0]": { name: "tags_to_delete[0]", type: "object", description: "Модель удаляемого тега." },
    "tags_to_delete[0][id]": { name: "tags_to_delete[0][id]", type: "array", description: "Идентификатор удаляемого тега." },
    "tags_to_delete[0][name]": { name: "tags_to_delete[0][name]", type: "array", description: "Название удаляемого тега." },

    request_id: { name: "request_id", type: "string", description: "Произвольный идентификатор запроса, который возвращается в ответе без изменений и не сохраняется." }
    },

    tasks: {
    page: { name: "page", type: "int", description: "Страница выборки." },
    limit: { name: "limit", type: "int", description: "Количество возвращаемых сущностей за один запрос. Максимальное значение — 250." },

    filter: { name: "filter", type: "object", description: "Фильтр для отбора сущностей." },
    "filter[responsible_user_id]": { name: "filter[responsible_user_id]", type: "int | array", description: "Фильтр по идентификаторам пользователей, ответственных за задачу." },
    "filter[is_completed]": { name: "filter[is_completed]", type: "bool", description: "Фильтр по признаку завершения задачи." },
    "filter[task_type]": { name: "filter[task_type]", type: "int | array", description: "Фильтр по идентификаторам типов задач." },
    "filter[entity_type]": { name: "filter[entity_type]", type: "string", description: "Фильтр по типу сущности, связанной с задачей." },
    "filter[entity_id]": { name: "filter[entity_id]", type: "int | array", description: "Фильтр по идентификаторам сущностей, связанных с задачей." },
    "filter[id]": { name: "filter[id]", type: "int | array", description: "Фильтр по идентификаторам задач." },
    "filter[updated_at]": { name: "filter[updated_at]", type: "int | object", description: "Фильтр по дате последнего изменения задачи." },

    order: { name: "order", type: "object", description: "Сортировка результатов списка. Доступные поля: created_at, complete_till, id. Возможные значения: asc, desc." },

    id: { name: "id", type: "int", description: "Идентификатор сущности." },
    created_by: { name: "created_by", type: "int", description: "Идентификатор пользователя, создавшего сущность." },
    updated_by: { name: "updated_by", type: "int", description: "Идентификатор пользователя, изменившего сущность." },
    created_at: { name: "created_at", type: "int", description: "Дата создания сущности в формате Unix Timestamp." },
    updated_at: { name: "updated_at", type: "int", description: "Дата последнего изменения сущности в формате Unix Timestamp." },
    responsible_user_id: { name: "responsible_user_id", type: "int", description: "Идентификатор пользователя, ответственного за сущность." },
    group_id: { name: "group_id", type: "int", description: "Идентификатор группы, в которой состоит ответственный пользователь." },
    entity_id: { name: "entity_id", type: "int", description: "Идентификатор связанной сущности." },
    entity_type: { name: "entity_type", type: "string", description: "Тип связанной сущности." },
    is_completed: { name: "is_completed", type: "bool", description: "Признак того, что задача выполнена." },
    task_type_id: { name: "task_type_id", type: "int", description: "Идентификатор типа задачи." },
    text: { name: "text", type: "string", description: "Описание задачи." },
    duration: { name: "duration", type: "int", description: "Длительность задачи в секундах." },
    complete_till: { name: "complete_till", type: "int", description: "Дата, до которой задача должна быть завершена, в формате Unix Timestamp." },
    result: { name: "result", type: "object", description: "Результат выполнения задачи." },
    "result[text]": { name: "result[text]", type: "string", description: "Текст результата выполнения задачи." },
    account_id: { name: "account_id", type: "int", description: "Идентификатор аккаунта, которому принадлежит сущность." },

    request_id: { name: "request_id", type: "string", description: "Произвольный идентификатор запроса, который возвращается в ответе без изменений и не сохраняется." }
    },

    users: {
    with: { name: "with", type: "string", description: "Параметр для указания связанных сущностей, которые необходимо получить. Может содержать несколько значений, указанных через запятую." },

    page: { name: "page", type: "int", description: "Страница выборки." },
    limit: { name: "limit", type: "int", description: "Количество возвращаемых сущностей за один запрос. Максимальное значение — 250." },

    id: { name: "id", type: "int", description: "Идентификатор пользователя или роли." },
    name: { name: "name", type: "string", description: "Полное имя пользователя или название роли." },
    email: { name: "email", type: "string", description: "E-mail пользователя." },
    password: { name: "password", type: "string", description: "Пароль пользователя." },
    lang: { name: "lang", type: "string", description: "Язык пользователя." },

    rights: { name: "rights", type: "object", description: "Права пользователя." },
    "rights[leads]": { name: "rights[leads]", type: "object", description: "Права доступа пользователя к сделкам." },
    "rights[contacts]": { name: "rights[contacts]", type: "object", description: "Права доступа пользователя к контактам." },
    "rights[companies]": { name: "rights[companies]", type: "object", description: "Права доступа пользователя к компаниям." },
    "rights[tasks]": { name: "rights[tasks]", type: "object", description: "Права доступа пользователя к задачам." },
    "rights[mail_access]": { name: "rights[mail_access]", type: "bool", description: "Признак наличия доступа к функционалу почты." },
    "rights[catalog_access]": { name: "rights[catalog_access]", type: "bool", description: "Признак наличия доступа к функционалу списков." },
    "rights[is_admin]": { name: "rights[is_admin]", type: "bool", description: "Признак того, что пользователь является администратором." },
    "rights[is_free]": { name: "rights[is_free]", type: "bool", description: "Признак того, что пользователь является бесплатным." },
    "rights[is_active]": { name: "rights[is_active]", type: "bool", description: "Признак того, что пользователь является активным." },
    "rights[group_id]": { name: "rights[group_id]", type: "int | null", description: "Идентификатор группы, к которой относится пользователь." },
    "rights[role_id]": { name: "rights[role_id]", type: "int | null", description: "Идентификатор роли пользователя." },
    "rights[status_rights]": { name: "rights[status_rights]", type: "array | null", description: "Массив прав пользователя на статусы." },

    "rights[status_rights][0]": { name: "rights[status_rights][0]", type: "object", description: "Модель прав доступа к статусу." },
    "rights[status_rights][0][entity_type]": { name: "rights[status_rights][0][entity_type]", type: "string", description: "Тип сущности, для которой заданы права." },
    "rights[status_rights][0][pipeline_id]": { name: "rights[status_rights][0][pipeline_id]", type: "int", description: "Идентификатор воронки." },
    "rights[status_rights][0][status_id]": { name: "rights[status_rights][0][status_id]", type: "int", description: "Идентификатор статуса." },
    "rights[status_rights][0][rights]": { name: "rights[status_rights][0][rights]", type: "object", description: "Объект прав доступа." },

    "_embedded[users]": { name: "_embedded[users]", type: "array", description: "Массив идентификаторов пользователей, связанных с ролью." },

    request_id: { name: "request_id", type: "string", description: "Идентификатор запроса, который возвращается в ответе без изменений и не сохраняется." }
    },

    pipelines: {
    id: { name: "id", type: "int", description: "Идентификатор воронки или статуса." },
    name: { name: "name", type: "string", description: "Название воронки, статуса или роли." },
    sort: { name: "sort", type: "int", description: "Порядок сортировки воронки или статуса." },
    is_main: { name: "is_main", type: "bool", description: "Признак того, что воронка является основной." },
    is_unsorted_on: { name: "is_unsorted_on", type: "bool", description: "Признак того, что в воронке включено неразобранное." },
    is_archive: { name: "is_archive", type: "bool", description: "Признак того, что воронка является архивной." },
    account_id: { name: "account_id", type: "int", description: "Идентификатор аккаунта." },

    _embedded: { name: "_embedded", type: "object", description: "Данные связанных сущностей." },
    "_embedded[statuses]": { name: "_embedded[statuses]", type: "array", description: "Данные статусов воронки." },

    with: { name: "with", type: "string", description: "Параметр для указания связанных сущностей, которые необходимо получить. Может содержать несколько значений, указанных через запятую." },

    is_editable: { name: "is_editable", type: "bool", description: "Признак того, что статус доступен для редактирования." },
    pipeline_id: { name: "pipeline_id", type: "int", description: "Идентификатор воронки." },
    color: { name: "color", type: "string", description: "Цвет статуса." },
    type: { name: "type", type: "int", description: "Тип статуса." },

    descriptions: { name: "descriptions", type: "array", description: "Массив описаний статуса." },
    "descriptions[0]": { name: "descriptions[0]", type: "object", description: "Модель описания статуса." },
    "descriptions[0][id]": { name: "descriptions[0][id]", type: "int", description: "Идентификатор описания статуса." },
    "descriptions[0][account_id]": { name: "descriptions[0][account_id]", type: "int", description: "Идентификатор аккаунта." },
    "descriptions[0][created_at]": { name: "descriptions[0][created_at]", type: "string", description: "Дата создания описания статуса." },
    "descriptions[0][updated_at]": { name: "descriptions[0][updated_at]", type: "string", description: "Дата последнего изменения описания статуса." },
    "descriptions[0][created_by]": { name: "descriptions[0][created_by]", type: "int", description: "Идентификатор пользователя, создавшего описание статуса." },
    "descriptions[0][updated_by]": { name: "descriptions[0][updated_by]", type: "int", description: "Идентификатор пользователя, изменившего описание статуса." },
    "descriptions[0][pipeline_id]": { name: "descriptions[0][pipeline_id]", type: "int", description: "Идентификатор воронки." },
    "descriptions[0][status_id]": { name: "descriptions[0][status_id]", type: "int", description: "Идентификатор статуса." },
    "descriptions[0][level]": { name: "descriptions[0][level]", type: "string", description: "Уровень пользователей, для которых отображается описание статуса." },
    "descriptions[0][description]": { name: "descriptions[0][description]", type: "string", description: "Описание статуса." },

    request_id: { name: "request_id", type: "string", description: "Произвольный идентификатор запроса, который возвращается в ответе без изменений и не сохраняется." }
    },

    events: {
    with: { name: "with", type: "string", description: "Параметр для указания дополнительных данных, которые необходимо получить. Может содержать несколько значений, указанных через запятую." },

    page: { name: "page", type: "int", description: "Страница выборки." },
    limit: { name: "limit", type: "int", description: "Количество возвращаемых сущностей за один запрос." },

    filter: { name: "filter", type: "object", description: "Фильтр для отбора событий или примечаний." },
    "filter[id]": { name: "filter[id]", type: "string | int | array", description: "Фильтр по идентификаторам событий или примечаний." },
    "filter[created_at]": { name: "filter[created_at]", type: "int | array", description: "Фильтр по дате создания сущности." },
    "filter[created_by]": { name: "filter[created_by]", type: "int | array", description: "Фильтр по идентификаторам пользователей, создавших сущность." },
    "filter[entity]": { name: "filter[entity]", type: "string | array", description: "Фильтр по типу сущности." },
    "filter[entity_id]": { name: "filter[entity_id]", type: "int | array", description: "Фильтр по идентификаторам связанных сущностей." },
    "filter[type]": { name: "filter[type]", type: "string | array", description: "Фильтр по типу события." },
    "filter[value_before]": { name: "filter[value_before]", type: "string | array", description: "Фильтр по значениям до изменения." },
    "filter[value_after]": { name: "filter[value_after]", type: "string | array", description: "Фильтр по значениям после изменения." },
    "filter[note_type]": { name: "filter[note_type]", type: "string | array", description: "Фильтр по типу примечания." },
    "filter[updated_at]": { name: "filter[updated_at]", type: "int | object", description: "Фильтр по дате последнего изменения сущности." },

    order: { name: "order", type: "object", description: "Сортировка результатов списка." },

    id: { name: "id", type: "string | int", description: "Идентификатор события или примечания." },
    type: { name: "type", type: "string | int", description: "Тип события." },
    entity_id: { name: "entity_id", type: "int", description: "Идентификатор сущности, связанной с событием или примечанием." },
    entity_type: { name: "entity_type", type: "string", description: "Тип сущности события." },

    created_by: { name: "created_by", type: "int", description: "Идентификатор пользователя, создавшего сущность." },
    updated_by: { name: "updated_by", type: "int", description: "Идентификатор пользователя, изменившего примечание." },

    created_at: { name: "created_at", type: "int", description: "Дата создания сущности в формате Unix Timestamp." },
    updated_at: { name: "updated_at", type: "int", description: "Дата последнего изменения сущности в формате Unix Timestamp." },

    value_after: { name: "value_after", type: "array", description: "Массив изменений после события." },
    value_before: { name: "value_before", type: "array", description: "Массив изменений до события." },

    account_id: { name: "account_id", type: "int", description: "Идентификатор аккаунта, которому принадлежит сущность." },

    language_code: { name: "language_code", type: "string", description: "Код языка, в котором возвращаются названия типов событий." },

    key: { name: "key", type: "string", description: "Код типа события." },
    lang: { name: "lang", type: "string", description: "Локализованное название события." },

    responsible_user_id: { name: "responsible_user_id", type: "int", description: "Идентификатор пользователя, ответственного за примечание." },
    group_id: { name: "group_id", type: "int", description: "Идентификатор группы, в которой состоит ответственный пользователь за примечание." },

    note_type: { name: "note_type", type: "string", description: "Тип примечания." },
    params: { name: "params", type: "object", description: "Свойства примечания, зависящие от его типа." },

    is_pinned: { name: "is_pinned", type: "bool", description: "Признак того, что примечание закреплено." },

    is_need_to_trigger_digital_pipeline: { name: "is_need_to_trigger_digital_pipeline", type: "bool", description: "Признак необходимости отправки событий в Digital Pipeline." },

    request_id: { name: "request_id", type: "string", description: "Идентификатор запроса, который возвращается в ответе без изменений и не сохраняется." }
    },

    fields: {
    page: { name: "page", type: "int", description: "Страница выборки." },
    limit: { name: "limit", type: "int", description: "Количество возвращаемых сущностей за один запрос. Максимальное значение — 250." },
    "filter[type][0]": { name: "filter[type][0]", type: "string", description: "Тип поля для фильтрации. Список доступных типов полей." },
    order: { name: "order", type: "object", description: "Сортировка результатов списка. Доступные поля: sort, id. Возможные значения: asc, desc." },

    id: { name: "id", type: "int | string", description: "Идентификатор поля или группы полей." },
    name: { name: "name", type: "string", description: "Название поля или группы полей." },
    code: { name: "code", type: "string", description: "Код поля, по которому можно обновлять значение в сущности без передачи ID поля." },
    sort: { name: "sort", type: "int", description: "Порядок сортировки поля или группы полей." },
    type: { name: "type", type: "string", description: "Тип поля или группы полей." },
    entity_type: { name: "entity_type", type: "string", description: "Тип сущности, к которой относится поле или группа полей." },
    is_predefined: { name: "is_predefined", type: "bool", description: "Признак того, что поле или группа полей являются предустановленными." },
    is_deletable: { name: "is_deletable", type: "bool", description: "Признак доступности поля для удаления." },
    is_visible: { name: "is_visible", type: "bool", description: "Признак отображения поля в интерфейсе." },
    is_required: { name: "is_required", type: "bool", description: "Признак обязательности заполнения поля." },
    settings: { name: "settings", type: "object | array | null", description: "Настройки поля." },
    is_computed: { name: "is_computed", type: "bool", description: "Признак того, что поле является вычисляемым." },
    is_api_only: { name: "is_api_only", type: "bool", description: "Признак того, что поле доступно для редактирования только через API." },
    group_id: { name: "group_id", type: "string | null", description: "Идентификатор группы полей, в которой находится поле." },
    required_statuses: { name: "required_statuses", type: "array | null", description: "Список обязательных полей для перехода между статусами." },

    "required_statuses[0]": { name: "required_statuses[0]", type: "object", description: "Модель обязательного поля для смены статуса." },
    "required_statuses[0][status_id]": { name: "required_statuses[0][status_id]", type: "int", description: "Идентификатор статуса, для перехода в который поле обязательно к заполнению." },
    "required_statuses[0][pipeline_id]": { name: "required_statuses[0][pipeline_id]", type: "int", description: "Идентификатор воронки, в которой находится статус." },

    remind: { name: "remind", type: "string | int | null", description: "Настройка напоминания о дне рождения. Возможные значения: never — никогда, day — за день, week — за неделю, month — за месяц." },
    currency: { name: "currency", type: "string | null", description: "Код валюты поля. Используется для полей типа monetary." },

    enums: { name: "enums", type: "array | null", description: "Доступные значения поля." },
    "enums[0]": { name: "enums[0]", type: "object", description: "Модель доступного значения поля." },
    "enums[0][id]": { name: "enums[0][id]", type: "int", description: "Идентификатор значения поля." },
    "enums[0][value]": { name: "enums[0][value]", type: "string", description: "Значение поля." },
    "enums[0][sort]": { name: "enums[0][sort]", type: "int", description: "Порядок сортировки значения поля." },
    "enums[0][code]": { name: "enums[0][code]", type: "string | null", description: "Символьный код значения поля." },

    nested: { name: "nested", type: "array | null", description: "Вложенные значения поля." },
    "nested[0]": { name: "nested[0]", type: "object", description: "Модель вложенного значения поля." },
    "nested[0][id]": { name: "nested[0][id]", type: "int", description: "Идентификатор вложенного значения." },
    "nested[0][parent_id]": { name: "nested[0][parent_id]", type: "int", description: "Идентификатор родительского вложенного значения." },
    "nested[0][value]": { name: "nested[0][value]", type: "string", description: "Значение вложенного элемента." },
    "nested[0][sort]": { name: "nested[0][sort]", type: "int", description: "Порядок сортировки вложенного значения." },
    "nested[0][request_id]": { name: "nested[0][request_id]", type: "string", description: "Временный идентификатор вложенного значения, используемый только в рамках запроса." },
    "nested[0][parent_request_id]": { name: "nested[0][parent_request_id]", type: "string", description: "Временный идентификатор родительского вложенного значения, используемый только в рамках запроса." },

    hidden_statuses: { name: "hidden_statuses", type: "array", description: "Настройки скрытия полей в зависимости от статуса." },
    "hidden_statuses[0]": { name: "hidden_statuses[0]", type: "object", description: "Модель настройки скрытия поля." },
    "hidden_statuses[0][status_id]": { name: "hidden_statuses[0][status_id]", type: "int", description: "Идентификатор статуса, в котором поле скрыто." },
    "hidden_statuses[0][pipeline_id]": { name: "hidden_statuses[0][pipeline_id]", type: "int", description: "Идентификатор воронки, в которой поле скрыто." },

    chained_lists: { name: "chained_lists", type: "array | null", description: "Настройки поля типа связанного списка." },
    "chained_lists[0]": { name: "chained_lists[0]", type: "object", description: "Модель настройки связанного списка." },
    "chained_lists[0][title]": { name: "chained_lists[0][title]", type: "string | null", description: "Название связанного списка." },
    "chained_lists[0][catalog_id]": { name: "chained_lists[0][catalog_id]", type: "int", description: "Идентификатор каталога." },
    "chained_lists[0][parent_catalog_id]": { name: "chained_lists[0][parent_catalog_id]", type: "int", description: "Идентификатор родительского каталога." },

    tracking_callback: { name: "tracking_callback", type: "string", description: "Callback JavaScript-функция, выполняемая при отправке данных через CRM Plugin или форму amoCRM." },
    search_in: { name: "search_in", type: "string | null", description: "Идентификатор списка или символьный код для поля типа «Связь с другим элементом»." },

    fields: { name: "fields", type: "array", description: "Массив полей, которые должны быть перенесены в группу." },
    request_id: { name: "request_id", type: "string", description: "Поле, которое возвращается в ответе без изменений и не сохраняется." }
    },

    tags: {
    page: { name: "page", type: "int", description: "Страница выборки." },
    limit: { name: "limit", type: "int", description: "Количество возвращаемых сущностей за один запрос. Максимальное значение — 250." },
    filter: { name: "filter", type: "object", description: "Фильтр для отбора тегов." },
    "filter[name]": { name: "filter[name]", type: "string", description: "Фильтр по точному названию тега. Можно передать только одно название." },
    "filter[id]": { name: "filter[id]", type: "int | array", description: "Фильтр по идентификатору тега. Можно передать один ID или массив идентификаторов." },
    query: { name: "query", type: "string", description: "Поисковый запрос для полнотекстового поиска по названию тега." },

    id: { name: "id", type: "int", description: "Идентификатор тега." },
    name: { name: "name", type: "string", description: "Название тега." },
    color: { name: "color", type: "string | null", description: "Цвет тега." },

    "_embedded[tags]": { name: "_embedded[tags]", type: "array | null", description: "Данные тегов, связанных с сущностью." },
    "_embedded[tags][0]": { name: "_embedded[tags][0]", type: "object", description: "Модель тега. Для указания тега необходимо передать идентификатор или название." },
    "_embedded[tags][0][id]": { name: "_embedded[tags][0][id]", type: "int", description: "Идентификатор тега." },
    "_embedded[tags][0][name]": { name: "_embedded[tags][0][name]", type: "string", description: "Название тега." },

    request_id: { name: "request_id", type: "string", description: "Поле, которое возвращается в ответе без изменений и не сохраняется." }
    },

    links: {
    filter: { name: "filter", type: "object", description: "Фильтр для отбора связей между сущностями." },
    "filter[to_entity_id]": { name: "filter[to_entity_id]", type: "int", description: "Фильтр по идентификатору связанной сущности. Используется совместно с filter[to_entity_type]." },
    "filter[to_entity_type]": { name: "filter[to_entity_type]", type: "string", description: "Фильтр по типу связанной сущности. Используется совместно с filter[to_entity_id]." },
    "filter[to_catalog_id]": { name: "filter[to_catalog_id]", type: "int", description: "Фильтр по идентификатору каталога связанной сущности." },
    "filter[entity_id]": { name: "filter[entity_id]", type: "array", description: "Фильтр по идентификаторам главных сущностей. Является обязательным параметром при использовании соответствующего метода." },

    entity_id: { name: "entity_id", type: "int", description: "Идентификатор главной сущности." },
    entity_type: { name: "entity_type", type: "string", description: "Тип главной сущности." },

    to_entity_id: { name: "to_entity_id", type: "int", description: "Идентификатор связанной сущности." },
    to_entity_type: { name: "to_entity_type", type: "string", description: "Тип связанной сущности." },

    metadata: { name: "metadata", type: "object | null", description: "Метаданные связи между сущностями." },
    "metadata[main_contact]": { name: "metadata[main_contact]", type: "bool", description: "Признак того, что привязанный контакт является главным." },
    "metadata[is_main]": { name: "metadata[is_main]", type: "bool", description: "Признак того, что контакт является главным." },
    "metadata[quantity]": { name: "metadata[quantity]", type: "int | float", description: "Количество прикрепленных элементов каталогов." },
    "metadata[catalog_id]": { name: "metadata[catalog_id]", type: "int", description: "Идентификатор каталога." },
    "metadata[price_id]": { name: "metadata[price_id]", type: "int | null", description: "Идентификатор поля типа «Цена», установленного для привязанного элемента в контексте сущности." },
    "metadata[updated_by]": { name: "metadata[updated_by]", type: "int", description: "Идентификатор пользователя, от имени которого выполняется операция привязки или отвязки." }
    },

    catalogs: {
    page: { name: "page", type: "int", description: "Страница выборки." },
    limit: { name: "limit", type: "int", description: "Количество возвращаемых сущностей за один запрос (Максимум – 250)." },

    id: { name: "id", type: "int", description: "Идентификатор списка или элемента списка." },
    name: { name: "name", type: "string", description: "Название списка или элемента списка." },

    created_by: { name: "created_by", type: "int", description: "Идентификатор пользователя, создавшего список или элемент списка." },
    updated_by: { name: "updated_by", type: "int", description: "Идентификатор пользователя, изменившего список или элемент списка последним." },
    created_at: { name: "created_at", type: "int", description: "Дата создания списка или элемента списка, передается в Unix Timestamp." },
    updated_at: { name: "updated_at", type: "int", description: "Дата изменения списка или элемента списка, передается в Unix Timestamp." },

    sort: { name: "sort", type: "int", description: "Сортировка списка." },
    type: { name: "type", type: "string", description: "Тип списка." },

    can_add_elements: { name: "can_add_elements", type: "bool", description: "Возможность добавления элементов списка из интерфейса (применяется только для списка счетов)." },
    can_show_in_cards: { name: "can_show_in_cards", type: "bool", description: "Признак отображения вкладки со списком в карточке сделки или покупателя (применяется только для списка счетов)." },
    can_link_multiple: { name: "can_link_multiple", type: "bool", description: "Возможность привязки одного элемента списка к нескольким сделкам или покупателям." },
    can_be_deleted: { name: "can_be_deleted", type: "bool", description: "Возможность удаления списка через интерфейс." },

    sdk_widget_code: { name: "sdk_widget_code", type: "int", description: "Код виджета, который управляет списком и может отображать собственное окно редактирования элемента (применяется только для списка счетов)." },

    account_id: { name: "account_id", type: "int", description: "Идентификатор аккаунта, в котором находится список или элемент списка." },

    request_id: { name: "request_id", type: "string", description: "Поле, которое возвращается в ответе без изменений и не сохраняется. Необязательный параметр." },

    query: { name: "query", type: "string", description: "Поисковый запрос по заполненным полям сущности." },

    filter: { name: "filter", type: "object", description: "Фильтр для отбора списков или элементов списков." },
    "filter[id]": { name: "filter[id]", type: "int | array", description: "Фильтр по идентификатору списка или элемента списка. Можно передать один ID или массив из нескольких ID." },

    with: { name: "with", type: "string", description: "Параметр для получения дополнительных данных. Может принимать несколько значений, указанных через запятую." },

    catalog_id: { name: "catalog_id", type: "int", description: "Идентификатор списка, в котором находится элемент." },

    is_deleted: { name: "is_deleted", type: "bool", description: "Признак удаления элемента списка." },

    custom_fields_values: { name: "custom_fields_values", type: "array | null", description: "Массив, содержащий информацию по значениям дополнительных полей, заданных для элемента списка." },

    "_embedded[warning][message]": { name: "_embedded[warning][message]", type: "string | null", description: "Предупреждение о наличии перерасчета в счете. Возвращается null, если перерасчета не произошло. Данный ключ доступен только для элементов списка счетов." }
    },

    account: {
    with: { name: "with", type: "string", description: "Параметр для получения дополнительных данных. Может принимать несколько значений, указанных через запятую." },

    id: { name: "id", type: "int", description: "Идентификатор аккаунта." },
    name: { name: "name", type: "string", description: "Название аккаунта." },
    subdomain: { name: "subdomain", type: "string", description: "Субдомен аккаунта." },
    current_user_id: { name: "current_user_id", type: "int", description: "Идентификатор текущего пользователя." },

    country: { name: "country", type: "string", description: "Страна, указанная в настройках аккаунта." },

    customers_mode: { name: "customers_mode", type: "string", description: "Режим покупателей. Возможные значения: unavailable (функционал недоступен), disabled (функционал отключен), segments (сегментация), dynamic (устаревший режим), periodicity (периодические покупки)." },

    is_unsorted_on: { name: "is_unsorted_on", type: "bool", description: "Включен ли функционал «Неразобранного» в аккаунте." },
    is_loss_reason_enabled: { name: "is_loss_reason_enabled", type: "bool", description: "Включен ли функционал причин отказа." },
    is_helpbot_enabled: { name: "is_helpbot_enabled", type: "bool", description: "Включен ли функционал типовых вопросов (доступен только на профессиональном тарифе)." },
    is_technical_account: { name: "is_technical_account", type: "bool", description: "Признак того, что аккаунт является техническим." },

    contact_name_display_order: { name: "contact_name_display_order", type: "int", description: "Порядок отображения имен контактов (1 – Имя, Фамилия; 2 – Фамилия, Имя)." },

    amojo_id: { name: "amojo_id", type: "string", description: "Уникальный идентификатор аккаунта для работы с сервисом чатов amoJo. Требуется GET параметр with." },
    version: { name: "version", type: "int", description: "Текущая версия amoCRM. Требуется GET параметр with." },
    drive_url: { name: "drive_url", type: "string", description: "Адрес сервиса файлов для конкретного аккаунта. Требуется GET параметр with." },
    is_api_filter_enabled: { name: "is_api_filter_enabled", type: "bool", description: "Включена ли API-фильтрация для аккаунта. Требуется GET параметр with." },

    entity_names: { name: "entity_names", type: "object", description: "Настройки названий сущностей. Требуется GET параметр with." },

    invoices_settings: { name: "invoices_settings", type: "object", description: "Настройки счетов-покупок. Требуется GET параметр with." },
    "invoices_settings[lang]": { name: "invoices_settings[lang]", type: "string", description: "Язык счетов-покупок и PayWall. Требуется GET параметр with." },
    "invoices_settings[invoices_catalog_id]": { name: "invoices_settings[invoices_catalog_id]", type: "int", description: "Идентификатор списка счетов-покупок. Требуется GET параметр with." },

    "_embedded[amojo_rights]": { name: "_embedded[amojo_rights]", type: "object", description: "Объект настроек чатов. Требуется GET параметр with." },
    "_embedded[amojo_rights][can_direct]": { name: "_embedded[amojo_rights][can_direct]", type: "object", description: "Доступны ли внутренние чаты. Требуется GET параметр with." },
    "_embedded[amojo_rights][can_create_groups]": { name: "_embedded[amojo_rights][can_create_groups]", type: "object", description: "Доступна ли возможность создавать групповые чаты. Требуется GET параметр with." },

    "_embedded[users_groups]": { name: "_embedded[users_groups]", type: "array", description: "Массив объектов групп пользователей аккаунта. Требуется GET параметр with." },
    "_embedded[users_groups][0][id]": { name: "_embedded[users_groups][0][id]", type: "int", description: "Идентификатор группы пользователей. Требуется GET параметр with." },
    "_embedded[users_groups][0][name]": { name: "_embedded[users_groups][0][name]", type: "string", description: "Название группы пользователей. Требуется GET параметр with." },

    "_embedded[task_types]": { name: "_embedded[task_types]", type: "array", description: "Типы задач, доступные в аккаунте. Требуется GET параметр with." },
    "_embedded[task_types][0][id]": { name: "_embedded[task_types][0][id]", type: "int", description: "Идентификатор типа задачи. Требуется GET параметр with." },
    "_embedded[task_types][0][name]": { name: "_embedded[task_types][0][name]", type: "string", description: "Название типа задачи. Требуется GET параметр with." },
    "_embedded[task_types][0][color]": { name: "_embedded[task_types][0][color]", type: "string", description: "Цвет типа задачи. Требуется GET параметр with." },
    "_embedded[task_types][0][icon_id]": { name: "_embedded[task_types][0][icon_id]", type: "int", description: "Идентификатор иконки типа задачи. Требуется GET параметр with." },
    "_embedded[task_types][0][code]": { name: "_embedded[task_types][0][code]", type: "string", description: "Код типа задачи. Требуется GET параметр with." },

    "_embedded[datetime_settings]": { name: "_embedded[datetime_settings]", type: "object", description: "Настройки и форматы даты и времени в аккаунте. Требуется GET параметр with." }
    },

    unsorted: {
    page: { name: "page", type: "int", description: "Страница выборки." },
    limit: { name: "limit", type: "int", description: "Количество возвращаемых сущностей за один запрос (максимум – 250)." },

    filter: { name: "filter", type: "object", description: "Фильтр для отбора неразобранных заявок." },
    "filter[uid]": { name: "filter[uid]", type: "string | array", description: "Фильтр по UID неразобранного. Можно передать один UID или массив UID." },
    "filter[category]": { name: "filter[category]", type: "array", description: "Фильтр по категориям неразобранных заявок (sip, mail, forms, chats)." },
    "filter[pipeline_id]": { name: "filter[pipeline_id]", type: "int", description: "Фильтр по идентификатору воронки, в которой находится неразобранное." },
    "filter[created_at]": { name: "filter[created_at]", type: "int | object", description: "Фильтр по дате создания и принятия неразобранного. Может принимать Unix Timestamp или диапазон значений от и до." },

    order: { name: "order", type: "object", description: "Сортировка результатов списка. Доступные поля: created_at, updated_at. Возможные значения: asc, desc." },

    uid: { name: "uid", type: "string", description: "Уникальный идентификатор неразобранного." },
    source_uid: { name: "source_uid", type: "string", description: "UID источника заявки, генерируемый на стороне интеграции." },
    source_name: { name: "source_name", type: "string", description: "Название источника заявки." },
    category: { name: "category", type: "string", description: "Категория неразобранного. Возможные значения: sip, mail, chats, forms." },
    pipeline_id: { name: "pipeline_id", type: "int", description: "Идентификатор воронки, в которой находится неразобранное." },

    created_at: { name: "created_at", type: "int", description: "Дата создания неразобранного, передается в Unix Timestamp." },

    metadata: { name: "metadata", type: "object", description: "Метаданные заявки. Набор данных зависит от типа заявки." },

    account_id: { name: "account_id", type: "int", description: "Идентификатор аккаунта, в котором находится неразобранное." },

    "_embedded": { name: "_embedded", type: "object", description: "Данные вложенных сущностей." },

    "_embedded[contacts]": { name: "_embedded[contacts]", type: "array", description: "Данные контакта, связанного с неразобранным. В массиве может находиться не более одного объекта." },
    "_embedded[contacts][0]": { name: "_embedded[contacts][0]", type: "object", description: "Модель контакта, связанного с неразобранным." },
    "_embedded[contacts][0][id]": { name: "_embedded[contacts][0][id]", type: "int", description: "Идентификатор контакта." },

    "_embedded[companies]": { name: "_embedded[companies]", type: "array", description: "Данные компании, связанной с неразобранным. В массиве может находиться не более одного объекта." },
    "_embedded[companies][0]": { name: "_embedded[companies][0]", type: "object", description: "Модель компании, связанной с неразобранным." },
    "_embedded[companies][0][id]": { name: "_embedded[companies][0][id]", type: "int", description: "Идентификатор компании." },

    "_embedded[leads]": { name: "_embedded[leads]", type: "array", description: "Данные сделки, связанной с неразобранным. В массиве всегда находится один объект." },
    "_embedded[leads][0]": { name: "_embedded[leads][0]", type: "object", description: "Модель сделки, связанной с неразобранным." },
    "_embedded[leads][0][id]": { name: "_embedded[leads][0][id]", type: "int", description: "Идентификатор сделки." },

    request_id: { name: "request_id", type: "string", description: "Поле, которое возвращается в ответе без изменений и не сохраняется." },

    user_id: { name: "user_id", type: "int", description: "Идентификатор пользователя, от имени которого выполняется операция с неразобранным." },

    status_id: { name: "status_id", type: "int", description: "Идентификатор статуса, в котором окажется сделка после принятия неразобранного." },

    link: { name: "link", type: "object", description: "Объект с информацией о сущности, к которой выполняется привязка." },
    "link[entity_id]": { name: "link[entity_id]", type: "int", description: "Идентификатор сущности, к которой выполняется привязка." },
    "link[entity_type]": { name: "link[entity_type]", type: "string", description: "Тип сущности, к которой выполняется привязка. Возможные значения: leads, customers." },
    "link[metadata]": { name: "link[metadata]", type: "object", description: "Метаданные операции привязки." },
    "link[metadata][contact_id]": { name: "link[metadata][contact_id]", type: "int", description: "Идентификатор контакта, к которому будет привязан контакт из неразобранного." },

    "_embedded[{entity_type}]": { name: "_embedded[{entity_type}]", type: "array", description: "Данные сущности, к которой выполнена привязка." },
    "_embedded[{entity_type}][0]": { name: "_embedded[{entity_type}][0]", type: "object", description: "Модель привязанной сущности." },
    "_embedded[{entity_type}][0][id]": { name: "_embedded[{entity_type}][0][id]", type: "int", description: "Идентификатор привязанной сущности." },

    total: { name: "total", type: "int", description: "Общее количество неразобранных заявок." },
    accepted: { name: "accepted", type: "int", description: "Общее количество принятых заявок." },
    declined: { name: "declined", type: "int", description: "Общее количество отклоненных заявок." },
    average_sort_time: { name: "average_sort_time", type: "int", description: "Среднее время разбора заявки в секундах." },
    categories: { name: "categories", type: "object", description: "Количество неразобранных заявок в каждой категории." }
    },

    conversations: {
    page: { name: "page", type: "int", description: "Страница выборки." },
    limit: { name: "limit", type: "int", description: "Количество возвращаемых сущностей за один запрос (максимум – 250)." },

    filter: { name: "filter", type: "object", description: "Фильтр для отбора бесед." },
    "filter[talk_id]": { name: "filter[talk_id]", type: "int | array", description: "Фильтр по идентификаторам бесед. Можно передать один идентификатор или массив идентификаторов." },
    "filter[contact_id]": { name: "filter[contact_id]", type: "int | array", description: "Фильтр по идентификаторам контактов. Можно передать один идентификатор или массив идентификаторов." },
    "filter[entity_id]": { name: "filter[entity_id]", type: "int | array", description: "Фильтр по идентификаторам сущностей, связанных с беседой. Используется совместно с filter[entity_type]." },
    "filter[entity_type]": { name: "filter[entity_type]", type: "string", description: "Тип сущности для фильтра по entity_id. Возможные значения: lead, customer." },
    "filter[only_in_work]": { name: "filter[only_in_work]", type: "any", description: "Фильтр по открытым беседам. При передаче параметра возвращаются только беседы в работе." },

    talk_id: { name: "talk_id", type: "int", description: "Идентификатор беседы." },

    created_at: { name: "created_at", type: "int", description: "Дата создания беседы, передается в Unix Timestamp." },
    updated_at: { name: "updated_at", type: "int", description: "Дата изменения беседы, передается в Unix Timestamp." },

    rate: { name: "rate", type: "int", description: "Оценка беседы клиентом, выставленная в результате работы NPS-бота." },

    contact_id: { name: "contact_id", type: "int", description: "Идентификатор контакта, к которому относится беседа." },

    chat_id: { name: "chat_id", type: "string", description: "Идентификатор чата, к которому относится беседа." },

    entity_id: { name: "entity_id", type: "int | null", description: "Идентификатор сущности, по которой ведется беседа." },

    entity_type: { name: "entity_type", type: "string | null", description: "Тип сущности, по которой ведется беседа. Возможные значения: lead, customer." },

    status: { name: "status", type: "string", description: "Статус беседы. Возможные значения: in_work, closed, nps_scheduled, nps_in_progress, with_error." },

    is_in_work: { name: "is_in_work", type: "bool", description: "Признак того, что беседа находится в работе и не закрыта." },

    is_read: { name: "is_read", type: "bool", description: "Признак того, что беседа прочитана." },

    origin: { name: "origin", type: "string", description: "Тип источника, по которому была создана беседа (например, telegram, viber и другие)." },

    source_id: { name: "source_id", type: "int | null", description: "Идентификатор источника беседы." },

    account_id: { name: "account_id", type: "int", description: "Идентификатор аккаунта, в котором находится беседа." },

    "_embedded": { name: "_embedded", type: "object", description: "Данные вложенных сущностей." },

    "_embedded[contacts]": { name: "_embedded[contacts]", type: "array", description: "Данные контакта, к которому относится беседа. В массиве находится не более одного объекта." },
    "_embedded[contacts][0]": { name: "_embedded[contacts][0]", type: "object", description: "Модель контакта, к которому относится беседа." },
    "_embedded[contacts][0][id]": { name: "_embedded[contacts][0][id]", type: "int", description: "Идентификатор контакта, к которому относится беседа." },

    "_embedded[leads]": { name: "_embedded[leads]", type: "array", description: "Данные сделки, по которой ведется беседа. В массиве находится не более одного объекта." },
    "_embedded[leads][0]": { name: "_embedded[leads][0]", type: "object", description: "Модель сделки, по которой ведется беседа." },
    "_embedded[leads][0][id]": { name: "_embedded[leads][0][id]", type: "int", description: "Идентификатор сделки, по которой ведется беседа." },

    "_embedded[customers]": { name: "_embedded[customers]", type: "array", description: "Данные покупателя, по которому ведется беседа. В массиве находится не более одного объекта." },
    "_embedded[customers][0]": { name: "_embedded[customers][0]", type: "object", description: "Модель покупателя, по которому ведется беседа." },
    "_embedded[customers][0][id]": { name: "_embedded[customers][0][id]", type: "int", description: "Идентификатор покупателя, по которому ведется беседа." },

    force_close: { name: "force_close", type: "bool", description: "Принудительное закрытие беседы. Необязательный параметр, значение по умолчанию — false." }
    },

    "entity-followers": {
    page: { name: "page", type: "int", description: "Страница выборки." },
    limit: { name: "limit", type: "int", description: "Количество возвращаемых сущностей за один запрос (максимум – 250)." },

    subscriber_id: { name: "subscriber_id", type: "int", description: "Идентификатор подписчика сущности." },
    type: { name: "type", type: "string", description: "Тип подписчика: пользователь или группа (user, group)." }
    }
};
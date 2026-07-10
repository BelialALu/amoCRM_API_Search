import { commonParams } from "./parameters";

export const methods = {
    leads: [
        {
            id: "get-leads",
            title: "Получение списка сделок",
            method: "GET",
            endpoint: "/api/v4/leads",
            description: "Возвращает список сделок.",
            inputParams: [commonParams.page, commonParams.limit]
        }
    ],

    contacts: [],

    companies: []
};
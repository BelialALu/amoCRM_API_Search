import { commonParams } from "./parameters";

export const methods = {
    leads: [
        {
            id: "get-leads",
            title: "Получение списка сделок",
            method: "GET",
            endpoint: "/api/v4/leads",
            description: "Метод получения списка сделок CRM.",
            restrictions: "Требуется авторизация.",
            inputParams: [
                commonParams.page,
                commonParams.limit
            ],
            outputParams: [],
            headers: {
                success: ["Content-Type: application/json"],
                error: ["Content-Type: application/problem+json"]
            },
            responseCodes: [
                {
                    code: 200,
                    description: "Успешный запрос"
                },
                {
                    code: 401,
                    description: "Ошибка авторизации"
                }
            ],
            requestExample: "GET /api/v4/leads?page=1&limit=50",
            responseExample: "{}",
            relatedMethods: []
        }
    ],

    contacts: [],
    companies: []
};
import { API_KEY, BASE_URL, ITEM_PER_PAGE } from "./constance";

class Api {
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(res);
    }

    getData(search, filters, page = "") {
        return fetch(
            `${this._baseUrl}${search}+${filters}&maxResults=${ITEM_PER_PAGE}${page}&Key=${API_KEY}`,
            {
                method: "GET",
                // headers: this._headers,
            }
        ).then((res) => this._checkResponse(res));
    }
}
const api = new Api({
    baseUrl: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;

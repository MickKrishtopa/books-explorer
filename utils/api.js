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

    getData(search) {
        return fetch(this._baseUrl + search, {
            method: "GET",

            headers: this._headers,
        }).then((res) => this._checkResponse(res));
    }
}

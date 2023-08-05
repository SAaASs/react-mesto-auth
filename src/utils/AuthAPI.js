export class AuthAPI {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }
  _checkResponse(res) {
    if (res.ok) {
      let resu = res.json();
      console.log(resu);
      return resu;
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }
  RegMe(email, password) {
    return fetch(this._baseUrl + "signup", {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        password: password,
        email: email,
      }),
    }).then(this._checkResponse);
  }
  getToken(email, password) {
    return fetch(this._baseUrl + "signin", {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        password: password,
        email: email,
      }),
    }).then(this._checkResponse);
  }
  authMe(JWT) {
    return fetch(this._baseUrl + "users/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JWT}`,
      },
    }).then(this._checkResponse);
  }
}
export const authApi = new AuthAPI({
  baseUrl: "https://auth.nomoreparties.co/",
  headers: {
    "Content-Type": "application/json",
  },
});

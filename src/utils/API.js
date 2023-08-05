export class API {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }
  _checkResponse(res) {
    if (res.ok) {
      const resu = res.json();
      console.log(resu);
      return resu;
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }
  getUser() {
    return fetch(this._baseUrl + "users/me", {
      headers: this._headers,
    }).then(this._checkResponse);
  }
  getCards() {
    return fetch(this._baseUrl + "cards", {
      headers: this._headers,
    }).then(this._checkResponse);
  }
  updateProfile(name_input, work_input) {
    return fetch(this._baseUrl + "users/me", {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: name_input,
        about: work_input,
      }),
    }).then(this._checkResponse);
  }
  sendCard(newPlaceName, newPlaceImgLink) {
    return fetch(this._baseUrl + "cards", {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: newPlaceName,
        link: newPlaceImgLink,
      }),
    }).then(this._checkResponse);
  }
  deleteCard(cardId) {
    return fetch(this._baseUrl + `cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    });
  }
  updateLike(cardId, isLiked) {
    if (!isLiked) {
      return fetch(this._baseUrl + `cards/${cardId}/likes`, {
        method: "PUT",
        headers: this._headers,
      }).then(this._checkResponse);
    } else {
      return fetch(this._baseUrl + `cards/${cardId}/likes`, {
        method: "DELETE",
        headers: this._headers,
      }).then(this._checkResponse);
    }
  }
  updateAvatar(newPlaceAvatarLink) {
    return fetch(this._baseUrl + `users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: newPlaceAvatarLink,
      }),
    }).then(this._checkResponse);
  }
}

export const api = new API({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-68/",
  headers: {
    authorization: "051fb33f-0728-4468-b1b3-22d15f3b12d4",
    "Content-Type": "application/json",
  },
});

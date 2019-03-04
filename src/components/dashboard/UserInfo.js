import React, { Component } from 'react'

class DetailedUserInfo extends Component {
  render() {
    const { params } = this.props
    // debugger
    return (
      <ul className="users-list__user-info d-flex justify-content-around">
        <div>
          <li><img src={params.picture.large} alt="avatar-large" className="rounded-circle"/></li>
          <li><p className="font-weight-bold">Username:</p> {params.login.username}</li>
          <li>{params.gender}</li>
          <li className="text-capitalize d-flex"><p className="font-weight-bold">Last Name: </p> {params.name.last}</li>
          <li className="text-capitalize d-flex"><p className="font-weight-bold">First Name: </p> {params.name.first}</li>
        </div>
        <div>
          <li><p className="font-weight-bold d-flex">Birthday:</p> {params.dob.date}</li>
          <li><p className="font-weight-bold d-flex">Phone:</p> {params.phone}</li>
          <li><p className="font-weight-bold d-flex">Cell:</p> {params.cell}</li>
          <li><p className="font-weight-bold d-flex">Email:</p> {params.email}</li>
          <li className="text-capitalize d-flex"><p className="font-weight-bold">Location:</p> {params.location.street}</li>
          <li><p className="font-weight-bold d-flex">Registered date:</p> {params.registered.date}</li>
        </div>
      </ul>
    )
  }
}

export default DetailedUserInfo


// – Last name / Фамилия
// – First Name / Имя
// – Gender icon / Пол
// – Username / Никнейм
// – Registered date / Дата регистрации
// – Email / Емаил
// – Location / Адрес
// – Birthday / Дата рождения
// – Phone / Телефон
// – Cell / Мобильный телефон
// – Bigger avatar image / Увеличенное изображение пользователя
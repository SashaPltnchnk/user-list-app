import React, { Component } from 'react'
import GeneralUserInfo from './GeneralUserInfo'
import DetailedUserInfo from './DetailedUserInfo'
import axios from 'axios'

export class UserList extends Component {
  // state ={
  //   avatar: null,
  //   lastName: null,
  //   firstName: null,
  //   userName: null,
  //   phone: null,
  //   location: null
  // }
  state = {
    userList: []
  }


  componentDidMount = () => {
    axios.get(`https://randomuser.me/api`)
    .then(res => {
      this.setState({ userList: res.data})
      console.log(res.data)
    }
  )
    .catch(err => console.log(err))
  }

  render() {
    const { userList } = this.state
    return (
      <div>
        <ul>
          <li><img src="" alt=""/>img</li>
          <li>Last</li>
          <li>First</li>
          <li>Username</li>
          <li>Phone</li>
          <li>Location</li>
          <li>+</li>
        </ul>
      {
        userList.map(item => (
          <ul key={item.id}>{item.phone}</ul>
        ))
      }
      </div>
    )
  }
}

export default UserList

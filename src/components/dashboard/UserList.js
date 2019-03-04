import React, { Component } from 'react'
import UserInfo from './UserInfo'
import axios from 'axios'
import { connect } from 'react-redux'
import { setUsers } from '../../store/actions/global'

class UserList extends Component {
  state = {
    activeUser: null
  }

  componentDidMount = () => {
    axios.get(`https://randomuser.me/api/?results=50`)
    .then(res => {
      // debugger
      this.props.setUsers(res.data.results)
      console.log(res.data)
    }
  )
    .catch(err => console.log(err))
  }

  showDetailedInfo = (uuid) => {
    this.setState({ activeUser: uuid})
  }

  isUserActive = user => {
    const activeUserId = this.state.activeUser
    // const activeUserParams = this.state.userList.find(item => item.login.uuid === activeUserId)
    return user.login.uuid === activeUserId
  }

  removeActiveUser = () => {
    this.setState({ activeUser: null })
  }

  render() {
    const {search} = this.props 
    const userList = this.props.userList.filter( item => item.name.first.indexOf(search) > -1 )
    const activeUserParams = this.props.userList.find(item => item.login.uuid === this.state.activeUser)

    return (
      <div>
        <ul className="d-flex justify-content-between align-items-center">
          <li> </li>
          <li>Last</li>
          <li>First</li>
          <li>Username</li>
          <li>Phone</li>
          <li>Location</li>
          <li className="btn btn-warning disabled">+</li>
        </ul>
      {
        userList.map(item => (
          <React.Fragment key={item.login.uuid}>
            <ul className="users-list__user d-flex justify-content-between align-items-center">
              <li><img src={item.picture.thumbnail} alt="avatar" className="rounded-circle"/></li>
              <li className="text-capitalize">{item.name.last}</li>
              <li className="text-capitalize">{item.name.first}</li>
              <li>{item.login.username}</li>
              <li>{item.phone}</li>
              <li className="text-capitalize">{item.location.city}</li>
              <button 
                className="btn btn-outline-warning"
                onClick={
                  this.isUserActive(item)
                  ? this.removeActiveUser
                  : () => this.showDetailedInfo(item.login.uuid)
                }>
                { this.isUserActive(item) ? '-' : '+'}
              </button>
            </ul>
            {
              this.isUserActive(item) 
              ? <UserInfo 
                    params={activeUserParams}
                  />
              : null
              
            }

          </React.Fragment>
        ))
      }
      </div>
    )
  }
}

export default connect(
  store => ({
    search: store.global.search,
    userList: store.global.userList
  }),
  {
    setUsers
  }
)(UserList)

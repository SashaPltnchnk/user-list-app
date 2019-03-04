import React, { Component } from 'react'
import { connect } from 'react-redux'

class ModalChart extends Component {

  defineGenders = () => {
    const users = this.props.userList
    const res = {
      male: 0,
      female: 0,
    }

    users.forEach(item => {
      res[item.gender] += 1
    })

    return res
  }

  render() {
    const genders = this.defineGenders()
    const closeChart = this.props.closeChart
    return (
      <div className="modal">
        <button className="btn btn-danger close-icon" onClick={closeChart}>+</button>
        <div className="card text-white bg-danger mb-3">
          <div className="card-body">
            <div className="card-title">Males: {genders.male}</div>
            <div className="card-text">Females: {genders.female}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  store => ({
    userList: store.global.userList
  })
)(ModalChart)
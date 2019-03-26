import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chart from 'chart.js'

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

  componentDidMount = () => {
    const genders = this.defineGenders();
    console.log(genders);
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Male', 'Female'],
            datasets: [{
                label: '# of Votes',
                data: [genders.male, genders.female],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
  }

  render() {
    const genders = this.defineGenders()
    const closeChart = this.props.closeChart
    return (
      <div className="modal">
        <button className="btn btn-danger close-icon" onClick={closeChart}>+</button>
        <div className="card text-black bg-white mb-3">
          <div className="card-body">
            <canvas id="myChart" width="400" height="400"></canvas>
            <div className="card-text">Males: {genders.male}</div>
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
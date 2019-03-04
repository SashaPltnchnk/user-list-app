import React, { Component } from 'react'
import ModalChart from './ModalChart'

class Chart extends Component {
  state = {
    showModal: false
  }

  showChart = () => {
    this.setState({ showModal: true})
  }

  closeChart = () => {
    this.setState({ showModal: false})
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <button className="btn btn-outline-success" onClick={this.showChart}>Show Chart</button>
        </div>
        {
          !this.state.showModal 
          ? null
          : <ModalChart closeChart={this.closeChart} />
        }
      </React.Fragment>
    )
  }
}

export default Chart;

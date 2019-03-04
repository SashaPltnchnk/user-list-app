import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeSearchValue } from '../../store/actions/global'

class SearchInput extends Component {
  searchHandleChange = e => {
    this.props.changeSearchValue(e.target.value)
  }
  
  render() {
    return (
      <div className="serch-form">
        {/* <label htmlFor="search-input">Type first name</label> */}
        <input 
          className="form-control"
          onChange={this.searchHandleChange}
          value={this.props.value} 
          type="text" id="search-input" placeholder="Type first name"/>
        {/* <button onClick={searchByName}>Search</button> */}
      </div>
    )
  }
}

export default connect(
  store => ({
    value: store.global.search
  }),
  { changeSearchValue, }
)(SearchInput);

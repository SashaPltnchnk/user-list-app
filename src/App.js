import React, { Component } from 'react'
import './App.css'
import Header from './components/header/Header'
import Dashboard from './components/dashboard/Dashboard'


class App extends Component {
  render() {
    return (
      <div className="bg-light">
        <Header />
        <Dashboard />

      </div>
    );
  }
}



export default App

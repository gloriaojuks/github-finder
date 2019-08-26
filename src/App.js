import React, { Component } from 'react'
import Navbar from './components/layouts/Navbar';
import './App.css'
import Users from './components/users/Users';
import Search from './components/users/Search';
import axios from 'axios'

 class App extends Component {
  state ={
    users: [],
    loading: false
}

    async componentDidMount(){
    
    this.setState({loading: true})
    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    console.log(res.data)
    this.setState({users: res.data, loading: false})
  }
  render() {
    return (
      <div className="App">
        <Navbar title="github finder" icon="fab fa-github"/>
          <div className="container">
          <Search />
        <Users loading={this.state.loading} users={this.state.users} />
        </div>
    
      </div>
    )
  }
}

export default App

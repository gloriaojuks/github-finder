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

  //   async componentDidMount(){
    
  //   this.setState({loading: true})
  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //   console.log(res.data)
  //   this.setState({users: res.data, loading: false})
  // }

//search github users
  searchUsers = async text =>{
    this.setState({loading: true})
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({users: res.data.items, loading: false})
  };

  //clear users from state
  clearUsers =()=>this.setState({users: [], loading: false})
  render() {
    const {users, loading } =this.state
    return (
      <div className="App">
        <Navbar title="github finder" icon="fab fa-github"/>
          <div className="container">
          <Search searchUsers={this.searchUsers} clearUser={this.clearUsers} showClear={this.state.users.length>0?true:false}/>
        <Users loading={loading} users={users} />
        </div>
    
      </div>
    )
  }
}

export default App

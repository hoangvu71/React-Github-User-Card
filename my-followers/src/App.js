import React from "react"
import UserCard from "./components/UserCard"
import SearchUser from "./components/SearchUser"

import axios from "axios"
import ShowFollowers from "./components/ShowFollowers";
class App extends React.Component{
  
  constructor(){
    super();
    this.state = { user: {} }
  }
  
  componentDidUpdate() {
    axios
    .get(`https://api.github.com/users/${this.state.user}`)
    .then(res => {
      this.setState({ user: res.data});
      console.log(this.state.user)
  })
    .catch(err => console.log("There's an error!", err))
  }
  settingState = (id) => {
    this.setState( { user: id})
  }
  
  render(){
    return(
      <div>
        <h2>GitHub User Card:</h2>
        <SearchUser hideOrShow={this.hideFollowersOnSearchButton} settingState={this.settingState} settingName={this.state.user}/>
        <UserCard data={this.state.user}/>
        <ShowFollowers hideOrShow={this.hideFollowersOnSearchButton} data={this.state.user}/>
      </div>
    )
  }
}




export default App
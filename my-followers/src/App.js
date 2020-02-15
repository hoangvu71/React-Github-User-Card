import React from "react"
import UserCard from "./components/UserCard"
import Followers from "./components/Followers";

import axios from "axios"
class App extends React.Component{
  
  constructor(){
    super();
    this.state = { user: [] }
    
  }

  componentDidMount() {
      axios
      .get("https://api.github.com/users/hoangvu71")
      .then(res => {
        this.setState({ user : res.data});
      })
      .catch(err => console.log("Error!!!!", err))

  }
  render(){
    return(
      <div>
        {console.log(this.state.user)}
        <UserCard data={this.state.user}/>
        <Followers />
      </div>
    )
  }
}




export default App
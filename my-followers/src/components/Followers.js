import React from "react"
import axios from "axios"
class Followers extends React.Component{
    constructor(){
        super();
        this.state = { followers: []}
    }
    componentDidMount() {
        axios.get("https://api.github.com/users/hoangvu71/followers")
        .then(res => this.setState({ followers: res.data}))
        .catch(err => console.log("Error in Followers.js", err))
    }
    render(){
        return(
        <div>Followers:
            {this.state.followers.map(ele => <div>{ele.login}</div>)}</div>
        )
    }
}




export default Followers
import React from "react"
import axios from "axios"
import "./Followers.scss"
class Followers extends React.Component{
    constructor(){
        super();
        this.state = { followers: []}
    }
    componentDidMount() {
        axios.get(`${this.props.data.followers_url}`)
        .then(res => {this.setState({followers: res.data});
            console.log(res)})
        .catch(err => console.log("Error in Followers.js", err));
    }
   
    render(){
        return(
        <div className="followersContainer">
            {this.state.followers.map(ele => (<div>
                <img src={ele.avatar_url} alt={ele.login}/>
                <div>{ele.login}</div>
                </div>))}
        </div>
        )
    }
}




export default Followers
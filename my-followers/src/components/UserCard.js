import React from "react"

class UserCard extends React.Component{
    render(){
        return(
            <div>
                <h2>{this.props.data.login}</h2>
                <img src={this.props.data.avatar_url} alt={this.props.data.login}/>
            </div>
        )
    }
}



export default UserCard
import React from "react"

class UserCard extends React.Component{
    render(){
        return(
            <div>
                <h2>GitHub Page</h2>
                <div>Name: {this.props.data.login}</div>
            </div>
        )
    }
}



export default UserCard
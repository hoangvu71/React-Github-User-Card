import React from "react"

class SearchUser extends React.Component {
    constructor() {
        super();
        this.state = { user: [] }
    }
    submitHandler = (event) => {
        event.preventDefault();
        this.props.settingState(this.state.user)
        console.log("This is state of search user", )
    }
    changeHandler = (event) => {
        this.setState( {[event.target.name]: event.target.value})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input name="user" onChange={this.changeHandler} type="text" placeholder="...search"></input>
                    <button>Get User</button>
                </form>
            </div>
        )

    }
}




export default SearchUser
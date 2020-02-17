import React from "react"
import Followers from "./Followers"
class ShowFollowers extends React.Component{
    constructor(){
        super();
        this.state = { show: false }
    }
    showUser = () => {
        this.setState(prevState => ({show: !prevState.show}));
    }

    render(){
        return(
            <div>
                <button onClick={this.showUser}>Followers</button>
                {this.state.show && <Followers data={this.props.data}/>}
            </div>
        )
    }
}




export default ShowFollowers
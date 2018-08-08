import React, { Component } from "react";
import CreateFighter from "./CreateFighter/CreateFighter.js";
import Fighters from "./Fighters/fightersIndex.js";


class UserContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fighters: []
        }
        console.log(this.props)
    }

    render() {
        return (
            <div>
                <div>
                    <h1>Username:</h1>
                </div>
                <div>
                    <h3>Create A Fighter</h3>
                    <CreateFighter addFighter={this.props.addFighter} />
                    <h1>Fighters:</h1>
                    <Fighters fighters={this.props.fighters}  />
                </div>
            </div>
        )
    }
}


export default UserContainer;
import React, { Component } from "react";
import CreateBattle from "./CreateBattle/CreateBattle.js";
import Battles from "./Battles/battlesIndex.js";


class BattleContainer extends Component {
    constructor() {
        super();
        this.state = {
            battles: []
        }
    }

    render() {
        return (
            <div>
                <div>
                    <h3>Create A Battle</h3>
                    <CreateBattle addBattle={this.props.addBattle} />
                    <h1>Battles:</h1>
                    <Battles battles={this.props.battles}  />
                </div>
            </div>
        )
    }
}


export default BattleContainer;
import React, { Component } from "react";


class FightersList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fighters: []
        }
    }

    render(props) {
            const allFighters = this.props.fighters.map((fighter, i) => {
            return(
                <li key={fighter._id} >
                    <h3>{fighter.name}</h3>
                    <button onClick={this.props.deleteFighter.bind(null, fighter._id)} >Delete</button>
                </li>
            )
        })
        return(
            <div>
                <ul>
                    {allFighters}
                </ul>
            </div>
        )
    }

}


export default FightersList;
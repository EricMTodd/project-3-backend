import React, { Component } from "react";


class BattlesList extends Component {
    constructor(props){
        super(props);
        this.state = {
            fighters: []
        }
    }

    handleClick = async (e) => {
        let parsedValue = JSON.parse(e.target.value);
        await this.setState({ fighters: [...this.state.fighters, parsedValue] });
    }

    render() {
        const allFighters = this.props.fighters.map((fighter, index) => {
            return(
                <div>
                    <ul>
                        <li key={fighter._id} >
                            {fighter.name}
                            <form>
                                <button name={fighter.name} type="button" value={JSON.stringify({fighter})} onClick={this.handleClick}>Select Fighter</button>
                            </form>
                        </li>
                    </ul>
                </div>
            )
        })
        const allParticipants = this.state.fighters.map((participant, index) => {
            let participantName = participant.fighter.name;
            console.log("this.state:", this.state);
            return(
                <div>
                    <li key={participant._id} >
                        {participantName}
                    </li>
                </div>
            )
        })
        const allBattles = this.props.battles.map((battle, index) => {
        return(
            <div>
                <div key={battle._id} >
                    <ul>
                    <h2>{battle.name}</h2>
                    <h3>Participants:</h3>
                        {allParticipants}
                    </ul>
                </div>
                <h3>Available Fighters:</h3>
                {allFighters}
            </div>
        )
    })
        return(
            <div>
                {allBattles}
            </div>
        )
    }
}


export default BattlesList;
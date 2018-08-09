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
        console.log("this.state:", this.state);
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
        const allBattles = this.props.battles.map((battle, i) => {
        return(
            <div>
                <div>
                    <ul>
                    <h2>{battle.name}</h2>
                    <h3>Participants:</h3>
                        <li key={battle._id} >
                            {battle.fighters}
                        </li>
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
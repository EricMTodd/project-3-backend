import React, { Component } from "react";


class BattlesList extends Component {
    constructor(props){
        super(props);
        this.state = {
            fighters: []
        }
    }

    handleClick = async (e) => {
        console.log("this.state:", this.state);
        console.log("this.props:", this.props);
        console.log("e.target.value:", e.target.value);
        let target = (e.target.value);
        // for (let key in target) {
        //     console.log(key, 'key');
        //     console.log(target, 'target');
        //     console.log(target[key], 'target key');
        // }
        console.log(typeof target);
        // e.preventDefault();
        // this.setState({[e.target.name]: e.target.value})
    }

    render() {
        const allFighters = this.props.fighters.map((fighter, i) => {
            return(
                <div>
                    <ul>
                        <li key={fighter._id} >
                            {fighter.name}
                            <form>
                                <button name={fighter.name} type="button" value={fighter} onClick={this.handleClick}>Select Fighter</button>
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
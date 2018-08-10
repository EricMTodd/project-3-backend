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

    initializeCombat = async (e) => {
        console.log("Initializing Combat.");
        let fighters = this.state.fighters;
        if (fighters.length < 2) {
            console.log("Not enough participants, current participant count:", fighters.length, ", you need ",  2 - fighters.length, " more");
        } else {
            console.log("Battle is full.");
            this.executeCombat();
        }
    }

    turn1 = async (e) => {
        const fighter1 = this.state.fighters[0].fighter;
        console.log("Turn One:", fighter1.name);
        const fighter2 = this.state.fighters[1].fighter;
        const f1MaxAtk = fighter1.baseAtk + fighter1.atkVariance;
        console.log("fighter1:", fighter1);
        console.log("f1MaxAtk:", f1MaxAtk);
        let f1Atk = Math.floor(Math.random() * (f1MaxAtk - fighter1.baseAtk) ) + fighter1.baseAtk;
        console.log("f1Atk:", f1Atk);
        if (f1Atk > fighter2.def) {
            console.log("HIT FOR:", f1Atk, "damage")
            if (f1Atk > fighter2.hp) {
               return console.log(fighter1.name, "has won!");
            } else {
                let newHp = fighter2.hp -= f1Atk;
                console.log("fighter2.hp:", newHp);
                this.turn2();
                return;
            }
        } else {
            console.log("MISS");
            this.turn2();
            return;
        }
    }

    turn2 = async (e) => {
        const fighter1 = this.state.fighters[0].fighter;
        const fighter2 = this.state.fighters[1].fighter;
        console.log("Turn Two:", fighter2.name);
        const f2MaxAtk = fighter2.baseAtk + fighter2.atkVariance;
        console.log("fighter2:", fighter2);
        console.log("f2MaxAtk:", f2MaxAtk);
        let f2Atk = Math.floor(Math.random() * (f2MaxAtk - fighter2.baseAtk) ) + fighter2.baseAtk;
        console.log("f2Atk:", f2Atk);
        if (f2Atk > fighter1.def) {
            console.log("HIT FOR:", f2Atk, "damage")
            if (f2Atk > fighter1.hp) {
                return console.log(fighter2.name, "has won!");
            } else {
                let newHp = fighter1.hp -= f2Atk;
                console.log("fighter1.hp:", newHp);
                this.turn1();
            return;
            }
        } else {
            console.log("MISS");
            this.turn1();
            return;
        }
    }

    executeCombat = async (e) => {
        console.log("Executing Combat.");
        this.turn1();
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
                        <form>
                            <button name="initializeCombat" type="button" onClick={this.initializeCombat} >Begin the Battle!</button>
                            <button name="deleteBattle" type="button" onClick={this.props.deleteBattle.bind(null, battle._id)} >Delete</button>
                        </form>
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
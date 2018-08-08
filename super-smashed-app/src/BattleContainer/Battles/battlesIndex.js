import React, { Component } from "react";


const BattlesList = (props) => {
    const allBattles = props.battles.map((battle, i) => {
        return(
            <li key={battle._id} >
                <h3>{battle.name}</h3>
                <h3>Participants: {battle.fighters}</h3>
            </li>
        )
    })
    return(
        <div>
            <ul>
                {allBattles}
            </ul>
        </div>
    )
}


export default BattlesList;
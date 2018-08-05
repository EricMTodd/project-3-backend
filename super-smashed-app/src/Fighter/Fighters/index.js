import React, { Component } from "react";


const FightersList = (props) => {
    const allFighters = props.fighters.map((fighter, i) => {
        return(
            <li key={fighter._id}>
                <h1>{fighter.name}</h1>
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


export default FightersList;
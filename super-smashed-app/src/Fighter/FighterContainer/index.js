import React, { Component } from "react";
import Fighters from "../Fighters/";


class FighterContainer extends Component {
    constructor() {
        super();
        this.state = {
            fighters: []
        }
    }

    componentDidMount() {
        this.getFighters().then((fighters) => {
            this.setState({
                fighters: fighters.data
            })
        }).catch((err) => {
            console.log(err);
        });
    }

    getFighters = async () => {
        const fighters = await fetch("http://localhost:9000/api/v1/fighters", {
            credentials: "include",
            method: "GET"
        });
        const parsedFighters = fighters.json();
        return parsedMovies
    }

    addFighter = async (fighter, e) => {
        e.preventDefault();
        try {
            const createFighter = await fetch("http://localhost:9000/api/v1/fighters", {
                method: "POST",
                credentials: "include",
                body: JSON.stringify(fighter),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const parsedResponse = await createFighter.json();
            this.setState({fighters: [...this.state.fighters, parsedResponse.data]})
            console.log(this.state);
        } catch (err) {
            console.log(err);
            res.send(err);
        }
    }
}


export default FighterContainer;
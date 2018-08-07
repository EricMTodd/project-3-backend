import React, { Component } from "react";
import CreateFighter from "./CreateFighter/CreateFighter.js";
import Fighters from "./Fighters/fightersIndex.js";


class UserContainer extends Component {
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
            console.log(err)
        });
    }

    getFighters = async () => {
        const fighters = await fetch("http://localhost:9000/api/v1/fighters", {
            credentials: "include",
            mtehod: "GET"
        }) ;
        const parsedFighters = fighters.json();
        return parsedFighters
    }

    addFighter = async (fighter, e) => {
        e.preventDefault();
        try {
            const createFighter = await fetch("http://localhost:9000/api/v1/fighters", {
                method: "post",
                credentials: "include",
                body: JSON.stringify(fighter),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const parsedResponse = await createFighter.json();
            this.setState({fighters: [...this.state.fighters, parsedResponse.data]})
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        return (
            <div>
                <div>
                    <h1>Username:</h1>
                </div>
                <div>
                    <h3>Create A Fighter</h3>
                    <CreateFighter addFighter={this.addFighter} />
                    <h1>Fighters:</h1>
                    <Fighters fighters={this.state.fighters}  />
                </div>
            </div>
        )
    }
}


export default UserContainer;
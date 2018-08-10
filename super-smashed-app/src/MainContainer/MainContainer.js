import React, { Component } from "react";
import UserContainer from "../UserContainer/UserContainer.js";
import BattleContainer from "../BattleContainer/BattleContainer.js";
import "../BattleContainer/CreateBattle/CreateBattle.js";
import "../UserContainer/CreateFighter/CreateFighter.js";


class MainContainer extends Component {
    constructor() {
        super();
        this.state = {
            battles: [],
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
        this.getBattles().then((battles) => {
            this.setState({
                battles: battles.data
            })
        }).catch((err) => {
            console.log(err)
        })
        console.log(this.state)
    }

    getBattles = async () => {
        const battles = await fetch("http://localhost:9000/api/v1/battles", {
            credentials: "include",
            method: "GET"
        }) ;
        const parsedBattles = battles.json();
        return parsedBattles
    }

    getFighters = async () => {
        const fighters = await fetch("http://localhost:9000/api/v1/fighters", {
            credentials: "include",
            method: "GET"
        }) ;
        const parsedFighters = fighters.json();
        return parsedFighters
    }

    addBattle = async (battle, e) => {
        e.preventDefault();
        try {
            const createBattle = await fetch("http://localhost:9000/api/v1/battles", {
                method: "post",
                credentials: "include",
                body: JSON.stringify(battle),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const parsedResponse = await createBattle.json();
            this.setState({battles: [...this.state.battles, parsedResponse.data]})
        } catch (err) {
            console.log(err)
        }
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

    deleteBattle = async (id, e) => {
        e.preventDefault();
        console.log("This is: The Most Hated");
        const deleteBattle = await fetch("http://localhost:9000/api/v1/battles/" + id, {
            credentials: "include",
            method: "DELETE"
        });
        const parsedResponse = await deleteBattle.json();
        this.setState({battles:
        this.state.battles.filter((battle, i) => {
            return battle._id !== id
        })});
    }

    deleteFighter = async (id, e) => {
        e.preventDefault();
        console.log("CLICKED BITCH");
        const deleteFighter = await fetch("http://localhost:9000/api/v1/fighters/" + id, {
            credentials: "include",
            method: "DELETE"
        });
        const parsedResponse = await deleteFighter.json();
        this.setState({fighters:
        this.state.fighters.filter((fighter, i) => {
            return fighter._id !== id
        })});
    }

    render() {
        return(
            <div className="mainContainer">
                <div className="userContainer">
                    <UserContainer addFighter={this.addFighter} fighters={this.state.fighters} battles={this.state.battles} deleteFighter={this.deleteFighter} />
                </div>
                <div className="battleContainer">
                    <BattleContainer addBattle={this.addBattle} fighters={this.state.fighters} battles={this.state.battles} deleteBattle={this.deleteBattle} />
                </div>
            </div>
        )
    }
}


export default MainContainer;
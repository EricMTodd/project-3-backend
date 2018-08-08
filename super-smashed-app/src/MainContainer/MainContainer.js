import React, { Component } from "react";
import UserContainer from "../UserContainer/UserContainer.js";
import BattleContainer from "../BattleContainer/BattleContainer.js";
import CreateBattle from "../BattleContainer/CreateBattle/CreateBattle.js";
import CreateFighter from "../UserContainer/CreateFighter/CreateFighter.js";


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
            mtehod: "GET"
        }) ;
        const parsedBattles = battles.json();
        return parsedBattles
    }

    getFighters = async () => {
        const fighters = await fetch("http://localhost:9000/api/v1/fighters", {
            credentials: "include",
            mtehod: "GET"
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
            this.setState({battles: [...this.props.battles, parsedResponse.data]})
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

    render() {
        return(
            <div className="mainContainer">
                <div className="userContainer">
                    <UserContainer addFighter={this.addFighter} fighters={this.state.fighters} battles={this.state.battles} />
                </div>
                <div className="battleContainer">
                    <BattleContainer addBattle={this.addBattle} fighters={this.state.fighters} battles={this.state.battles} />
                </div>
            </div>
        )
    }
}


export default MainContainer;
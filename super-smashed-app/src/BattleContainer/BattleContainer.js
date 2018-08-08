import React, { Component } from "react";
import CreateBattle from "./CreateBattle/CreateBattle.js";
import Battles from "./Battles/battlesIndex.js";


class BattleContainer extends Component {
    constructor() {
        super();
        this.state = {
            battles: []
        }
    }

    // componentDidMount() {
    //     this.getBattles().then((battles) => {
    //         this.setState({
    //             battles: battles.data
    //         })
    //     }).catch((err) => {
    //         console.log(err)
    //     });
    // }

    // getBattles = async () => {
    //     const battles = await fetch("http://localhost:9000/api/v1/battles", {
    //         credentials: "include",
    //         mtehod: "GET"
    //     }) ;
    //     const parsedBattles = battles.json();
    //     return parsedBattles
    // }

    // addBattle = async (battle, e) => {
    //     e.preventDefault();
    //     try {
    //         const createBattle = await fetch("http://localhost:9000/api/v1/battles", {
    //             method: "post",
    //             credentials: "include",
    //             body: JSON.stringify(battle),
    //             headers: {
    //                 "Content-Type": "application/json"
    //             }
    //         });
    //         const parsedResponse = await createBattle.json();
    //         this.setState({battles: [...this.props.battles, parsedResponse.data]})
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }

    render() {
        return (
            <div>
                <div>
                    <h3>Create A Battle</h3>
                    <CreateBattle addBattle={this.props.addBattle} />
                    <h1>Battles:</h1>
                    <Battles battles={this.props.battles}  />
                </div>
            </div>
        )
    }
}


export default BattleContainer;
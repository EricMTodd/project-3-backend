import React, { Component } from "react";
import UserContainer from "../UserContainer/UserContainer.js";
import BattleContainer from "../BattleContainer/BattleContainer.js";
import Player from "../Youtube/YoutubeComp.js";



class MainContainer extends Component {
    render() {
        return(
            <div className="mainContainer">
                <div className="userContainer">
                    <UserContainer />
                </div>
                <div className="battleContainer">
                    <BattleContainer />
                </div>
                <div>
                  <Player />
                </div>
            </div>
        )
    }
}


export default MainContainer;

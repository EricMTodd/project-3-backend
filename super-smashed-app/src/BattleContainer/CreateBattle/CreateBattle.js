import React, { Component } from "react";


class CreateBattle extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            fighters: []
         }
    }

    updateBattle = async (e) => {
        await this.setState({[e.target.name]: e.target.value});
        return console.log("this.state:", this.state)
    }

    render() {
        return(
            <div>
                <form onSubmit={this.props.addBattle.bind(null, this.state)}>
                    <label>
                        Name:
                        <input type="text" name="name" onChange={this.updateBattle} />
                    </label><br/>
                    <input type="Submit" value="Create Battle" />
                </form>
            </div>
        )
    }
}


export default CreateBattle;
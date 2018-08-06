import React, { Component } from "react";


class CreateFighter extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            hp: "",
            def: "",
            str: "",
            dex: "",
            int: "",
            atk: ""
         }
    }
    updateFighter = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }
    render() {
        return(
            <form onSubmit={this.props.addFighter.bind(null, this.state)}>
                <label>
                    name:
                    <input type="text" name="name" onChange={this.updateFighter} />
                </label>
                <label>
                    hp: DETERMINED BY OTHER VALUES
                </label>
                <label>
                    def: DETERMINTED BY OTHER VALUES
                </label>
                <label>
                    str:
                    <input type="text" name="str" onChange={this.updateFighter} />
                </label>
                <label>
                    dex:
                    <input type="text" name="dex" onChange={this.updateFighter} />
                </label>
                <label>
                    int:
                    <input type="text" name="int" onChange={this.updateFighter} />
                </label>
                <label>
                    atk: DETERMINED BY OTHER VALUES
                </label>
                <input type="Submit" value="Create Fighter" />
            </form>
        )
    }
}


export default CreateFighter;
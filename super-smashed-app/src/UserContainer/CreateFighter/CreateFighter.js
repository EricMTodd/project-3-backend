import React, { Component } from "react";


class CreateFighter extends Component {
    constructor() {
        super();
        this.state = {
            archetype: "",
            name: "",
            hp: 0,
            def: 0,
            minAtk: 0,
            maxAtk: 0,
            str: 0,
            dex: 0,
            int: 0
         }
    }

    updateFighter = async (e) => {
        await this.setState({[e.target.name]: e.target.value});
        return console.log("this.state:", this.state)
    }

    selectArchetype = async (e) => {
        await this.setState({archetype: e.target.value});
        await this.checkArchetype();
        return
    }

    checkArchetype = async () => {
        if (this.state.archetype === "Brawler") {
           await this.setState({str: 18, dex: 12, int: 6});
           await this.setState({hp: (this.state.str - 10)/2 + 10, def: (this.state.dex - 10)/2 + 10, minAtk: this.state.str/2, maxAtk: this.state.dex/2});
        } else if (this.state.archetype === "Scrapper") {
            await this.setState({str: 12, dex: 18, int: 6});
            await this.setState({hp: (this.state.str - 10)/2 + 10, def: (this.state.dex - 10)/2 + 10, minAtk: this.state.str/2, maxAtk: this.state.dex/2});
        } else if (this.state.archetype === "Arcanist") {
            await this.setState({str: 6, dex: 12, int: 18});
            await this.setState({hp: (this.state.str - 10)/2 + 10, def: (this.state.dex - 10)/2 + 10, minAtk: this.state.int/2, maxAtk: this.state.int/2});
        } else {
            this.setState({hp: 0, def: 0, minAtk: 0, maxAtk: 0, str: 0, dex: 0, int: 0});
            console.log("No archetype set.");
        }
        return console.log(this.state);
    }

    incrementAttribute = async (e) => {
        e.preventDefault();
        const targetValue = e.target.value;
        const oldValue = targetValue;
        const updatedValue = parseInt(oldValue) + 1;
        await this.setState({[e.target.name]: updatedValue});
        if (this.state.archetype === "Brawler") {
            await this.setState({hp: (this.state.str - 10)/2 + 10, def: (this.state.dex - 10)/2 + 10, minAtk: this.state.str/2, maxAtk: this.state.dex/2});
         } else if (this.state.archetype === "Scrapper") {
             await this.setState({hp: (this.state.str - 10)/2 + 10, def: (this.state.dex - 10)/2 + 10, minAtk: this.state.str/2, maxAtk: this.state.dex/2});
         } else if (this.state.archetype === "Arcanist") {
             await this.setState({hp: (this.state.str - 10)/2 + 10, def: (this.state.dex - 10)/2 + 10, minAtk: this.state.int/2, maxAtk: this.state.int/2});
         } else {
             this.setState({hp: 0, def: 0, minAtk: 0, maxAtk: 0, str: 0, dex: 0, int: 0});
             console.log("No archetype set.");
         }
         return console.log(this.state);
    }

    decrementAttribute = async (e) => {
        e.preventDefault();
        let targetValue = e.target.value;
        const oldValue = targetValue;
        const updatedValue = parseInt(oldValue) - 1;
        await this.setState({[e.target.name]: updatedValue});
        if (this.state.archetype === "Brawler") {
            await this.setState({hp: (this.state.str - 10)/2 + 10, def: (this.state.dex - 10)/2 + 10, minAtk: this.state.str/2, maxAtk: this.state.dex/2});
         } else if (this.state.archetype === "Scrapper") {
             await this.setState({hp: (this.state.str - 10)/2 + 10, def: (this.state.dex - 10)/2 + 10, minAtk: this.state.str/2, maxAtk: this.state.dex/2});
         } else if (this.state.archetype === "Arcanist") {
             await this.setState({hp: (this.state.str - 10)/2 + 10, def: (this.state.dex - 10)/2 + 10, minAtk: this.state.int/2, maxAtk: this.state.int/2});
         } else {
             this.setState({hp: 0, def: 0, minAtk: 0, maxAtk: 0, str: 0, dex: 0, int: 0});
             console.log("No archetype set.");
         }
         return console.log(this.state);
    }

    render() {
        return(
            <div>
                <form onChange={this.selectArchetype}>
                    <select name="archetypes" >
                    <option value="Select Archetype">Select Archetype</option>
                        <option value="Brawler" onChange={this.selectArchetype} >Brawler</option>
                        <option value="Scrapper" onChange={this.selectArchetype} >Scrapper</option>  
                        <option value="Arcanist" onChange={this.selectArchetype} >Arcanist</option>             
                    </select>
                </form>
                <form onSubmit={this.props.addFighter.bind(null, this.state)}>
                    <label>
                        name:
                        <input type="text" name="name" onChange={this.updateFighter} />
                    </label><br/>
                    <label>
                        hp: {this.state.hp}
                    </label><br/>
                    <label>
                        def: {this.state.def}
                    </label><br/>
                    <label>
                        minAtk: {this.state.minAtk}
                    </label><br/>
                    <label>
                        maxAtk: {this.state.maxAtk}
                    </label><br/>
                    <label>
                        str: {this.state.str}
                        <button name="str" value={this.state.str} onClick={this.decrementAttribute} >-</button>
                        <button name="str" value={this.state.str} onClick={this.incrementAttribute} >+</button>
                    </label><br/>
                    <label>
                        dex: {this.state.dex}
                        <button name="dex" value={this.state.dex} onClick={this.decrementAttribute} >-</button>
                        <button name="dex" value={this.state.dex} onClick={this.incrementAttribute} >+</button>
                    </label><br/>
                    <label>
                        int: {this.state.int}
                        <button name="int" value={this.state.int} onClick={this.decrementAttribute} >-</button>
                        <button name="int" value={this.state.int} onClick={this.incrementAttribute} >+</button>
                    </label><br/>
                    <input type="Submit" value="Create Fighter" />
                </form>
            </div>
        )
    }
}


export default CreateFighter;
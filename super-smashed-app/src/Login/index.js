import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";


class Login extends Component {
    constructor() {
        super();
        this.state = {
            logged: false,
            username: "",
            password: ""
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const loginResponse = await fetch("http://localhost:9000/auth/login", {
            method: "POST",
            credentials: "include",
            body: JSON.stringify(this.state),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const parsedResponse = await loginResponse.json();
        if (parsedResponse.data = "login successful") {
            this.props.history.push("/fights");
        }
        console.log("This is the response from our express api:", parsedResponse);
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
        console.log(this.state);
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Username:
                    <input type="text" name="username" onChange={this.handleChange} />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" onChange={this.handleChange} />
                </label>
                <input type="Submit" value="Login" />
            </form>
        )
    }
};


export default Login;
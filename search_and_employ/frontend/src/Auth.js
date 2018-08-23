import React, { Component } from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import SearchAndEmploy from "./components/SearchAndEmploy";
import NotFound from "./components/NotFound";

class App extends Component {
    render() {
        const authurl = "https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=77arqe48ycj44b&redirect_uri=http%3A%2F%2Flocalhost%3A5000%2Fauth&state=2522abcde12345&scope=r_basicprofile";
        return (
            <div className="App">
                <a href={authurl}><img src="signin.png" alt="Sign in with Linkedin"/></a>
            </div>
        );
    }
}

import React from "react";
import { render } from "react-dom";

import{ Header } from "./components/Header";
import{ Home } from "./components/Home";

class App extends React.Component {
    render(){
        var user = {
            name: "Victoriia",
            hobbies: ["Makeup", "Music"]
        };
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home name = {"Nazarii"} age = { 25 } user = { user }>
                            <p>paragraph</p>
                        </Home>
                    </div>
                </div>
            </div>
        );
    }
}
render(<App/>, document.getElementById("app"));
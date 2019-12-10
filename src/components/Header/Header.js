import React, {Component} from 'react';
import "../Header/Header.css";

export default class Header extends Component {
    render() {
        return(
            <header className="header">
                <div className="orient">
                    <h1 className="homeText"> NBA Trivia </h1>
                </div>
            </header>
        )
    }
}
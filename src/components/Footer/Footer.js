import React, {Component} from 'react';
import '../Footer/Footer.css'


export default class Footer extends Component {
    render() {
        return(
            <div className="center">
                <footer className="foot">
                    <div className="bonus">
                        <h4>These are all the NBA Trivia Facts that we currently have,</h4>
                        <h4>So thanks for checking out the website!</h4>
                    </div>
                </footer>
            </div>
        )
    }
}
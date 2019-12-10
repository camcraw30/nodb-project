import React from "react";
import axios from "axios";

class DeleteFacts extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            team: '',
            img: '',
            fact: ''
        }
    } 
    
    handleNameChange = e => {
        this.setState({name: e.target.value})
    }

    handleTeamChange = e => {
        this.setState({team: e.target.value})
    }

    handleImageChange = e => {
        this.setState({img: e.target.value})
    }

    handleFactChange = e => {
        this.setState({fact: e.target.value})
    }

    handleClick = e => {
        const {name, team, img, fact} = this.state;
        e.preventDefault();
        axios.post("/api/nba", {
            img,
            name,
            team, 
            fact
        }).then(response => {
            console.log(response);
        }).catch((error) => {
            console.log(error)
        })
    }

    render() {
        return (
            <div>
                <input placeholder="Name" onChange={this.handleNameChange} />
                <input placeholder="team" onChange={this.handleTeamChange} />
                <input placeholder="Image URL" onChange={this.handleImageChange} />
                <input placeholder="Fact" onChange={this.handleFactChange} />
                <button onClick={this.handleClick}>Delete Fact</button>
            </div>
        )
    }


}

export default DeleteFacts;
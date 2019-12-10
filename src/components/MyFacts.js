import React, {Component} from "react";
import axios from "axios";

class MyFacts extends Component {
    constructor() {
        super();

        this.state = {
            input: ''
        }
    }

    
    deleteFact = () => {
        axios.delete(`/api/nba/facts/${this.props.element.id}`)
        .then(response => {
            console.log(response.data)
            this.props.newFactArr(response.data);
        })
    }
    
    editFactName = () => {
        axios.put(`/api/nba/facts/${this.props.element.id}`, {
            factName: this.state.input
        }).then(response => {
            this.props.newFactArr(response.data)
        })
    }
    
    editName = e => {
        this.setState({input: e.target.value});
    }
    
    editFactTeam = () => {
        axios.put(`/api/nba/facts/${this.props.element.id}`, {
            factTeam: this.state.input
        }).then(response => {
            this.props.newFactArr(response.data);
        })
    }
    
    editTeam = e => {
        this.setState({input: e.target.value});
    }
    
    editFactFact = () => {
        axios.put(`/api/nba/facts/${this.props.element.id}`, {
            factFact: this.state.input
        }).then(response => {
            this.props.newFactArr(response.data);
        })
    }
    
    editFact = e => {
        this.setState({input: e.target.value});
    }
    
    render() {
        const {fact, img, name, team} = this.props.element;
        console.log(this.props.element)
        
        return (
            <div className="fact-info">
                <div className="card-size">
                    <section className="name-img">
                        <img src={img} alt="player img" />
                        <div className="name-rating">
                            <h1>{name}</h1>
                            <h2>{team}</h2>
                            <h3>{fact}</h3>
                        </div>
                    </section>
                    <section className="cntry-team">
                        <img src={img} alt="fact img" height="30px" width="40px"/>
                    </section>
                    <section className="edit">
                        <div className="name-button">
                            <input className="edit-name" placeholder="Edit Player Name" onChange={this.editFactName} />
                            <button onClick={this.editFactName} >Change Name</button>
                        </div>
                        <div className="edit-button">
                            <input className="edit-team" placeholder="Edit Player Team" onChange={this.editFactTeam} ></input>
                            <button onClick={this.editFactTeam} >Change Team</button>
                        </div>
                        <div className="fact-edit">
                            <input className="edit-fact" placeholder="Change Fact" onChange={this.editFactFact} />
                            <button onClick={this.editFactFact}>Change Fact</button>
                        </div>
                        <button className="delete" onClick={this.deleteFact} >Remove Fact</button>
                    </section>
                </div>
            </div>
        )
    }
}

export default MyFacts;
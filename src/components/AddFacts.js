import React from "react";
import axios from "axios";
import MyFacts from './MyFacts';

class AddFacts extends React.Component {
    constructor() {
        super();

        this.state = {
            name: '',
            team: '',
            img: '',
            fact: '',
            allFacts: []
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

    handleAddFacts = e => {
        const {name, team, img, fact} = this.state;
        e.preventDefault();
        axios.post("/api/nba/add", {
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

    getAllFacts = () => {
        axios.get("/api/nba/facts").then(response => {
            console.log(response.data);
            this.setState({allFacts: response.data})
        }).catch(err => {
            console.log(err);
        })
    }

    componentDidMount() {
        this.getAllFacts();
    }

    newFactArr = arr => {
        this.setState({allFacts: arr})
    }

    render() {
        console.log(this.allFacts)
        let addedFacts = this.state.allFacts.map((element, index) => {
            console.log(element)
            return (
                <MyFacts element={element} key={index} newFactArr={this.newFactArr} />
            )
        })
        return (
            <>
                <form>
                    <input placeholder="Name" onChange={this.handleNameChange} />
                    <input placeholder="Team" onChange={this.handleTeamChange} />
                    <input placeholder="Image URL" onChange={this.handleImageChange} />
                    <input placeholder="Fact" onChange={this.handleFactChange} />
                    <button onClick={this.handleAddFacts}>Add Fact</button>
                </form>
            <section>
                {addedFacts}
            </section>
            </>
        )
    }


}

export default AddFacts;
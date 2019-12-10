import React, { Component } from "react";
import axios from 'axios';
import AddFacts from "./components/AddFacts";
import MyFacts from "./components/MyFacts";
// import DeleteFacts from "./components/DeleteFacts";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: "",
      allFacts: []
    }
  }

  componentDidMount() {
    axios.get("/api/nba/facts").then(response => {
      console.log(response.data);
      this.setState({ allFacts: response.data })
    }).catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      <section>
        <Header />
        <nav className="fact-button">
          <button className="add" onClick={() => this.setState({ currentPage: "add" })}>Add Fact</button>
          <button className="view" onClick={() => this.setState({ currentPage: "view" })}>View Facts</button>
        </nav>

        {this.state.currentPage === "add" ? <AddFacts /> : this.state.currentPage === "view" ? ( 
          this.state.allFacts.map((element, index) => {
            console.log(element)
            return (
                <MyFacts element={element} key={index} newFactArr={this.newFactArr} />
            )
        })
        ) : null}
        <Footer />
      </section>
    )
  }
}

export default App;
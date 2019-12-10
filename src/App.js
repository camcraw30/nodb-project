import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      menuStatus: 'menu-close'
    }
  }

  handleClick = () => {
    if (this.state.menuStatus === 'menu-close') {
      this.setState({ menuStatus: 'menu-open' })
    } else {
      this.setState({ menuStatus: 'menu-close' })
    }
  }

  render() {
    return (
      <>
        <header>
        <nav>
          <h1 className='logo'>Start Bootstrap</h1>
          <button className='menu-button' onClick={this.handleClick}>MENU</button>
          <ul>
            <li>Services</li>
            <li>Portfolio</li>
            <li>About</li>
            <li>Team</li>
            <li>Contact</li>
          </ul>
        </nav>
        <menu id='menu' className={this.state.menuStatus}>
            <h1 className='menu-list'>Services</h1>
            <h1 className='menu-list'>Portfolio</h1>
            <h1 className='menu-list'>About</h1>
            <h1 className='menu-list'>Team</h1>
            <h1 className='menu-list'>Contact</h1>
        </menu>
        </header>
      </>
    );
  }
}

export default App;

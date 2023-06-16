
import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import './App.css';
import PremierLeagueLogo from './Premier_League.png';

const App = () => {
  return (
    <Router>
      <div>
        <header className="header">
          <div className="navbar-logo">
            <a href="/">
              <img src={PremierLeagueLogo} alt="Premier League" />
            </a>
          </div>
          <nav className="navbar-container">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/point-table" className="nav-link" activeClassName="active">Point Table</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/played-matches" className="nav-link" activeClassName="active">Played Matches</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/add-match" className="nav-link" activeClassName="active">Add Match</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        {/* Content section */}
        <div className="app">
          <h2>Welcome to the Premier League</h2>
          {/* Add your content here */}
        </div>
      </div>
    </Router>
  );
};

export default App;


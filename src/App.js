import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import './App.css';
import PremierLeagueLogo from './Premier_League.png';
import Home from './Home';
import PointsTable from './Point_Table';

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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/point-table" element={<PointsTable />} /> {/* Add this route */}
            {/* Add routes for other components */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;



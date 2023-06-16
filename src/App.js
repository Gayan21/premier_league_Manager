import React from 'react';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';

// Home component
const Home = () => <h2>Welcome to the Home Page</h2>;

// Point Table component
const PointTable = () => <h2>Check out the Point Table</h2>;

// Played Matches component
const PlayedMatches = () => <h2>View Played Matches</h2>;

// Add Match component
const AddMatch = () => <h2>Add a New Match</h2>;

// NavigationBar component
const NavigationBar = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <NavLink exact to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/point-table">Point Table</NavLink>
          </li>
          <li>
            <NavLink to="/played-matches">Played Matches</NavLink>
          </li>
          <li>
            <NavLink to="/add-match">Add Match</NavLink>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/point-table" component={PointTable} />
        <Route path="/played-matches" component={PlayedMatches} />
        <Route path="/add-match" component={AddMatch} />
      </Switch>
    </Router>
  );
};

// App component
const App = () => {
  return (
    <div>
      <NavigationBar />
    </div>
  );
};

export default App;


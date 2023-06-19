import React from 'react';
import './PlayedMatches.css';

const PlayedMatches = () => {
  // Dummy data for played matches
  const matchesData = [
    { date: '2023-06-01', teamOne: 'Team A', goalsOne: 2, teamTwo: 'Team B', goalsTwo: 1 },
    { date: '2023-06-03', teamOne: 'Team C', goalsOne: 0, teamTwo: 'Team D', goalsTwo: 2 },
    { date: '2023-06-06', teamOne: 'Team E', goalsOne: 1, teamTwo: 'Team F', goalsTwo: 1 },
    { date: '2023-06-09', teamOne: 'Team G', goalsOne: 3, teamTwo: 'Team H', goalsTwo: 2 },
  ];

  return (
    <div>
      <h2>Played Matches</h2>
      <div className="played-matches-container">
        <table className="played-matches-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Team One</th>
              <th>Goals by Team One</th>
              <th>Team Two</th>
              <th>Goals by Team Two</th>
            </tr>
          </thead>
          <tbody>
            {matchesData.map((match, index) => (
              <tr key={index}>
                <td>{match.date}</td>
                <td>{match.teamOne}</td>
                <td>{match.goalsOne}</td>
                <td>{match.teamTwo}</td>
                <td>{match.goalsTwo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PlayedMatches;

